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

const CREATE_PROJECT = gql`
  mutation CreateProject($name: String!, $description: String!) {
    insert_projects_one(object: {name: $name, description: $description}) {
      id
      name
      description
      status
    }
  }
`;

export const createProject = async (accessToken: string, name: string, description: string): Promise<Project> => {
  const variables = {
      name,
      description
  };
  const data = await client.request<{ insert_projects_one: Project }>(CREATE_PROJECT, variables,
      { 
          'x-hasura-admin-secret': ADMIN_SECRET,
          'Authorization': `Bearer ${accessToken}`,
      }
  );
  return data.insert_projects_one;
};

export const deleteProject = async (accessToken: string, projectId: string): Promise<void> => {
  const DELETE_PROJECT = gql`
    mutation DeleteProject($id: Int!) {
      delete_projects_by_pk(id: $id) {
        id
      }
    }
  `;

  await client.request(
    DELETE_PROJECT,
    { id: projectId },
    {
      'x-hasura-admin-secret': ADMIN_SECRET,
      'Authorization': `Bearer ${accessToken}`,
    }
  );
};
