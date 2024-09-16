import { GraphQLClient } from 'graphql-request';

const API_URL = 'http://localhost:8080/v1/graphql';
const client = new GraphQLClient(API_URL);

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
