import React, { useState } from "react";
import { Form, Button, Card, Container, Row, Col, ListGroup } from "react-bootstrap";

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

interface ProjectStatus {
  value: string;
  description: string;
}

interface ProjectAssignmentProps {
    party_role: {
        party: {
            name: string;
        };
        role_type: {
            description: string;
        };
    };  
    party_role_id: number;
}

interface EditProjectProps {
  project: ProjectDetailProps;
  project_assignments: ProjectAssignmentProps[];
  onUpdate: (updatedProject: ProjectDetailProps) => void;
  onCancel: () => void;
  projectStatuses: ProjectStatus[];
  projectLeads: { party_id: number; name: string }[];
}

const EditProject: React.FC<EditProjectProps> = ({
  project,
  project_assignments,
  onUpdate,
  onCancel,
  projectStatuses,
  projectLeads,
}) => {
  const [editedProject, setEditedProject] = useState(project);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleOwnerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedPartyId = parseInt(e.target.value);
    const selectedParty = projectLeads.find(
      (lead) => lead.party_id === selectedPartyId
    );
    setEditedProject((prev) => ({
      ...prev,
      owner_party: {
        party_id: selectedPartyId,
        name: selectedParty ? selectedParty.name : "",
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editedProject);
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
                        <option key={lead.party_id} value={lead.party_id}>
                            {lead.name}
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
                { project_assignments.length > 0 ? (
                    <ListGroup variant="flush">
                    {project_assignments.map((assignment) => (
                        <ListGroup.Item key={assignment.party_role_id}>
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
        <Button type="submit" className="me-2">Update Project</Button>
        <Button variant="secondary" onClick={onCancel}>
            Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default EditProject;
