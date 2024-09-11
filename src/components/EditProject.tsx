import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { graphqlQuery } from "../api/graphql";
import { gql } from "graphql-request";

// GraphQL fragments
const PROJECT_FRAGMENT = gql`
  fragment ProjectFields on projects {
    id
    name
    description
    status
    project_status {
      description
    }
    owner_party {
      party_id
      name
    }
  }
`;

const PROJECT_ASSIGNMENT_FRAGMENT = gql`
  fragment ProjectAssignmentFields on project_assignments {
    party_role_id
    party_role {
      party {
        name
      }
      role_type {
        description
      }
    }
  }
`;

// Combined GraphQL query
const GET_PROJECT_EDIT = gql`
  ${PROJECT_FRAGMENT}
  ${PROJECT_ASSIGNMENT_FRAGMENT}
  query GetProjectEdit($projectId: Int!) {
    projects_by_pk(id: $projectId) {
      ...ProjectFields
      project_assignments(where: { project_id: { _eq: $projectId } }) {
        ...ProjectAssignmentFields
      }
    }
    project_status {
      description
      value
    }
    identity_party_roles(where: { role_type: { value: { _eq: "ProjectLead" } } }) {
      party {
        name
        party_id
      }
    }
  }
`;

const UPDATE_PROJECT = gql`
  mutation UpdateProject(
    $id: Int!
    $name: String!
    $description: String!
    $status: project_status_enum!
    $owner: Int!
  ) {
    update_projects_by_pk(
      pk_columns: { id: $id }
      _set: {
        name: $name
        description: $description
        status: $status
        owner: $owner
      }
    ) {
      id
    }
  }
`;

interface ProjectDetailProps {
  id: string;
  name: string;
  description: string;
  project_status: {
    description: string;
  };
  status: string;
  owner_party: {
    party_id: number;
    name: string;
  };
  project_assignments: ProjectAssignment[];
}

interface ProjectAssignment {
  party_role_id: number;
  party_role: {
    party: {
      name: string;
    };
    role_type: {
      description: string;
    };
  };
}

interface ProjectStatus {
  value: string;
  description: string;
}

interface EditProjectProps {
  projectId: string;
  onCancel: () => void;
  onBack: () => void;
  onUpdateSuccess: () => void;
}

const EditProject: React.FC<EditProjectProps> = ({
  projectId,
  onCancel,
  onUpdateSuccess,
}) => {
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  // Combined useQuery hook
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projectEdit", projectId],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const result = await graphqlQuery<{
        projects_by_pk: ProjectDetailProps & { project_assignments: ProjectAssignment[] },
        project_status: ProjectStatus[],
        identity_party_roles: { party: { party_id: number; name: string } }[]
      }>(
        accessToken,
        GET_PROJECT_EDIT,
        { projectId: parseInt(projectId) }
      );
      return result;
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: async (updatedProject: ProjectDetailProps) => {
      const accessToken = await getAccessTokenSilently();
      return graphqlQuery(accessToken, UPDATE_PROJECT, {
        id: updatedProject.id,
        name: updatedProject.name,
        description: updatedProject.description,
        status: updatedProject.status,
        owner: updatedProject.owner_party.party_id,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      queryClient.invalidateQueries({ queryKey: ["projectEdit", projectId] });
      onUpdateSuccess();
    },
  });

  const [editedProject, setEditedProject] = useState<ProjectDetailProps | null>(null);

  React.useEffect(() => {
    if (data?.projects_by_pk) {
      setEditedProject(data.projects_by_pk);
    }
  }, [data]);

  if (isLoading || !editedProject) {
    return <Spinner animation="border" />;
  }

  if (error) {
    return <Alert variant="danger">An error occurred while loading data.</Alert>;
  }

  if (!data || !data.projects_by_pk || !data.project_status || !data.identity_party_roles) {
    return <Alert variant="warning">Failed to load project data.</Alert>;
  }

  const { projects_by_pk: project, project_status: projectStatuses, identity_party_roles: projectLeads } = data;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({ ...prev!, [name]: value }));
  };

  const handleOwnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPartyId = parseInt(e.target.value);
    const selectedParty = projectLeads.find(
      (lead) => lead.party.party_id === selectedPartyId
    );
    setEditedProject((prev) => ({
      ...prev!,
      owner_party: {
        party_id: selectedPartyId,
        name: selectedParty ? selectedParty.party.name : "",
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedProject) {
      updateProjectMutation.mutate(editedProject);
    }
  };

  return (
    <Container>
      <h2 className="mb-4">Edit Project</h2>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header>Project Details</Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Project Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={editedProject.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Project Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    value={editedProject.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Owner</Form.Label>
                  <Form.Select
                    name="owner"
                    value={editedProject.owner_party.party_id}
                    onChange={handleOwnerChange}
                  >
                    {projectLeads.map((lead) => (
                      <option key={lead.party.party_id} value={lead.party.party_id}>
                        {lead.party.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Status</Form.Label>
                  <Form.Select
                    name="status"
                    value={editedProject.status}
                    onChange={handleInputChange}
                  >
                    {projectStatuses.map((status) => (
                      <option key={status.value} value={status.value}>
                        {status.description}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>Project Assignments</Card.Header>
              <Card.Body>
                {project.project_assignments && project.project_assignments.length > 0 ? (
                  <ListGroup variant="flush">
                    {project.project_assignments.map((assignment) => (
                      <ListGroup.Item key={assignment.party_role_id}>
                        {assignment.party_role.party.name} -{" "}
                        {assignment.party_role.role_type.description}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <Card.Text>No assignments found for this project.</Card.Text>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button type="submit" className="me-2">
          Update Project
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default EditProject;
