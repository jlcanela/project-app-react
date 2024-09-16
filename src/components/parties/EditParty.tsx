import React from "react";
import { FragmentType, useFragment, graphql } from '../../graphql';
import { EditDetails, FieldConfig } from '../EditDetails';
import { EditPartyFieldsFragment } from "../../graphql/graphql";
import { useMutation } from "@tanstack/react-query";
import { request } from 'graphql-request';
import graphQLConfig from '../../api/graphqlConfig';

const editPartyFieldsFragment = graphql(`
  fragment EditPartyFields on identity_parties {
    party_id
    first_name
    last_name
    idp_id
    party_roles {
      role_type {
        description
      }
    }
  }
`);

const updateParty = graphql(`
  mutation UpdateParty(
    $party_id: Int!
    $first_name: String!
    $last_name: String!
  ) {
    update_identity_parties_by_pk(
      pk_columns: { party_id: $party_id }
      _set: { first_name: $first_name, last_name: $last_name }
    ) {
      party_id
    }
  }
`);

const updateParty2 = graphql(`
    mutation UpdateParty2(
      $id: Int!
      $first_name: String!
      $last_name: String!
      $roles: [identity_party_roles_insert_input!]!
    ) {
      update_identity_parties_by_pk(
        pk_columns: { party_id: $id }
        _set: { first_name: $first_name, last_name: $last_name }
      ) {
        party_id
      }
      delete_identity_party_roles(where: { party: { party_id: { _eq: $id } } }) {
        affected_rows
      }
      insert_identity_party_roles(objects: $roles) {
        affected_rows
      }
    }
  `);

type EditPartyFieldsFragmentType = FragmentType<typeof editPartyFieldsFragment>;

export const EditParty: React.FC<{ 
    identity_parties_by_pk: EditPartyFieldsFragmentType, 
    onCancel: () => void, 
    onBack: () => void
  }> = ({ identity_parties_by_pk, onCancel, onBack }) => {
  const party = useFragment(editPartyFieldsFragment, identity_parties_by_pk);

  const fields: FieldConfig<EditPartyFieldsFragment>[] = [
    { key: 'first_name', label: 'First Name', editable: true },
    { key: 'last_name', label: 'Last Name', editable: true },
    { key: 'idp_id', label: 'IDP ID', editable: false },
    { 
        key: 'party_roles', 
        label: 'Roles',
        editable: false,
        render: (roles: EditPartyFieldsFragment['party_roles']) => 
          roles?.map((role) => role.role_type?.description).join(", ") || "No roles"
      }
  ];

  const updatePartyMutate = useMutation({
    mutationFn: (variables: any) => request({
      ...graphQLConfig,
      document: updateParty,
      variables
    }),
    onSuccess: () => {
      // Handle successful update
      onBack();
    },
    onError: (error) => {
      // Handle error
      console.error("Error updating party:", error);
    }
  });

  const handleSave = (updatedData: EditPartyFieldsFragment) => {
    const params = {
        party_id: party.party_id,
        first_name: updatedData.first_name,
        last_name: updatedData.last_name,
      //   roles: updatedData.party_roles.map(role => ({
      //     party_id: updatedData.party_id,
      //     role_type_id: role.role_type.role_type_id
      //   }))
      };

    updatePartyMutate.mutate(params);
  };

  return (
    <EditDetails
      data={party as EditPartyFieldsFragment}
      fields={fields}
      title="Party Details"
      onSave={handleSave}
      onCancel={onCancel}
    />
  );
};

export default EditParty;
