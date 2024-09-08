//import * as gql from 'graphql-request';
import { GraphQLClient, gql } from 'graphql-request';

const API_URL = 'http://localhost:8080/v1/graphql';
const client = new GraphQLClient(API_URL);

export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
}

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      id
      name
      description
      status
    }
  }
`;
const ADMIN_SECRET = 'admin_secret'

export const getProjects = async (accessToken: string): Promise<Project[]> => {
    const data = await client.request<{ projects: Project[] }>(GET_PROJECTS, {},
        { 
            //'x-hasura-admin-secret': ADMIN_SECRET,
            'Authorization': `Bearer ${accessToken}`,
        }
    );
    return data.projects;
  };
