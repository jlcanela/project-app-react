import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Eye, Pencil } from "react-bootstrap-icons";
import BtnDeleteProject from "./BtnDeleteProject";

export const PROJECT_ROW_FRAGMENT = `
  fragment ProjectRowFragment on projects {
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
`;

interface ProjectRowProps {
  project: {
    id: string;
    name: string;
    description: string;
    project_status: {
      description: string;
    };
    owner_party: {
      name: string;
    };
  };
}

export const ProjectRow: React.FC<ProjectRowProps> = ({ project }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/projects/${project.id}`);
  };

  const handleEdit = () => {
    navigate(`/projects/${project.id}?mode=edit`);
  };

  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.owner_party.name}</td>
      <td>{project.description}</td>
      <td>{project.project_status.description}</td>
      <td>
        <Button
          variant="primary"
          size="sm"
          className="me-2"
          onClick={handleView}
        >
          <Eye /> View
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="me-2"
          onClick={handleEdit}
        >
          <Pencil /> Edit
        </Button>
        <BtnDeleteProject projectId={project.id} />
      </td>
    </tr>
  );
};

export default ProjectRow;
