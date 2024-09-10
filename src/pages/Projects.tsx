import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../api/projects';
import { Table, Spinner, Alert } from 'react-bootstrap';
import BtnAddProject from '../components/BtnAddProject';
import BtnDeleteProject from '../components/BtnDeleteProject';

const Projects: React.FC = () => {
  const { getAccessTokenSilently } = useAuth0();
  const FIVE_SECONDS = 5 * 1000;

  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      return getProjects(accessToken);
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
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project) => (
            <tr key={project.id}>
              <td>{project.id}</td>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.status}</td>
              <td>
                <BtnDeleteProject projectId={project.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <BtnAddProject />
    </div>
  );
};

export default Projects;
