// Projects.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Table, Spinner, Alert } from 'react-bootstrap';
import { graphql, FragmentType, useFragment } from '../graphql';
import { request } from 'graphql-request'
import graphQLConfig from '../api/graphqlConfig';
import { EntityRow, FieldConfig } from '../components/EntityRow';
import { ProjectsQuery, ProjectRowFieldsFragment } from '../graphql/graphql';

const projectRowFieldsFragment = graphql(`
  fragment ProjectRowFields on projects {
    id
    name
    description
    project_status {
      description
    }
    owner_party {
      name
    }
  }
`);

const projectsQueryDocument = graphql(`
  query Projects {
    projects {
      ...ProjectRowFields
    }
  }
`);

const projectFields: FieldConfig<ProjectRowFieldsFragment>[] = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'description', label: 'Description' },
    { 
      key: 'project_status', 
      label: 'Status',
      render: (status) => (status as ProjectRowFieldsFragment['project_status'])?.description || 'N/A'
    },
    { 
      key: 'owner_party', 
      label: 'Owner',
      render: (owner) => (owner as ProjectRowFieldsFragment['owner_party'])?.name || 'N/A'
    }
  ];

const ProjectRow: React.FC<{ project: FragmentType<typeof projectRowFieldsFragment> }> = ({ project }) => {
  const fragmentData = useFragment(projectRowFieldsFragment, project);
  
  return (
    <EntityRow<ProjectRowFieldsFragment>
      entity={fragmentData}
      fields={projectFields}
      idField="id"
      entityName="projects"
    />
  );
};

const Projects: React.FC = () => {
  const { data, isLoading, error } = useQuery<ProjectsQuery>({
    queryKey: ['projects'],
    queryFn: () => request({ ...graphQLConfig, document: projectsQueryDocument }),
  });

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred: {(error as Error).message}</Alert>;
  if (!data?.projects) return <span>No projects found</span>;

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
            <th>Owner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.projects.map((project, index) => (
            <ProjectRow key={index} project={project} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Projects;
