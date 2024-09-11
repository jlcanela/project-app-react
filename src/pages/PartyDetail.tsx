import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { graphqlQuery, Party, RoleType } from '../api/graphql';
import { Form, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { gql } from 'graphql-request';

const GET_PARTY = gql`
  query GetParty($id: Int!) {
    identity_parties_by_pk(party_id: $id) {
      party_id
      first_name
      last_name
      idp_id
      party_roles {
        role_type {
          value
          description
        }
      }
    }
  }
`;

const UPDATE_PARTY = gql`
  mutation UpdateParty($id: Int!, $first_name: String!, $last_name: String!, $roles: [identity_party_roles_insert_input!]!) {
    update_identity_parties_by_pk(pk_columns: {party_id: $id}, _set: {first_name: $first_name, last_name: $last_name}) {
      party_id
    }
    delete_identity_party_roles(where: { party: {party_id: {_eq: $id}}}) {
      affected_rows
    }
    insert_identity_party_roles(objects: $roles) {
      affected_rows
    }
  }
`;

const GET_ROLE_TYPES = gql`
  query GetRoleTypes {
    identity_role_type {
      value
      description
    }
  }
`;

const PartyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();
  const [party, setParty] = useState<Party | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get('mode') === 'edit');
  }, [searchParams]);

  const { isLoading: isLoadingParty, error: partyError } = useQuery({
    queryKey: ['party', id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ identity_parties_by_pk: Party }>(accessToken, GET_PARTY, { id });
      setParty(data.identity_parties_by_pk);
      return data.identity_parties_by_pk;
    },
    staleTime: 5 * 1000,
  });

  const { data: roleTypes, isLoading: isLoadingRoleTypes, error: roleTypesError } = useQuery({
    queryKey: ['roleTypes'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ identity_role_type: RoleType[] }>(accessToken, GET_ROLE_TYPES);
      return data.identity_role_type;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const updatePartyMutation = useMutation({
    mutationFn: async (updatedParty: Party) => {
      const accessToken = await getAccessTokenSilently();
      return graphqlQuery(accessToken, UPDATE_PARTY, {
        id: updatedParty.party_id,
        first_name: updatedParty.first_name,
        last_name: updatedParty.last_name,
        roles: updatedParty.party_roles
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['parties'] });
      queryClient.invalidateQueries({ queryKey: ['party', id] });
      setIsEditMode(false);
    },
  });

  const handleUpdate = (updatedParty: Party) => {
    updatePartyMutation.mutate(updatedParty);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/parties/${id}` : `/parties/${id}?mode=edit`);
  };

  if (isLoadingParty || isLoadingRoleTypes) return <Spinner animation="border" />;
  if (partyError || roleTypesError) return <Alert variant="danger">An error occurred: {((partyError || roleTypesError) as Error).message}</Alert>;
  if (!party || !roleTypes) return <Alert variant="warning">Party or role type data not found</Alert>;

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          {isEditMode ? (
            <EditParty
              party={party}
              onUpdate={handleUpdate}
              onCancel={toggleEditMode}
              roleTypes={roleTypes}
            />
          ) : (
            <ViewParty
              party={party}
              onEdit={toggleEditMode}
              onBack={() => navigate('/parties')}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

interface ViewPartyProps {
  party: Party;
  onEdit: () => void;
  onBack: () => void;
}

const ViewParty: React.FC<ViewPartyProps> = ({ party, onEdit, onBack }) => (
  <>
    <h1>Party Details</h1>
    <p><strong>First Name:</strong> {party.first_name}</p>
    <p><strong>Last Name:</strong> {party.last_name}</p>
    <p><strong>IDP ID:</strong> {party.idp_id}</p>
    <p><strong>Roles:</strong> {party.party_roles.map(role => role.role_type.description).join(', ')}</p>
    <Button variant="primary" onClick={onEdit}>Edit Party</Button>
    <Button variant="secondary" className="ms-2" onClick={onBack}>Back to Parties</Button>
  </>
);

interface EditPartyProps {
  party: Party;
  onUpdate: (updatedParty: Party) => void;
  onCancel: () => void;
  roleTypes: RoleType[];
}

const EditParty: React.FC<EditPartyProps> = ({ party, onUpdate, onCancel, roleTypes }) => {
  const [editedParty, setEditedParty] = useState<Party>(party);
  const [selectedRoles, setSelectedRoles] = useState<string[]>(
    party.party_roles.map(role => role.role_type.value)
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedParty(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedParty = {
      ...editedParty,
      party_roles: selectedRoles.filter(role => role !== 'Administrator').map(role => ({ role_type_id: role, party_id: party.party_id }))
    };
    onUpdate(updatedParty);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRoles(prev => [...prev, value]);
    } else {
      setSelectedRoles(prev => prev.filter(role => role !== value));
    }
  };

  return (
    <>
      <h1>Edit Party</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            value={editedParty.first_name}
            onChange={handleInputChange}
            placeholder="Enter first name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            value={editedParty.last_name}
            onChange={handleInputChange}
            placeholder="Enter last name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Label>Roles</Form.Label>
        {roleTypes.map(role => (
            <Form.Check 
            key={role.value}
            type="checkbox"
            label={role.description}
            value={role.value}
            checked={selectedRoles.includes(role.value)}
            disabled={role.value==='Administrator'}
            onChange={handleRoleChange}
            />
        ))}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>IDP ID</Form.Label>
          <Form.Control
            type="text"
            name="idp_id"
            value={editedParty.idp_id}
            readOnly
          />
        </Form.Group>
        <Button variant="primary" type="submit">Update Party</Button>
        <Button variant="secondary" className="ms-2" onClick={onCancel}>Cancel</Button>
      </Form>
    </>
  );
};

export default PartyDetail;
