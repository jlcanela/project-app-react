import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { graphqlQuery, Party } from '../api/graphql';
import { Table, Spinner, Alert } from 'react-bootstrap';

import { gql } from 'graphql-request';
import PartyRow from '../components/PartyRow';

const GET_PARTIES = gql`
  query GetParties {
    identity_parties {
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
  }
`;

const Parties: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();
  const FIVE_SECONDS = 5 * 1000;

  const { data: parties, isLoading, error } = useQuery({
    queryKey: ['parties'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ identity_parties: Party[] }>(accessToken, GET_PARTIES);
      return data.identity_parties;
    },
    staleTime: FIVE_SECONDS,
  });

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred: {(error as Error).message}</Alert>;

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
          {parties?.map((party) => (
            <PartyRow key={party.party_id} party={party} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Parties;
