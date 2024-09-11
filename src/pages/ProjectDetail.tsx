import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { graphqlQuery } from "../api/graphql";
import {
  Spinner,
  Alert,
} from "react-bootstrap";
import { gql } from "graphql-request";
import EditProject from "../components/EditProject";
import ViewProject from "../components/ViewProject";

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
  project_assignments: ProjectAssignment[];
}

interface ProjectAssignment {
  party_role_id: number;
  party_name: string;
  role_description: string;
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

interface ProjectAssignment {
  party_role_id: number;
  party_name: string;
  role_description: string;
}

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
      const data = await graphqlQuery<{ projects_by_pk: ProjectDetailProps, project_assignments: ProjectAssignmentProps[] }>(
        accessToken,
        GET_PROJECT,
        { projectId: parseInt(id as string) }
      );
        
      return data;
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
    <>
      {isEditMode ? (
        <EditProject
          project={project.projects_by_pk}
          project_assignments={project.project_assignments}
          onUpdate={handleUpdate}
          onCancel={() => navigate(`/projects/${id}`)}
          projectStatuses={projectStatuses}
          projectLeads={projectLeads}
          //onEdit={toggleEditMode}
          //onBack={() => navigate("/projects")}
        />
      ) : (
        <ViewProject
          project={project.projects_by_pk}
          project_assignments={project.project_assignments}
          onEdit={toggleEditMode}
          onBack={() => navigate("/projects")}
        />
      )}
    </>
  );
};

export default ProjectDetail;
