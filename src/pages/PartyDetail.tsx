import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { graphql } from '../graphql';
import { request } from 'graphql-request'
import graphQLConfig from '../api/graphqlConfig';
import ViewParty from '../components/parties/ViewParty';

import {
  Spinner,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { PartyViewQuery } from '../graphql/graphql';
import EditParty from "../components/parties/EditParty";


const partyViewQueryDocument = graphql(`
 query PartyView($id: Int!) {
  identity_parties_by_pk(party_id: $id) {
    ...ViewPartyFields
    ...EditPartyFields
    }
  identity_role_type {
    ...RoleTypeFields
    }
  }
`);

const PartyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const party_id = id ? parseInt(id): 0;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get("mode") === "edit");
  }, [searchParams]);
  
  const { data, isLoading, error } = useQuery<PartyViewQuery>({queryKey: ['parties'], queryFn: async () => {
    const {
      identity_parties_by_pk,
      identity_role_type
    } =  await request({
      ...graphQLConfig,
      'document': partyViewQueryDocument,
      variables: {
        id: party_id
      }
    });

    return {
      identity_parties_by_pk,
      identity_role_type      
    }
  }});

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/parties/${id}` : `/parties/${id}?mode=edit`);
  };
  
  if (isLoading)
    return <Spinner animation="border" />;
  if (error)
    //    An error occurred: {((error || roleTypesError) as Error).message}
  return (
    <Alert variant="danger">
        An error occured
      </Alert>
    );
  
    if (!data) {
      return <span>No data</span>;
    }

  let { 
    identity_parties_by_pk, 
    identity_role_type 
  } = data;
  
  console.log(identity_role_type);
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          {identity_parties_by_pk && (isEditMode ? ( <EditParty identity_parties_by_pk={identity_parties_by_pk} identity_role_type={identity_role_type} onCancel={toggleEditMode} 
           onBack={() => navigate("/parties")} />
          ) : (
           <ViewParty identity_parties_by_pk={identity_parties_by_pk} onEdit={toggleEditMode}
           onBack={() => navigate("/parties")}
           />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default PartyDetail;
