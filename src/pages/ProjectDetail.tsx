import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { graphqlQuery, Project, ProjectStatus } from '../api/graphql';
import { Form, Button, Spinner, Alert, Container, Row, Col } from 'react-bootstrap';
import { gql } from 'graphql-request';

const GET_PROJECT = gql`
  query GetProject($id: Int!) {
    projects_by_pk(id: $id) {
      id
      name
      description
      status
      project_status {
        description
      }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject($id: Int!, $name: String!, $description: String!, $status: project_status_enum!) {
    update_projects_by_pk(pk_columns: {id: $id}, _set: {name: $name, description: $description, status: $status}) {
      id
    }
  }
`;

const GET_PROJECT_STATUSES = gql`
  query ProjectStatus {
    project_status {
      description
      value
    }
  }
`;

interface ProjectProps {
  project: Project;
  onEdit: () => void;
  onBack: () => void;
}

const ViewProject: React.FC<ProjectProps> = ({ project, onEdit, onBack }) => {
  return (
    <>
      <h1>Project Details</h1>
      <p><strong>Name:</strong> {project.name}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Status:</strong> {project.project_status.description}</p>
      <Button variant="primary" onClick={onEdit}>
        Edit Project
      </Button>
      <Button variant="secondary" className="ms-2" onClick={onBack}>
        Back to Projects
      </Button>
    </>
  );
};

interface EditProjectProps extends ProjectProps {
  onUpdate: (updatedProject: Project) => void;
  onCancel: () => void;
  projectStatuses: ProjectStatus[];
}

const EditProject: React.FC<EditProjectProps> = ({ project, onUpdate, onCancel, projectStatuses }) => {
  const [editedProject, setEditedProject] = useState<Project>(project);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditedProject(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editedProject);
  };

  return (
    <>
      <h1>Edit Project</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Project Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={editedProject.name}
            onChange={handleInputChange}
            placeholder="Enter project name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Project Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={editedProject.description}
            onChange={handleInputChange}
            placeholder="Enter project description"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Status</Form.Label>
          <Form.Select
            name="status"
            value={editedProject.status}
            onChange={handleInputChange}
          >
            {projectStatuses.map(status => (
              <option key={status.value} value={status.value}>
                {status.description}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Update Project
        </Button>
        <Button variant="secondary" className="ms-2" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </>
  );
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();
  const [project, setProject] = useState<Project | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get('mode') === 'edit');
  }, [searchParams]);

  const { isLoading: isLoadingProject, error: projectError } = useQuery({
    queryKey: ['project', id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ projects_by_pk: Project }>(accessToken, GET_PROJECT, { id });
      setProject(data.projects_by_pk);
      return data.projects_by_pk;
    },
    staleTime: 5 * 1000,
  });

  const { data: projectStatuses, isLoading: isLoadingStatuses, error: statusesError } = useQuery({
    queryKey: ['projectStatuses'],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ project_status: ProjectStatus[] }>(accessToken, GET_PROJECT_STATUSES);
      return data.project_status;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const updateProjectMutation = useMutation({
    mutationFn: async (updatedProject: Project) => {
      const accessToken = await getAccessTokenSilently();
      return graphqlQuery(accessToken, UPDATE_PROJECT, {
        id: updatedProject.id,
        name: updatedProject.name,
        description: updatedProject.description,
        status: updatedProject.status // This uses the selected value in the select dropdown
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', id] });
      setIsEditMode(false);
    },
  });

  const handleUpdate = (updatedProject: Project) => {
    updateProjectMutation.mutate(updatedProject);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/projects/${id}` : `/projects/${id}?mode=edit`);
  };

  if (isLoadingProject || isLoadingStatuses) return <Spinner animation="border" />;
  if (projectError || statusesError) return <Alert variant="danger">An error occurred: {((projectError || statusesError) as Error).message}</Alert>;
  if (!project || !projectStatuses) return <Alert variant="warning">Project or status data not found</Alert>;

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          {isEditMode ? (
            <EditProject
              project={project}
              onUpdate={handleUpdate}
              onCancel={toggleEditMode}
              onEdit={toggleEditMode}
              onBack={() => navigate('/projects')}
              projectStatuses={projectStatuses}
            />
          ) : (
            <ViewProject
              project={project}
              onEdit={toggleEditMode}
              onBack={() => navigate('/projects')}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
