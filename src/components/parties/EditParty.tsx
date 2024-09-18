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
        value
        description
      }
    }
  }
`);

const updateParty2 = graphql(`
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

const updateParty = graphql(`
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
    { key: 'first_name', label: 'First Name', editable: true, inputType: 'text' },
    { key: 'last_name', label: 'Last Name', editable: true, inputType: 'text' },
    { key: 'idp_id', label: 'IDP ID', editable: false, inputType: 'text' },
    {
      key: 'party_roles',
      label: 'Roles',
      editable: true,
      inputType: 'multiselect',
      options: party.party_roles.map(role => ({ 
        value: role.role_type.value, 
        label: role.role_type.description || 'Unknown'
      })),
      is_checked: (option: any, value: any[]) => {
        return value.map((v) => v.role_type.value).includes(option)
      },
      uncheck: (currentValues: any[], option: any) => {
        return currentValues.filter((value) => value.role_type.value !== option.value);
      },
      check:  (currentValues: any[], options: any[] | undefined, option: any) => {
        const newValue = { role_type: options?.find((o) => o.value === option.value) };
        const newValues = [...currentValues, newValue];
        return newValues;
      },
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
        roles: updatedData.party_roles.map(role => ({
          party_id: updatedData.party_id,
          role_type_id: role.role_type.value
        }))
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
