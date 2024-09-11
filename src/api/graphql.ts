//import * as gql from 'graphql-request';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'http://localhost:8080/v1/graphql';
const client = new GraphQLClient(API_URL);

export interface Project {
  id: string;
  name: string;
  description: string;
  project_status: {
    description: string;
  };
  status: string;
}

function headers(accessToken: String) {
  //const ADMIN_SECRET = 'admin_secret' 
  return ({
    //'x-hasura-admin-secret': ADMIN_SECRET,
    'Authorization': `Bearer ${accessToken}`,
  });
}

export const graphqlQuery = async <T>(accessToken: string, query: string, variables = {}): Promise<T> => {
  const data = await client.request<T>(
    query,
    variables,
    headers(accessToken)
  );
  return data;
};
