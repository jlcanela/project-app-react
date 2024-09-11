import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { graphqlQuery } from "../api/graphql";
import {
  Form,
  Button,
  Spinner,
  Alert,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { gql } from "graphql-request";

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
      owner_party {
        party_id
        name
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

const GET_PROJECT_STATUSES = gql`
  query ProjectStatus {
    project_status {
      description
      value
    }
  }
`;

const GET_PROJECT_LEADS = gql`
  query GET_PROJECT_LEADS {
    identity_party_roles(
      where: { role_type: { value: { _eq: "ProjectLead" } } }
    ) {
      party {
        name
        party_id
      }
    }
  }
`;

interface ProjectStatus {
  value: string;
  description: string;
}

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

interface ProjectProps {
  project: ProjectDetailProps;
  onEdit: () => void;
  onBack: () => void;
}

const ViewProject: React.FC<ProjectProps> = ({ project, onEdit, onBack }) => {
  return (
    <>
      <h1>Project Details</h1>
      <p>
        <strong>Name:</strong> {project.name}
      </p>
      <p>
        <strong>Owner:</strong> {project.owner_party.name}
      </p>
      <p>
        <strong>Description:</strong> {project.description}
      </p>
      <p>
        <strong>Status:</strong> {project.project_status.description}
      </p>
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
  onUpdate: (updatedProject: ProjectDetailProps) => void;
  onCancel: () => void;
  projectStatuses: ProjectStatus[];
  projectLeads: { party_id: number; name: string }[];
}

const EditProject: React.FC<EditProjectProps> = ({
  project,
  onUpdate,
  onCancel,
  projectStatuses,
  projectLeads,
}) => {
  const [editedProject, setEditedProject] =
    useState<ProjectDetailProps>(project);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get("mode") === "edit");
  }, [searchParams]);

  const {
    data: project,
    isLoading: isLoadingProject,
    error: projectError,
  } = useQuery({
    queryKey: ["project", id],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ projects_by_pk: ProjectDetailProps }>(
        accessToken,
        GET_PROJECT,
        { id }
      );
      return data.projects_by_pk;
    },
    staleTime: 5 * 1000,
  });

  const {
    data: projectStatuses,
    isLoading: isLoadingStatuses,
    error: statusesError,
  } = useQuery({
    queryKey: ["projectStatuses"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{ project_status: ProjectStatus[] }>(
        accessToken,
        GET_PROJECT_STATUSES
      );
      return data.project_status;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });

  const {
    data: projectLeads,
    isLoading: isLoadingProjectLeads,
    error: projectLeadsError,
  } = useQuery({
    queryKey: ["projectLeads"],
    queryFn: async () => {
      const accessToken = await getAccessTokenSilently();
      const data = await graphqlQuery<{
        identity_party_roles: { party: { party_id: number; name: string } }[];
      }>(accessToken, GET_PROJECT_LEADS);
      return data.identity_party_roles.map((role) => role.party);
    },
    staleTime: 5 * 1000, // Cache for 5 seconds
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
      queryClient.invalidateQueries({ queryKey: ["project", id] });
      setIsEditMode(false);
    },
  });

  const handleUpdate = (updatedProject: ProjectDetailProps) => {
    updateProjectMutation.mutate(updatedProject);
  };

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/projects/${id}` : `/projects/${id}?mode=edit`);
  };

  if (isLoadingProject || isLoadingStatuses || isLoadingProjectLeads)
    return <Spinner animation="border" />;
  if (projectError || statusesError || projectLeadsError)
    return (
      <Alert variant="danger">
        An error occurred:{" "}
        {
          ((projectError || statusesError || projectLeadsError) as Error)
            .message
        }
      </Alert>
    );
  if (!project || !projectStatuses || !projectLeads) {
    return (
      <Alert variant="warning">
        Project, status, or project leads data not found
      </Alert>
    );
  }

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
              onBack={() => navigate("/projects")}
              projectStatuses={projectStatuses}
              projectLeads={projectLeads}
            />
          ) : (
            <ViewProject
              project={project}
              onEdit={toggleEditMode}
              onBack={() => navigate("/projects")}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
