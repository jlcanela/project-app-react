import React from "react";
import { Button, ListGroup, Container, Row, Card, Col, Spinner, Alert } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { graphqlQuery } from "../api/graphql";
import { gql } from "graphql-request";

const GET_PROJECT = gql`
  query GetProject($projectId: Int!) {
    projects_by_pk(id: $projectId) {
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
    project_assignments(where: {project_id: {_eq: $projectId}}) {
      party_role {
        party {
          name
        }
        role_type {
          description
        }
      }
      party_role_id
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
}

interface ProjectAssignmentProps {
  party_role: {
    party_role_id: number;
    party: {
      name: string;
    };
    role_type: {
      description: string;
    };
  };  
}

interface ViewProjectProps {
  projectId: string;
  onEdit: () => void;
  onBack: () => void;
}

const ViewProject: React.FC<ViewProjectProps> = ({
  projectId,
  onEdit,
  onBack,
}) => {
  const { getAccessTokenSilently } = useAuth0();

  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const result = await graphqlQuery<{ projects_by_pk: ProjectDetailProps, project_assignments: ProjectAssignmentProps[] }>(
        accessToken,
        GET_PROJECT,
        { projectId: parseInt(projectId) }
      );
      return result;
    },
  });

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred: {(error as Error).message}</Alert>;
  if (!data || !data.projects_by_pk) return <Alert variant="warning">Project data not found</Alert>;

  const { projects_by_pk: project, project_assignments } = data;

  return (
    <Container>
      <h2 className="mb-4">Project Overview</h2>
      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>Project Details</Card.Header>
            <Card.Body>
              <Card.Text><strong>Name:</strong> {project.name}</Card.Text>
              <Card.Text><strong>Owner:</strong> {project.owner_party.name}</Card.Text>
              <Card.Text><strong>Description:</strong> {project.description}</Card.Text>
              <Card.Text><strong>Status:</strong> {project.project_status.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Project Assignments</Card.Header>
            <Card.Body>
              {project_assignments.length > 0 ? (
                <ListGroup variant="flush">
                  {project_assignments.map((assignment) => (
                    <ListGroup.Item key={assignment.party_role.party_role_id}>
                      {assignment.party_role.party.name} - {assignment.party_role.role_type.description}
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
      <Row className="mt-4">
        <Col>
          <Button onClick={onEdit} className="me-2">Edit Project</Button>
          <Button variant="secondary" onClick={onBack}>Back to Projects</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProject;
