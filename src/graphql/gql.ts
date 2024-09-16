/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment EditPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n": types.EditPartyFieldsFragmentDoc,
    "\n  mutation UpdateParty(\n    $party_id: Int!\n    $first_name: String!\n    $last_name: String!\n  ) {\n    update_identity_parties_by_pk(\n      pk_columns: { party_id: $party_id }\n      _set: { first_name: $first_name, last_name: $last_name }\n    ) {\n      party_id\n    }\n  }\n": types.UpdatePartyDocument,
    "\n    mutation UpdateParty2(\n      $id: Int!\n      $first_name: String!\n      $last_name: String!\n      $roles: [identity_party_roles_insert_input!]!\n    ) {\n      update_identity_parties_by_pk(\n        pk_columns: { party_id: $id }\n        _set: { first_name: $first_name, last_name: $last_name }\n      ) {\n        party_id\n      }\n      delete_identity_party_roles(where: { party: { party_id: { _eq: $id } } }) {\n        affected_rows\n      }\n      insert_identity_party_roles(objects: $roles) {\n        affected_rows\n      }\n    }\n  ": types.UpdateParty2Document,
    "\n  fragment ViewPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n": types.ViewPartyFieldsFragmentDoc,
    "\n  fragment PartyRowFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n": types.PartyRowFieldsFragmentDoc,
    "\n  query Parties {\n    identity_parties {\n      ...PartyRowFields\n    }\n  }\n": types.PartiesDocument,
    "\n query PartyView($id: Int!) {\n  identity_parties_by_pk(party_id: $id) {\n    ...ViewPartyFields\n    ...EditPartyFields\n    }\n  }\n": types.PartyViewDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment EditPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment EditPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateParty(\n    $party_id: Int!\n    $first_name: String!\n    $last_name: String!\n  ) {\n    update_identity_parties_by_pk(\n      pk_columns: { party_id: $party_id }\n      _set: { first_name: $first_name, last_name: $last_name }\n    ) {\n      party_id\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateParty(\n    $party_id: Int!\n    $first_name: String!\n    $last_name: String!\n  ) {\n    update_identity_parties_by_pk(\n      pk_columns: { party_id: $party_id }\n      _set: { first_name: $first_name, last_name: $last_name }\n    ) {\n      party_id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateParty2(\n      $id: Int!\n      $first_name: String!\n      $last_name: String!\n      $roles: [identity_party_roles_insert_input!]!\n    ) {\n      update_identity_parties_by_pk(\n        pk_columns: { party_id: $id }\n        _set: { first_name: $first_name, last_name: $last_name }\n      ) {\n        party_id\n      }\n      delete_identity_party_roles(where: { party: { party_id: { _eq: $id } } }) {\n        affected_rows\n      }\n      insert_identity_party_roles(objects: $roles) {\n        affected_rows\n      }\n    }\n  "): (typeof documents)["\n    mutation UpdateParty2(\n      $id: Int!\n      $first_name: String!\n      $last_name: String!\n      $roles: [identity_party_roles_insert_input!]!\n    ) {\n      update_identity_parties_by_pk(\n        pk_columns: { party_id: $id }\n        _set: { first_name: $first_name, last_name: $last_name }\n      ) {\n        party_id\n      }\n      delete_identity_party_roles(where: { party: { party_id: { _eq: $id } } }) {\n        affected_rows\n      }\n      insert_identity_party_roles(objects: $roles) {\n        affected_rows\n      }\n    }\n  "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ViewPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ViewPartyFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment PartyRowFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment PartyRowFields on identity_parties {\n    party_id\n    first_name\n    last_name\n    idp_id\n    party_roles {\n      role_type {\n        description\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Parties {\n    identity_parties {\n      ...PartyRowFields\n    }\n  }\n"): (typeof documents)["\n  query Parties {\n    identity_parties {\n      ...PartyRowFields\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n query PartyView($id: Int!) {\n  identity_parties_by_pk(party_id: $id) {\n    ...ViewPartyFields\n    ...EditPartyFields\n    }\n  }\n"): (typeof documents)["\n query PartyView($id: Int!) {\n  identity_parties_by_pk(party_id: $id) {\n    ...ViewPartyFields\n    ...EditPartyFields\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;