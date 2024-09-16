// components/projects/EditProject.tsx
import React from "react";
import { FragmentType, useFragment, graphql } from '../../graphql';
import { EditDetails, FieldConfig } from '../EditDetails';
import { ProjectDetailFieldsFragment } from "../../graphql/graphql";
import { useMutation } from "@tanstack/react-query";
import { request } from 'graphql-request';
import graphQLConfig from '../../api/graphqlConfig';

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

type ProjectDetailFieldsFragmentType = FragmentType<typeof projectDetailFieldsFragment>;

export const EditProject: React.FC<{ 
  projects_by_pk: ProjectDetailFieldsFragmentType, 
  onCancel: () => void, 
  onBack: () => void
}> = ({ projects_by_pk, onCancel, onBack }) => {
  const project = useFragment(projectDetailFieldsFragment, projects_by_pk);

  const fields: FieldConfig<ProjectDetailFieldsFragment>[] = [
    { key: 'name', label: 'Name', editable: true },
    { key: 'description', label: 'Description', editable: true },
    { key: 'status', label: 'Status', editable: true },
    { 
      key: 'project_status', 
      label: 'Project Status',
      editable: false,
      render: (status) => status?.description || 'N/A'
    },
    { 
      key: 'owner_party', 
      label: 'Owner',
      editable: false,
      render: (owner) => owner?.name || 'N/A'
    }
  ];

  const updateProjectMutate = useMutation({
    mutationFn: (variables: any) => request({
      ...graphQLConfig,
      document: updateProject,
      variables
    }),
    onSuccess: () => {
      // Handle successful update
      onBack();
    },
    onError: (error) => {
      // Handle error
      console.error("Error updating project:", error);
    }
  });

  const handleSave = (updatedData: ProjectDetailFieldsFragment) => {
    const params = {
      id: project.id,
      name: updatedData.name,
      description: updatedData.description,
      status: updatedData.status,
      owner: updatedData.owner_party?.party_id
    };

    updateProjectMutate.mutate(params);
  };

  return (
    <EditDetails
      data={project as ProjectDetailFieldsFragment}
      fields={fields}
      title="Project Details"
      onSave={handleSave}
      onCancel={onCancel}
    />
  );
};

export default EditProject;