// Parties.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { graphql, FragmentType, useFragment } from '../graphql';
import { request } from 'graphql-request'
import graphQLConfig from '../api/graphqlConfig';
import { EntityRow, FieldConfig } from '../components/EntityRow';
import { PartiesQuery, PartyRowFieldsFragment, ViewPartyFieldsFragment } from '../graphql/graphql';

const partyRowFieldsFragment = graphql(`
  fragment PartyRowFields on identity_parties {
    party_id
    first_name
    last_name
    idp_id
    party_roles {
      role_type {
        description
      }
    }
  }
`);

const partiesQueryDocument = graphql(`
  query Parties {
    identity_parties {
      ...PartyRowFields
    }
  }
`);

const partyFields: FieldConfig<PartyRowFieldsFragment>[] = [
  { key: 'party_id', label: 'ID' },
  { key: 'first_name', label: 'First Name' },
  { key: 'last_name', label: 'Last Name' },
  { key: 'idp_id', label: 'IDP ID' },
  { 
    key: 'party_roles', 
    label: 'Roles',
    render: (roles) => {
      if (!roles || !Array.isArray(roles)) return "No roles";
      return roles.map(role => role.role_type.description).filter(Boolean).join(", ");
    }
  }
];

const PartyRow: React.FC<{ party: FragmentType<typeof partyRowFieldsFragment> }> = ({ party }) => {
  const fragmentData = useFragment(partyRowFieldsFragment, party);
  
  return (
    <EntityRow<PartyRowFieldsFragment>
      entity={fragmentData}
      fields={partyFields}
      idField="party_id"
      entityName="parties"
    />
  );
};

const Parties: React.FC = () => {
  const { data, isLoading, error } = useQuery<PartiesQuery>({
    queryKey: ['parties'],
    queryFn: () => request({ ...graphQLConfig, document: partiesQueryDocument }),
  });

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred: {(error as Error).message}</Alert>;
  if (!data?.identity_parties) return <span>Data not present</span>;

  return (
    <div>
      <h1>Parties</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>IDP ID</th>
            <th>Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.identity_parties.map((party, index) => (
            <PartyRow key={index} party={party} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Parties;
