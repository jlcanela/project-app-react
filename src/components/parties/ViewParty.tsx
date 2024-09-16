import React from "react";
import { FragmentType, graphql, useFragment } from '../../graphql';
import { ViewDetails } from '../ViewDetails';

const ViewPartyFieldsFragment = graphql(`
  fragment ViewPartyFields on identity_parties {
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

type FieldConfig<T> = {
  label: string;
  key: keyof T;
  render?: (value: any) => React.ReactNode;
};

export const ViewParty = (props: { 
  identity_parties_by_pk: FragmentType<typeof ViewPartyFieldsFragment>, 
  onEdit: () => void, 
  onBack: () => void
}) => {
  const party = useFragment(ViewPartyFieldsFragment, props.identity_parties_by_pk);

  const fields: Array<FieldConfig<typeof party>> = [
    { label: "First Name", key: "first_name" },
    { label: "Last Name", key: "last_name" },
    //{ label: "IDP ID", key: "idp_id" },
    { 
      label: "Roles", 
      key: "party_roles",
      render: (roles: any) => {
        if (!Array.isArray(roles)) return "No roles assigned";
        const roleDescriptions = roles.map((role: any) => role.role_type?.description).filter(Boolean);
        return roleDescriptions.length > 0 ? roleDescriptions.join(", ") : "No roles assigned";
      }
    },
  ];

  return (
    <ViewDetails
      data={party}
      fields={fields}
      title="Party Details"
      onEdit={props.onEdit}
      onBack={props.onBack}
    />
  );
};

export default ViewParty;
