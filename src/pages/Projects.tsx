import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { graphqlQuery } from '../api/graphql';
import { Table, Spinner, Alert } from 'react-bootstrap';
import ProjectRow, { PROJECT_ROW_FRAGMENT } from '../components/ProjectRow';
import BtnAddProject from '../components/BtnAddProject';
import { gql } from 'graphql-request';

const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      ...ProjectRowFragment
    }
  }
  ${PROJECT_ROW_FRAGMENT}
`;

interface Project {
  id: string;
  name: string;
  description: string;
  project_status: {
    description: string;
  };
  owner_party: {
    party_id: number;
    name: string;
  };
}

const Projects: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();
  const FIVE_SECONDS = 5 * 1000;

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ projects: Project[] }>(accessToken, GET_PROJECTS);
      return data.projects;
    },
    staleTime: FIVE_SECONDS,
  });

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred: {error.message}</Alert>;

  return (
    <div>
      <h1>Projects</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </tbody>
      </Table>
      <BtnAddProject />
    </div>
  );
};

export default Projects;
