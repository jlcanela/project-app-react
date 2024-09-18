// components/projects/EditProject.tsx
import React, { useState, useEffect } from "react";
import { FragmentType, useFragment, graphql } from '../../graphql';
import { EditDetails, FieldConfig } from '../EditDetails';
import { Project_Status_Enum, ProjectDetailFieldsFragment, ProjectLeadsQuery, ProjectStatusesQuery } from "../../graphql/graphql";
import { useMutation, useQuery } from "@tanstack/react-query";
import { request } from 'graphql-request';
import graphQLConfig from '../../api/graphqlConfig';
import { Form, Row, Col } from 'react-bootstrap';

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

const updateProject = graphql(`
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
`);

const projectLeadsQuery = graphql(`
  query ProjectLeads {
    identity_parties(where: {party_roles: {role_type: {description: {_eq: "Project Lead"}}}}) {
      party_id
      name
    }
  }
`);

const projectStatusesQuery = graphql(`
  query ProjectStatuses {
    project_status {
      value
      description
    }
  }
`);

type ProjectDetailFieldsFragmentType = FragmentType<typeof projectDetailFieldsFragment>;

export const EditProject: React.FC<{ 
  projects_by_pk: ProjectDetailFieldsFragmentType, 
  onCancel: () => void, 
  onBack: () => void
}> = ({ projects_by_pk, onCancel, onBack }) => {
  const project = useFragment(projectDetailFieldsFragment, projects_by_pk);
  const [editedProject, setEditedProject] = useState(project);

  const { data: projectLeadsData } = useQuery<ProjectLeadsQuery>({
    queryKey: ['projectLeads'],
    queryFn: () => request({ ...graphQLConfig, document: projectLeadsQuery }),
  });

  const { data: projectStatusesData } = useQuery<ProjectStatusesQuery>({
    queryKey: ['projectStatuses'],
    queryFn: () => request({ ...graphQLConfig, document: projectStatusesQuery }),
  });

  const projectLeads = projectLeadsData?.identity_parties || [];
  const projectStatuses = projectStatusesData?.project_status || [];

  const updateProjectMutate = useMutation({
    mutationFn: (variables: any) => request({
      ...graphQLConfig,
      document: updateProject,
      variables
    }),
    onSuccess: () => {
      onBack();
    },
    onError: (error) => {
      console.error("Error updating project:", error);
    }
  });

  const handleSave = (updatedProject: ProjectDetailFieldsFragment) => {
    const params = {
      id: updatedProject.id,
      name: updatedProject.name,
      description: updatedProject.description,
      status: updatedProject.status,
      owner: updatedProject.owner_party?.party_id
    };
    updateProjectMutate.mutate(params);
  };

  const fields: FieldConfig<ProjectDetailFieldsFragment>[] = [
    { 
      key: 'name', 
      label: 'Name', 
      editable: true, 
      inputType: 'text' 
    },
    { 
      key: 'description', 
      label: 'Description', 
      editable: true, 
      inputType: 'text' 
    },
    {
      key: 'owner_party',
      label: 'Owner',
      editable: true,
      inputType: 'select',
      options: projectLeads.map(lead => ({ 
        value: lead.party_id.toString(), 
        label: lead.name || 'Unknown'
      }))
    },
    { 
      key: 'status', 
      label: 'Status',
      editable: true,
      inputType: 'select',
      options: projectStatuses.map(status => ({ 
        value: status.value, 
        label: status.description || 'Unknown'
      }))
    },
  ];
  
  return (
    <EditDetails
      data={editedProject}
      fields={fields}
      title="Edit Project Details"
      onSave={handleSave}
      onCancel={onCancel}
    />
  );
};

export default EditProject;