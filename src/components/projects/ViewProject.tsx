// components/projects/ViewProject.tsx
import React from "react";
import { FragmentType, useFragment, graphql } from '../../graphql';
import { Button, Card } from "react-bootstrap";
import { ProjectDetailFieldsFragment } from "../../graphql/graphql";

const projectDetailFieldsFragment = graphql(`
  fragment ProjectDetailFields on projects {
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
`);

type ProjectDetailFieldsFragmentType = FragmentType<typeof projectDetailFieldsFragment>;

interface ViewProjectProps {
  projects_by_pk: ProjectDetailFieldsFragmentType;
  onEdit: () => void;
  onBack: () => void;
}

const ViewProject: React.FC<ViewProjectProps> = ({ projects_by_pk, onEdit, onBack }) => {
  const project = useFragment(projectDetailFieldsFragment, projects_by_pk);

  return (
    <Card>
      <Card.Header as="h5">Project Details</Card.Header>
      <Card.Body>
        <Card.Text>
          <strong>ID:</strong> {project.id}
        </Card.Text>
        <Card.Text>
          <strong>Name:</strong> {project.name}
        </Card.Text>
        <Card.Text>
          <strong>Description:</strong> {project.description || 'N/A'}
        </Card.Text>
        <Card.Text>
          <strong>Status:</strong> {project.project_status?.description || project.status || 'N/A'}
        </Card.Text>
        <Card.Text>
          <strong>Owner:</strong> {project.owner_party?.name || 'N/A'}
        </Card.Text>
        <Button variant="primary" onClick={onEdit} className="me-2">
          Edit
        </Button>
        <Button variant="secondary" onClick={onBack}>
          Back to Projects
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ViewProject;
