// ViewProject.tsx
import React from "react";
import { Button, ListGroup, Container, Row, Card, Col } from "react-bootstrap";

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
  party_name: string;
  role_description: string;
}

interface ViewProjectProps {
  project: ProjectDetailProps;
  project_assignments: ProjectAssignmentProps[];
  onEdit: () => void;
  onBack: () => void;
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

const ViewProject: React.FC<ViewProjectProps> = ({
    project,
    project_assignments,
    onEdit,
    onBack,
  }) => {
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
