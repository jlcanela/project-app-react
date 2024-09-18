/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  date: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "identity.parties" */
export type Identity_Parties = {
  __typename?: 'identity_parties';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name: Scalars['String']['output'];
  idp_id: Scalars['String']['output'];
  last_name: Scalars['String']['output'];
  /** A computed field, executes function "identity.party_full_name" */
  name?: Maybe<Scalars['String']['output']>;
  party_id: Scalars['Int']['output'];
  /** An array relationship */
  party_roles: Array<Identity_Party_Roles>;
  /** An aggregate relationship */
  party_roles_aggregate: Identity_Party_Roles_Aggregate;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "identity.parties" */
export type Identity_PartiesParty_RolesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


/** columns and relationships of "identity.parties" */
export type Identity_PartiesParty_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


/** columns and relationships of "identity.parties" */
export type Identity_PartiesProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


/** columns and relationships of "identity.parties" */
export type Identity_PartiesProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** aggregated selection of "identity.parties" */
export type Identity_Parties_Aggregate = {
  __typename?: 'identity_parties_aggregate';
  aggregate?: Maybe<Identity_Parties_Aggregate_Fields>;
  nodes: Array<Identity_Parties>;
};

/** aggregate fields of "identity.parties" */
export type Identity_Parties_Aggregate_Fields = {
  __typename?: 'identity_parties_aggregate_fields';
  avg?: Maybe<Identity_Parties_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Identity_Parties_Max_Fields>;
  min?: Maybe<Identity_Parties_Min_Fields>;
  stddev?: Maybe<Identity_Parties_Stddev_Fields>;
  stddev_pop?: Maybe<Identity_Parties_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Identity_Parties_Stddev_Samp_Fields>;
  sum?: Maybe<Identity_Parties_Sum_Fields>;
  var_pop?: Maybe<Identity_Parties_Var_Pop_Fields>;
  var_samp?: Maybe<Identity_Parties_Var_Samp_Fields>;
  variance?: Maybe<Identity_Parties_Variance_Fields>;
};


/** aggregate fields of "identity.parties" */
export type Identity_Parties_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Identity_Parties_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Identity_Parties_Avg_Fields = {
  __typename?: 'identity_parties_avg_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "identity.parties". All fields are combined with a logical 'AND'. */
export type Identity_Parties_Bool_Exp = {
  _and?: InputMaybe<Array<Identity_Parties_Bool_Exp>>;
  _not?: InputMaybe<Identity_Parties_Bool_Exp>;
  _or?: InputMaybe<Array<Identity_Parties_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  idp_id?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  party_id?: InputMaybe<Int_Comparison_Exp>;
  party_roles?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
  party_roles_aggregate?: InputMaybe<Identity_Party_Roles_Aggregate_Bool_Exp>;
  projects?: InputMaybe<Projects_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "identity.parties" */
export enum Identity_Parties_Constraint {
  /** unique or primary key constraint on columns "party_id" */
  PartiesPkey = 'parties_pkey'
}

/** input type for incrementing numeric columns in table "identity.parties" */
export type Identity_Parties_Inc_Input = {
  party_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "identity.parties" */
export type Identity_Parties_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  idp_id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  party_roles?: InputMaybe<Identity_Party_Roles_Arr_Rel_Insert_Input>;
  projects?: InputMaybe<Projects_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Identity_Parties_Max_Fields = {
  __typename?: 'identity_parties_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  idp_id?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "identity.party_full_name" */
  name?: Maybe<Scalars['String']['output']>;
  party_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Identity_Parties_Min_Fields = {
  __typename?: 'identity_parties_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  idp_id?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  /** A computed field, executes function "identity.party_full_name" */
  name?: Maybe<Scalars['String']['output']>;
  party_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "identity.parties" */
export type Identity_Parties_Mutation_Response = {
  __typename?: 'identity_parties_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Identity_Parties>;
};

/** input type for inserting object relation for remote table "identity.parties" */
export type Identity_Parties_Obj_Rel_Insert_Input = {
  data: Identity_Parties_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Identity_Parties_On_Conflict>;
};

/** on_conflict condition type for table "identity.parties" */
export type Identity_Parties_On_Conflict = {
  constraint: Identity_Parties_Constraint;
  update_columns?: Array<Identity_Parties_Update_Column>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};

/** Ordering options when selecting data from "identity.parties". */
export type Identity_Parties_Order_By = {
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  idp_id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  party_roles_aggregate?: InputMaybe<Identity_Party_Roles_Aggregate_Order_By>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: identity.parties */
export type Identity_Parties_Pk_Columns_Input = {
  party_id: Scalars['Int']['input'];
};

/** select columns of table "identity.parties" */
export enum Identity_Parties_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  IdpId = 'idp_id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "identity.parties" */
export type Identity_Parties_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  idp_id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Identity_Parties_Stddev_Fields = {
  __typename?: 'identity_parties_stddev_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Identity_Parties_Stddev_Pop_Fields = {
  __typename?: 'identity_parties_stddev_pop_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Identity_Parties_Stddev_Samp_Fields = {
  __typename?: 'identity_parties_stddev_samp_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "identity_parties" */
export type Identity_Parties_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Identity_Parties_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Identity_Parties_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  idp_id?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Identity_Parties_Sum_Fields = {
  __typename?: 'identity_parties_sum_fields';
  party_id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "identity.parties" */
export enum Identity_Parties_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  IdpId = 'idp_id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Identity_Parties_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Identity_Parties_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Identity_Parties_Set_Input>;
  /** filter the rows which have to be updated */
  where: Identity_Parties_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Identity_Parties_Var_Pop_Fields = {
  __typename?: 'identity_parties_var_pop_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Identity_Parties_Var_Samp_Fields = {
  __typename?: 'identity_parties_var_samp_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Identity_Parties_Variance_Fields = {
  __typename?: 'identity_parties_variance_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "identity.party_roles" */
export type Identity_Party_Roles = {
  __typename?: 'identity_party_roles';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  party: Identity_Parties;
  party_id: Scalars['Int']['output'];
  party_role_id: Scalars['Int']['output'];
  /** An object relationship */
  role_type: Identity_Role_Type;
  role_type_id: Identity_Role_Type_Enum;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "identity.party_roles" */
export type Identity_Party_Roles_Aggregate = {
  __typename?: 'identity_party_roles_aggregate';
  aggregate?: Maybe<Identity_Party_Roles_Aggregate_Fields>;
  nodes: Array<Identity_Party_Roles>;
};

export type Identity_Party_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Identity_Party_Roles_Aggregate_Bool_Exp_Count>;
};

export type Identity_Party_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "identity.party_roles" */
export type Identity_Party_Roles_Aggregate_Fields = {
  __typename?: 'identity_party_roles_aggregate_fields';
  avg?: Maybe<Identity_Party_Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Identity_Party_Roles_Max_Fields>;
  min?: Maybe<Identity_Party_Roles_Min_Fields>;
  stddev?: Maybe<Identity_Party_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Identity_Party_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Identity_Party_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Identity_Party_Roles_Sum_Fields>;
  var_pop?: Maybe<Identity_Party_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Identity_Party_Roles_Var_Samp_Fields>;
  variance?: Maybe<Identity_Party_Roles_Variance_Fields>;
};


/** aggregate fields of "identity.party_roles" */
export type Identity_Party_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "identity.party_roles" */
export type Identity_Party_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<Identity_Party_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Identity_Party_Roles_Max_Order_By>;
  min?: InputMaybe<Identity_Party_Roles_Min_Order_By>;
  stddev?: InputMaybe<Identity_Party_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Identity_Party_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Identity_Party_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Identity_Party_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<Identity_Party_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Identity_Party_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<Identity_Party_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "identity.party_roles" */
export type Identity_Party_Roles_Arr_Rel_Insert_Input = {
  data: Array<Identity_Party_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Identity_Party_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type Identity_Party_Roles_Avg_Fields = {
  __typename?: 'identity_party_roles_avg_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Avg_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "identity.party_roles". All fields are combined with a logical 'AND'. */
export type Identity_Party_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Identity_Party_Roles_Bool_Exp>>;
  _not?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Identity_Party_Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  party?: InputMaybe<Identity_Parties_Bool_Exp>;
  party_id?: InputMaybe<Int_Comparison_Exp>;
  party_role_id?: InputMaybe<Int_Comparison_Exp>;
  role_type?: InputMaybe<Identity_Role_Type_Bool_Exp>;
  role_type_id?: InputMaybe<Identity_Role_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "identity.party_roles" */
export enum Identity_Party_Roles_Constraint {
  /** unique or primary key constraint on columns "party_role_id" */
  PartyRolesPkey = 'party_roles_pkey'
}

/** input type for incrementing numeric columns in table "identity.party_roles" */
export type Identity_Party_Roles_Inc_Input = {
  party_id?: InputMaybe<Scalars['Int']['input']>;
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "identity.party_roles" */
export type Identity_Party_Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  party?: InputMaybe<Identity_Parties_Obj_Rel_Insert_Input>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  role_type?: InputMaybe<Identity_Role_Type_Obj_Rel_Insert_Input>;
  role_type_id?: InputMaybe<Identity_Role_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Identity_Party_Roles_Max_Fields = {
  __typename?: 'identity_party_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  party_id?: Maybe<Scalars['Int']['output']>;
  party_role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Identity_Party_Roles_Min_Fields = {
  __typename?: 'identity_party_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  party_id?: Maybe<Scalars['Int']['output']>;
  party_role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "identity.party_roles" */
export type Identity_Party_Roles_Mutation_Response = {
  __typename?: 'identity_party_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Identity_Party_Roles>;
};

/** input type for inserting object relation for remote table "identity.party_roles" */
export type Identity_Party_Roles_Obj_Rel_Insert_Input = {
  data: Identity_Party_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Identity_Party_Roles_On_Conflict>;
};

/** on_conflict condition type for table "identity.party_roles" */
export type Identity_Party_Roles_On_Conflict = {
  constraint: Identity_Party_Roles_Constraint;
  update_columns?: Array<Identity_Party_Roles_Update_Column>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "identity.party_roles". */
export type Identity_Party_Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  party?: InputMaybe<Identity_Parties_Order_By>;
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
  role_type?: InputMaybe<Identity_Role_Type_Order_By>;
  role_type_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: identity.party_roles */
export type Identity_Party_Roles_Pk_Columns_Input = {
  party_role_id: Scalars['Int']['input'];
};

/** select columns of table "identity.party_roles" */
export enum Identity_Party_Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  PartyRoleId = 'party_role_id',
  /** column name */
  RoleTypeId = 'role_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "identity.party_roles" */
export type Identity_Party_Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  role_type_id?: InputMaybe<Identity_Role_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Identity_Party_Roles_Stddev_Fields = {
  __typename?: 'identity_party_roles_stddev_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Stddev_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Identity_Party_Roles_Stddev_Pop_Fields = {
  __typename?: 'identity_party_roles_stddev_pop_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Stddev_Pop_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Identity_Party_Roles_Stddev_Samp_Fields = {
  __typename?: 'identity_party_roles_stddev_samp_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Stddev_Samp_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "identity_party_roles" */
export type Identity_Party_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Identity_Party_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Identity_Party_Roles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  party_id?: InputMaybe<Scalars['Int']['input']>;
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  role_type_id?: InputMaybe<Identity_Role_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Identity_Party_Roles_Sum_Fields = {
  __typename?: 'identity_party_roles_sum_fields';
  party_id?: Maybe<Scalars['Int']['output']>;
  party_role_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Sum_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** update columns of table "identity.party_roles" */
export enum Identity_Party_Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PartyId = 'party_id',
  /** column name */
  PartyRoleId = 'party_role_id',
  /** column name */
  RoleTypeId = 'role_type_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Identity_Party_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Identity_Party_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Identity_Party_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Identity_Party_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Identity_Party_Roles_Var_Pop_Fields = {
  __typename?: 'identity_party_roles_var_pop_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Var_Pop_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Identity_Party_Roles_Var_Samp_Fields = {
  __typename?: 'identity_party_roles_var_samp_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Var_Samp_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Identity_Party_Roles_Variance_Fields = {
  __typename?: 'identity_party_roles_variance_fields';
  party_id?: Maybe<Scalars['Float']['output']>;
  party_role_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "identity.party_roles" */
export type Identity_Party_Roles_Variance_Order_By = {
  party_id?: InputMaybe<Order_By>;
  party_role_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "identity.role_type" */
export type Identity_Role_Type = {
  __typename?: 'identity_role_type';
  description: Scalars['String']['output'];
  /** An array relationship */
  party_roles: Array<Identity_Party_Roles>;
  /** An aggregate relationship */
  party_roles_aggregate: Identity_Party_Roles_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "identity.role_type" */
export type Identity_Role_TypeParty_RolesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


/** columns and relationships of "identity.role_type" */
export type Identity_Role_TypeParty_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};

/** aggregated selection of "identity.role_type" */
export type Identity_Role_Type_Aggregate = {
  __typename?: 'identity_role_type_aggregate';
  aggregate?: Maybe<Identity_Role_Type_Aggregate_Fields>;
  nodes: Array<Identity_Role_Type>;
};

/** aggregate fields of "identity.role_type" */
export type Identity_Role_Type_Aggregate_Fields = {
  __typename?: 'identity_role_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Identity_Role_Type_Max_Fields>;
  min?: Maybe<Identity_Role_Type_Min_Fields>;
};


/** aggregate fields of "identity.role_type" */
export type Identity_Role_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Identity_Role_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "identity.role_type". All fields are combined with a logical 'AND'. */
export type Identity_Role_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Identity_Role_Type_Bool_Exp>>;
  _not?: InputMaybe<Identity_Role_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Identity_Role_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  party_roles?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
  party_roles_aggregate?: InputMaybe<Identity_Party_Roles_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "identity.role_type" */
export enum Identity_Role_Type_Constraint {
  /** unique or primary key constraint on columns "value" */
  RoleTypePkey = 'role_type_pkey'
}

export enum Identity_Role_Type_Enum {
  /** Administrator */
  Administrator = 'Administrator',
  /** Developer */
  Developer = 'Developer',
  /** Project Lead */
  ProjectLead = 'ProjectLead'
}

/** Boolean expression to compare columns of type "identity_role_type_enum". All fields are combined with logical 'AND'. */
export type Identity_Role_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Identity_Role_Type_Enum>;
  _in?: InputMaybe<Array<Identity_Role_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Identity_Role_Type_Enum>;
  _nin?: InputMaybe<Array<Identity_Role_Type_Enum>>;
};

/** input type for inserting data into table "identity.role_type" */
export type Identity_Role_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  party_roles?: InputMaybe<Identity_Party_Roles_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Identity_Role_Type_Max_Fields = {
  __typename?: 'identity_role_type_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Identity_Role_Type_Min_Fields = {
  __typename?: 'identity_role_type_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "identity.role_type" */
export type Identity_Role_Type_Mutation_Response = {
  __typename?: 'identity_role_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Identity_Role_Type>;
};

/** input type for inserting object relation for remote table "identity.role_type" */
export type Identity_Role_Type_Obj_Rel_Insert_Input = {
  data: Identity_Role_Type_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Identity_Role_Type_On_Conflict>;
};

/** on_conflict condition type for table "identity.role_type" */
export type Identity_Role_Type_On_Conflict = {
  constraint: Identity_Role_Type_Constraint;
  update_columns?: Array<Identity_Role_Type_Update_Column>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "identity.role_type". */
export type Identity_Role_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  party_roles_aggregate?: InputMaybe<Identity_Party_Roles_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: identity.role_type */
export type Identity_Role_Type_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "identity.role_type" */
export enum Identity_Role_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "identity.role_type" */
export type Identity_Role_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "identity_role_type" */
export type Identity_Role_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Identity_Role_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Identity_Role_Type_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "identity.role_type" */
export enum Identity_Role_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Identity_Role_Type_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Identity_Role_Type_Set_Input>;
  /** filter the rows which have to be updated */
  where: Identity_Role_Type_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "identity.parties" */
  delete_identity_parties?: Maybe<Identity_Parties_Mutation_Response>;
  /** delete single row from the table: "identity.parties" */
  delete_identity_parties_by_pk?: Maybe<Identity_Parties>;
  /** delete data from the table: "identity.party_roles" */
  delete_identity_party_roles?: Maybe<Identity_Party_Roles_Mutation_Response>;
  /** delete single row from the table: "identity.party_roles" */
  delete_identity_party_roles_by_pk?: Maybe<Identity_Party_Roles>;
  /** delete data from the table: "identity.role_type" */
  delete_identity_role_type?: Maybe<Identity_Role_Type_Mutation_Response>;
  /** delete single row from the table: "identity.role_type" */
  delete_identity_role_type_by_pk?: Maybe<Identity_Role_Type>;
  /** delete data from the table: "project_assignments" */
  delete_project_assignments?: Maybe<Project_Assignments_Mutation_Response>;
  /** delete single row from the table: "project_assignments" */
  delete_project_assignments_by_pk?: Maybe<Project_Assignments>;
  /** delete data from the table: "project_status" */
  delete_project_status?: Maybe<Project_Status_Mutation_Response>;
  /** delete single row from the table: "project_status" */
  delete_project_status_by_pk?: Maybe<Project_Status>;
  /** delete data from the table: "projects" */
  delete_projects?: Maybe<Projects_Mutation_Response>;
  /** delete single row from the table: "projects" */
  delete_projects_by_pk?: Maybe<Projects>;
  /** insert data into the table: "identity.parties" */
  insert_identity_parties?: Maybe<Identity_Parties_Mutation_Response>;
  /** insert a single row into the table: "identity.parties" */
  insert_identity_parties_one?: Maybe<Identity_Parties>;
  /** insert data into the table: "identity.party_roles" */
  insert_identity_party_roles?: Maybe<Identity_Party_Roles_Mutation_Response>;
  /** insert a single row into the table: "identity.party_roles" */
  insert_identity_party_roles_one?: Maybe<Identity_Party_Roles>;
  /** insert data into the table: "identity.role_type" */
  insert_identity_role_type?: Maybe<Identity_Role_Type_Mutation_Response>;
  /** insert a single row into the table: "identity.role_type" */
  insert_identity_role_type_one?: Maybe<Identity_Role_Type>;
  /** insert data into the table: "project_assignments" */
  insert_project_assignments?: Maybe<Project_Assignments_Mutation_Response>;
  /** insert a single row into the table: "project_assignments" */
  insert_project_assignments_one?: Maybe<Project_Assignments>;
  /** insert data into the table: "project_status" */
  insert_project_status?: Maybe<Project_Status_Mutation_Response>;
  /** insert a single row into the table: "project_status" */
  insert_project_status_one?: Maybe<Project_Status>;
  /** insert data into the table: "projects" */
  insert_projects?: Maybe<Projects_Mutation_Response>;
  /** insert a single row into the table: "projects" */
  insert_projects_one?: Maybe<Projects>;
  /** update data of the table: "identity.parties" */
  update_identity_parties?: Maybe<Identity_Parties_Mutation_Response>;
  /** update single row of the table: "identity.parties" */
  update_identity_parties_by_pk?: Maybe<Identity_Parties>;
  /** update multiples rows of table: "identity.parties" */
  update_identity_parties_many?: Maybe<Array<Maybe<Identity_Parties_Mutation_Response>>>;
  /** update data of the table: "identity.party_roles" */
  update_identity_party_roles?: Maybe<Identity_Party_Roles_Mutation_Response>;
  /** update single row of the table: "identity.party_roles" */
  update_identity_party_roles_by_pk?: Maybe<Identity_Party_Roles>;
  /** update multiples rows of table: "identity.party_roles" */
  update_identity_party_roles_many?: Maybe<Array<Maybe<Identity_Party_Roles_Mutation_Response>>>;
  /** update data of the table: "identity.role_type" */
  update_identity_role_type?: Maybe<Identity_Role_Type_Mutation_Response>;
  /** update single row of the table: "identity.role_type" */
  update_identity_role_type_by_pk?: Maybe<Identity_Role_Type>;
  /** update multiples rows of table: "identity.role_type" */
  update_identity_role_type_many?: Maybe<Array<Maybe<Identity_Role_Type_Mutation_Response>>>;
  /** update data of the table: "project_assignments" */
  update_project_assignments?: Maybe<Project_Assignments_Mutation_Response>;
  /** update single row of the table: "project_assignments" */
  update_project_assignments_by_pk?: Maybe<Project_Assignments>;
  /** update multiples rows of table: "project_assignments" */
  update_project_assignments_many?: Maybe<Array<Maybe<Project_Assignments_Mutation_Response>>>;
  /** update data of the table: "project_status" */
  update_project_status?: Maybe<Project_Status_Mutation_Response>;
  /** update single row of the table: "project_status" */
  update_project_status_by_pk?: Maybe<Project_Status>;
  /** update multiples rows of table: "project_status" */
  update_project_status_many?: Maybe<Array<Maybe<Project_Status_Mutation_Response>>>;
  /** update data of the table: "projects" */
  update_projects?: Maybe<Projects_Mutation_Response>;
  /** update single row of the table: "projects" */
  update_projects_by_pk?: Maybe<Projects>;
  /** update multiples rows of table: "projects" */
  update_projects_many?: Maybe<Array<Maybe<Projects_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Identity_PartiesArgs = {
  where: Identity_Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Identity_Parties_By_PkArgs = {
  party_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Identity_Party_RolesArgs = {
  where: Identity_Party_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Identity_Party_Roles_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Identity_Role_TypeArgs = {
  where: Identity_Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Identity_Role_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Project_AssignmentsArgs = {
  where: Project_Assignments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Assignments_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
  project_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Project_StatusArgs = {
  where: Project_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Project_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProjectsArgs = {
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Projects_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Identity_PartiesArgs = {
  objects: Array<Identity_Parties_Insert_Input>;
  on_conflict?: InputMaybe<Identity_Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Identity_Parties_OneArgs = {
  object: Identity_Parties_Insert_Input;
  on_conflict?: InputMaybe<Identity_Parties_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Identity_Party_RolesArgs = {
  objects: Array<Identity_Party_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Identity_Party_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Identity_Party_Roles_OneArgs = {
  object: Identity_Party_Roles_Insert_Input;
  on_conflict?: InputMaybe<Identity_Party_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Identity_Role_TypeArgs = {
  objects: Array<Identity_Role_Type_Insert_Input>;
  on_conflict?: InputMaybe<Identity_Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Identity_Role_Type_OneArgs = {
  object: Identity_Role_Type_Insert_Input;
  on_conflict?: InputMaybe<Identity_Role_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_AssignmentsArgs = {
  objects: Array<Project_Assignments_Insert_Input>;
  on_conflict?: InputMaybe<Project_Assignments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Assignments_OneArgs = {
  object: Project_Assignments_Insert_Input;
  on_conflict?: InputMaybe<Project_Assignments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_StatusArgs = {
  objects: Array<Project_Status_Insert_Input>;
  on_conflict?: InputMaybe<Project_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Project_Status_OneArgs = {
  object: Project_Status_Insert_Input;
  on_conflict?: InputMaybe<Project_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProjectsArgs = {
  objects: Array<Projects_Insert_Input>;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Projects_OneArgs = {
  object: Projects_Insert_Input;
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_PartiesArgs = {
  _inc?: InputMaybe<Identity_Parties_Inc_Input>;
  _set?: InputMaybe<Identity_Parties_Set_Input>;
  where: Identity_Parties_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Parties_By_PkArgs = {
  _inc?: InputMaybe<Identity_Parties_Inc_Input>;
  _set?: InputMaybe<Identity_Parties_Set_Input>;
  pk_columns: Identity_Parties_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Parties_ManyArgs = {
  updates: Array<Identity_Parties_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Party_RolesArgs = {
  _inc?: InputMaybe<Identity_Party_Roles_Inc_Input>;
  _set?: InputMaybe<Identity_Party_Roles_Set_Input>;
  where: Identity_Party_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Party_Roles_By_PkArgs = {
  _inc?: InputMaybe<Identity_Party_Roles_Inc_Input>;
  _set?: InputMaybe<Identity_Party_Roles_Set_Input>;
  pk_columns: Identity_Party_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Party_Roles_ManyArgs = {
  updates: Array<Identity_Party_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Role_TypeArgs = {
  _set?: InputMaybe<Identity_Role_Type_Set_Input>;
  where: Identity_Role_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Role_Type_By_PkArgs = {
  _set?: InputMaybe<Identity_Role_Type_Set_Input>;
  pk_columns: Identity_Role_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Identity_Role_Type_ManyArgs = {
  updates: Array<Identity_Role_Type_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_AssignmentsArgs = {
  _inc?: InputMaybe<Project_Assignments_Inc_Input>;
  _set?: InputMaybe<Project_Assignments_Set_Input>;
  where: Project_Assignments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Assignments_By_PkArgs = {
  _inc?: InputMaybe<Project_Assignments_Inc_Input>;
  _set?: InputMaybe<Project_Assignments_Set_Input>;
  pk_columns: Project_Assignments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Assignments_ManyArgs = {
  updates: Array<Project_Assignments_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Project_StatusArgs = {
  _set?: InputMaybe<Project_Status_Set_Input>;
  where: Project_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Status_By_PkArgs = {
  _set?: InputMaybe<Project_Status_Set_Input>;
  pk_columns: Project_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Project_Status_ManyArgs = {
  updates: Array<Project_Status_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProjectsArgs = {
  _inc?: InputMaybe<Projects_Inc_Input>;
  _set?: InputMaybe<Projects_Set_Input>;
  where: Projects_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_By_PkArgs = {
  _inc?: InputMaybe<Projects_Inc_Input>;
  _set?: InputMaybe<Projects_Set_Input>;
  pk_columns: Projects_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Projects_ManyArgs = {
  updates: Array<Projects_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "project_assignments" */
export type Project_Assignments = {
  __typename?: 'project_assignments';
  /** An object relationship */
  party_role: Identity_Party_Roles;
  party_role_id: Scalars['Int']['output'];
  /** An object relationship */
  project: Projects;
  project_id: Scalars['Int']['output'];
};

/** aggregated selection of "project_assignments" */
export type Project_Assignments_Aggregate = {
  __typename?: 'project_assignments_aggregate';
  aggregate?: Maybe<Project_Assignments_Aggregate_Fields>;
  nodes: Array<Project_Assignments>;
};

export type Project_Assignments_Aggregate_Bool_Exp = {
  count?: InputMaybe<Project_Assignments_Aggregate_Bool_Exp_Count>;
};

export type Project_Assignments_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Project_Assignments_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "project_assignments" */
export type Project_Assignments_Aggregate_Fields = {
  __typename?: 'project_assignments_aggregate_fields';
  avg?: Maybe<Project_Assignments_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Assignments_Max_Fields>;
  min?: Maybe<Project_Assignments_Min_Fields>;
  stddev?: Maybe<Project_Assignments_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Assignments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Assignments_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Assignments_Sum_Fields>;
  var_pop?: Maybe<Project_Assignments_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Assignments_Var_Samp_Fields>;
  variance?: Maybe<Project_Assignments_Variance_Fields>;
};


/** aggregate fields of "project_assignments" */
export type Project_Assignments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "project_assignments" */
export type Project_Assignments_Aggregate_Order_By = {
  avg?: InputMaybe<Project_Assignments_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Project_Assignments_Max_Order_By>;
  min?: InputMaybe<Project_Assignments_Min_Order_By>;
  stddev?: InputMaybe<Project_Assignments_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Project_Assignments_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Project_Assignments_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Project_Assignments_Sum_Order_By>;
  var_pop?: InputMaybe<Project_Assignments_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Project_Assignments_Var_Samp_Order_By>;
  variance?: InputMaybe<Project_Assignments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "project_assignments" */
export type Project_Assignments_Arr_Rel_Insert_Input = {
  data: Array<Project_Assignments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_Assignments_On_Conflict>;
};

/** aggregate avg on columns */
export type Project_Assignments_Avg_Fields = {
  __typename?: 'project_assignments_avg_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "project_assignments" */
export type Project_Assignments_Avg_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "project_assignments". All fields are combined with a logical 'AND'. */
export type Project_Assignments_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Assignments_Bool_Exp>>;
  _not?: InputMaybe<Project_Assignments_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Assignments_Bool_Exp>>;
  party_role?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
  party_role_id?: InputMaybe<Int_Comparison_Exp>;
  project?: InputMaybe<Projects_Bool_Exp>;
  project_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_assignments" */
export enum Project_Assignments_Constraint {
  /** unique or primary key constraint on columns "project_id", "party_role_id" */
  ProjectAssignmentsPkey = 'project_assignments_pkey'
}

/** input type for incrementing numeric columns in table "project_assignments" */
export type Project_Assignments_Inc_Input = {
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "project_assignments" */
export type Project_Assignments_Insert_Input = {
  party_role?: InputMaybe<Identity_Party_Roles_Obj_Rel_Insert_Input>;
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  project?: InputMaybe<Projects_Obj_Rel_Insert_Input>;
  project_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Project_Assignments_Max_Fields = {
  __typename?: 'project_assignments_max_fields';
  party_role_id?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "project_assignments" */
export type Project_Assignments_Max_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Project_Assignments_Min_Fields = {
  __typename?: 'project_assignments_min_fields';
  party_role_id?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "project_assignments" */
export type Project_Assignments_Min_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "project_assignments" */
export type Project_Assignments_Mutation_Response = {
  __typename?: 'project_assignments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Assignments>;
};

/** on_conflict condition type for table "project_assignments" */
export type Project_Assignments_On_Conflict = {
  constraint: Project_Assignments_Constraint;
  update_columns?: Array<Project_Assignments_Update_Column>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};

/** Ordering options when selecting data from "project_assignments". */
export type Project_Assignments_Order_By = {
  party_role?: InputMaybe<Identity_Party_Roles_Order_By>;
  party_role_id?: InputMaybe<Order_By>;
  project?: InputMaybe<Projects_Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_assignments */
export type Project_Assignments_Pk_Columns_Input = {
  party_role_id: Scalars['Int']['input'];
  project_id: Scalars['Int']['input'];
};

/** select columns of table "project_assignments" */
export enum Project_Assignments_Select_Column {
  /** column name */
  PartyRoleId = 'party_role_id',
  /** column name */
  ProjectId = 'project_id'
}

/** input type for updating data in table "project_assignments" */
export type Project_Assignments_Set_Input = {
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Project_Assignments_Stddev_Fields = {
  __typename?: 'project_assignments_stddev_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "project_assignments" */
export type Project_Assignments_Stddev_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Project_Assignments_Stddev_Pop_Fields = {
  __typename?: 'project_assignments_stddev_pop_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "project_assignments" */
export type Project_Assignments_Stddev_Pop_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Project_Assignments_Stddev_Samp_Fields = {
  __typename?: 'project_assignments_stddev_samp_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "project_assignments" */
export type Project_Assignments_Stddev_Samp_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "project_assignments" */
export type Project_Assignments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Assignments_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Assignments_Stream_Cursor_Value_Input = {
  party_role_id?: InputMaybe<Scalars['Int']['input']>;
  project_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Project_Assignments_Sum_Fields = {
  __typename?: 'project_assignments_sum_fields';
  party_role_id?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "project_assignments" */
export type Project_Assignments_Sum_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** update columns of table "project_assignments" */
export enum Project_Assignments_Update_Column {
  /** column name */
  PartyRoleId = 'party_role_id',
  /** column name */
  ProjectId = 'project_id'
}

export type Project_Assignments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Project_Assignments_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Assignments_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Assignments_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Project_Assignments_Var_Pop_Fields = {
  __typename?: 'project_assignments_var_pop_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "project_assignments" */
export type Project_Assignments_Var_Pop_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Project_Assignments_Var_Samp_Fields = {
  __typename?: 'project_assignments_var_samp_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "project_assignments" */
export type Project_Assignments_Var_Samp_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Project_Assignments_Variance_Fields = {
  __typename?: 'project_assignments_variance_fields';
  party_role_id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "project_assignments" */
export type Project_Assignments_Variance_Order_By = {
  party_role_id?: InputMaybe<Order_By>;
  project_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "project_status" */
export type Project_Status = {
  __typename?: 'project_status';
  description?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "project_status" */
export type Project_StatusProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


/** columns and relationships of "project_status" */
export type Project_StatusProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** aggregated selection of "project_status" */
export type Project_Status_Aggregate = {
  __typename?: 'project_status_aggregate';
  aggregate?: Maybe<Project_Status_Aggregate_Fields>;
  nodes: Array<Project_Status>;
};

/** aggregate fields of "project_status" */
export type Project_Status_Aggregate_Fields = {
  __typename?: 'project_status_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Project_Status_Max_Fields>;
  min?: Maybe<Project_Status_Min_Fields>;
};


/** aggregate fields of "project_status" */
export type Project_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Project_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "project_status". All fields are combined with a logical 'AND'. */
export type Project_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Project_Status_Bool_Exp>>;
  _not?: InputMaybe<Project_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Project_Status_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  projects?: InputMaybe<Projects_Bool_Exp>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "project_status" */
export enum Project_Status_Constraint {
  /** unique or primary key constraint on columns "value" */
  ProjectStatusPkey = 'project_status_pkey'
}

export enum Project_Status_Enum {
  /** Cancelled */
  Cancelled = 'Cancelled',
  /** Completed */
  Completed = 'Completed',
  /** In Progress */
  InProgress = 'InProgress',
  /** Not Started */
  NotStarted = 'NotStarted',
  /** On Hold */
  OnHold = 'OnHold'
}

/** Boolean expression to compare columns of type "project_status_enum". All fields are combined with logical 'AND'. */
export type Project_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Project_Status_Enum>;
  _in?: InputMaybe<Array<Project_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Project_Status_Enum>;
  _nin?: InputMaybe<Array<Project_Status_Enum>>;
};

/** input type for inserting data into table "project_status" */
export type Project_Status_Insert_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  projects?: InputMaybe<Projects_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Project_Status_Max_Fields = {
  __typename?: 'project_status_max_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Project_Status_Min_Fields = {
  __typename?: 'project_status_min_fields';
  description?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "project_status" */
export type Project_Status_Mutation_Response = {
  __typename?: 'project_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Project_Status>;
};

/** input type for inserting object relation for remote table "project_status" */
export type Project_Status_Obj_Rel_Insert_Input = {
  data: Project_Status_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Project_Status_On_Conflict>;
};

/** on_conflict condition type for table "project_status" */
export type Project_Status_On_Conflict = {
  constraint: Project_Status_Constraint;
  update_columns?: Array<Project_Status_Update_Column>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "project_status". */
export type Project_Status_Order_By = {
  description?: InputMaybe<Order_By>;
  projects_aggregate?: InputMaybe<Projects_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: project_status */
export type Project_Status_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "project_status" */
export enum Project_Status_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "project_status" */
export type Project_Status_Set_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "project_status" */
export type Project_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Project_Status_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Project_Status_Stream_Cursor_Value_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "project_status" */
export enum Project_Status_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

export type Project_Status_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Project_Status_Set_Input>;
  /** filter the rows which have to be updated */
  where: Project_Status_Bool_Exp;
};

/** columns and relationships of "projects" */
export type Projects = {
  __typename?: 'projects';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  owner?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  owner_party?: Maybe<Identity_Parties>;
  /** An array relationship */
  project_assignments: Array<Project_Assignments>;
  /** An aggregate relationship */
  project_assignments_aggregate: Project_Assignments_Aggregate;
  /** An object relationship */
  project_status?: Maybe<Project_Status>;
  start_date?: Maybe<Scalars['date']['output']>;
  status?: Maybe<Project_Status_Enum>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_AssignmentsArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


/** columns and relationships of "projects" */
export type ProjectsProject_Assignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};

/** aggregated selection of "projects" */
export type Projects_Aggregate = {
  __typename?: 'projects_aggregate';
  aggregate?: Maybe<Projects_Aggregate_Fields>;
  nodes: Array<Projects>;
};

export type Projects_Aggregate_Bool_Exp = {
  count?: InputMaybe<Projects_Aggregate_Bool_Exp_Count>;
};

export type Projects_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Projects_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "projects" */
export type Projects_Aggregate_Fields = {
  __typename?: 'projects_aggregate_fields';
  avg?: Maybe<Projects_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Projects_Max_Fields>;
  min?: Maybe<Projects_Min_Fields>;
  stddev?: Maybe<Projects_Stddev_Fields>;
  stddev_pop?: Maybe<Projects_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Projects_Stddev_Samp_Fields>;
  sum?: Maybe<Projects_Sum_Fields>;
  var_pop?: Maybe<Projects_Var_Pop_Fields>;
  var_samp?: Maybe<Projects_Var_Samp_Fields>;
  variance?: Maybe<Projects_Variance_Fields>;
};


/** aggregate fields of "projects" */
export type Projects_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Projects_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "projects" */
export type Projects_Aggregate_Order_By = {
  avg?: InputMaybe<Projects_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Projects_Max_Order_By>;
  min?: InputMaybe<Projects_Min_Order_By>;
  stddev?: InputMaybe<Projects_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Projects_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Projects_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Projects_Sum_Order_By>;
  var_pop?: InputMaybe<Projects_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Projects_Var_Samp_Order_By>;
  variance?: InputMaybe<Projects_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "projects" */
export type Projects_Arr_Rel_Insert_Input = {
  data: Array<Projects_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** aggregate avg on columns */
export type Projects_Avg_Fields = {
  __typename?: 'projects_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "projects" */
export type Projects_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "projects". All fields are combined with a logical 'AND'. */
export type Projects_Bool_Exp = {
  _and?: InputMaybe<Array<Projects_Bool_Exp>>;
  _not?: InputMaybe<Projects_Bool_Exp>;
  _or?: InputMaybe<Array<Projects_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  end_date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  owner?: InputMaybe<Int_Comparison_Exp>;
  owner_party?: InputMaybe<Identity_Parties_Bool_Exp>;
  project_assignments?: InputMaybe<Project_Assignments_Bool_Exp>;
  project_assignments_aggregate?: InputMaybe<Project_Assignments_Aggregate_Bool_Exp>;
  project_status?: InputMaybe<Project_Status_Bool_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  status?: InputMaybe<Project_Status_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "projects" */
export enum Projects_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProjectsPkey = 'projects_pkey'
}

/** input type for incrementing numeric columns in table "projects" */
export type Projects_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  owner?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "projects" */
export type Projects_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['Int']['input']>;
  owner_party?: InputMaybe<Identity_Parties_Obj_Rel_Insert_Input>;
  project_assignments?: InputMaybe<Project_Assignments_Arr_Rel_Insert_Input>;
  project_status?: InputMaybe<Project_Status_Obj_Rel_Insert_Input>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Project_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Projects_Max_Fields = {
  __typename?: 'projects_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "projects" */
export type Projects_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Projects_Min_Fields = {
  __typename?: 'projects_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  end_date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "projects" */
export type Projects_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "projects" */
export type Projects_Mutation_Response = {
  __typename?: 'projects_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Projects>;
};

/** input type for inserting object relation for remote table "projects" */
export type Projects_Obj_Rel_Insert_Input = {
  data: Projects_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Projects_On_Conflict>;
};

/** on_conflict condition type for table "projects" */
export type Projects_On_Conflict = {
  constraint: Projects_Constraint;
  update_columns?: Array<Projects_Update_Column>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Ordering options when selecting data from "projects". */
export type Projects_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  end_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
  owner_party?: InputMaybe<Identity_Parties_Order_By>;
  project_assignments_aggregate?: InputMaybe<Project_Assignments_Aggregate_Order_By>;
  project_status?: InputMaybe<Project_Status_Order_By>;
  start_date?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: projects */
export type Projects_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "projects" */
export enum Projects_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "projects" */
export type Projects_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Project_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Projects_Stddev_Fields = {
  __typename?: 'projects_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "projects" */
export type Projects_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Projects_Stddev_Pop_Fields = {
  __typename?: 'projects_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "projects" */
export type Projects_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Projects_Stddev_Samp_Fields = {
  __typename?: 'projects_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "projects" */
export type Projects_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "projects" */
export type Projects_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Projects_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Projects_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  end_date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['Int']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  status?: InputMaybe<Project_Status_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Projects_Sum_Fields = {
  __typename?: 'projects_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "projects" */
export type Projects_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** update columns of table "projects" */
export enum Projects_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  EndDate = 'end_date',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Owner = 'owner',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Projects_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Projects_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Projects_Set_Input>;
  /** filter the rows which have to be updated */
  where: Projects_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Projects_Var_Pop_Fields = {
  __typename?: 'projects_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "projects" */
export type Projects_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Projects_Var_Samp_Fields = {
  __typename?: 'projects_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "projects" */
export type Projects_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Projects_Variance_Fields = {
  __typename?: 'projects_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "projects" */
export type Projects_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  owner?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "identity.parties" */
  identity_parties: Array<Identity_Parties>;
  /** fetch aggregated fields from the table: "identity.parties" */
  identity_parties_aggregate: Identity_Parties_Aggregate;
  /** fetch data from the table: "identity.parties" using primary key columns */
  identity_parties_by_pk?: Maybe<Identity_Parties>;
  /** fetch data from the table: "identity.party_roles" */
  identity_party_roles: Array<Identity_Party_Roles>;
  /** fetch aggregated fields from the table: "identity.party_roles" */
  identity_party_roles_aggregate: Identity_Party_Roles_Aggregate;
  /** fetch data from the table: "identity.party_roles" using primary key columns */
  identity_party_roles_by_pk?: Maybe<Identity_Party_Roles>;
  /** fetch data from the table: "identity.role_type" */
  identity_role_type: Array<Identity_Role_Type>;
  /** fetch aggregated fields from the table: "identity.role_type" */
  identity_role_type_aggregate: Identity_Role_Type_Aggregate;
  /** fetch data from the table: "identity.role_type" using primary key columns */
  identity_role_type_by_pk?: Maybe<Identity_Role_Type>;
  /** An array relationship */
  project_assignments: Array<Project_Assignments>;
  /** An aggregate relationship */
  project_assignments_aggregate: Project_Assignments_Aggregate;
  /** fetch data from the table: "project_assignments" using primary key columns */
  project_assignments_by_pk?: Maybe<Project_Assignments>;
  /** fetch data from the table: "project_status" */
  project_status: Array<Project_Status>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: Project_Status_Aggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<Project_Status>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
};


export type Query_RootIdentity_PartiesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Parties_Order_By>>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};


export type Query_RootIdentity_Parties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Parties_Order_By>>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};


export type Query_RootIdentity_Parties_By_PkArgs = {
  party_id: Scalars['Int']['input'];
};


export type Query_RootIdentity_Party_RolesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


export type Query_RootIdentity_Party_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


export type Query_RootIdentity_Party_Roles_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
};


export type Query_RootIdentity_Role_TypeArgs = {
  distinct_on?: InputMaybe<Array<Identity_Role_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Role_Type_Order_By>>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};


export type Query_RootIdentity_Role_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Role_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Role_Type_Order_By>>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};


export type Query_RootIdentity_Role_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProject_AssignmentsArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


export type Query_RootProject_Assignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


export type Query_RootProject_Assignments_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
  project_id: Scalars['Int']['input'];
};


export type Query_RootProject_StatusArgs = {
  distinct_on?: InputMaybe<Array<Project_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Status_Order_By>>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};


export type Query_RootProject_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Status_Order_By>>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};


export type Query_RootProject_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Query_RootProjects_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "identity.parties" */
  identity_parties: Array<Identity_Parties>;
  /** fetch aggregated fields from the table: "identity.parties" */
  identity_parties_aggregate: Identity_Parties_Aggregate;
  /** fetch data from the table: "identity.parties" using primary key columns */
  identity_parties_by_pk?: Maybe<Identity_Parties>;
  /** fetch data from the table in a streaming manner: "identity.parties" */
  identity_parties_stream: Array<Identity_Parties>;
  /** fetch data from the table: "identity.party_roles" */
  identity_party_roles: Array<Identity_Party_Roles>;
  /** fetch aggregated fields from the table: "identity.party_roles" */
  identity_party_roles_aggregate: Identity_Party_Roles_Aggregate;
  /** fetch data from the table: "identity.party_roles" using primary key columns */
  identity_party_roles_by_pk?: Maybe<Identity_Party_Roles>;
  /** fetch data from the table in a streaming manner: "identity.party_roles" */
  identity_party_roles_stream: Array<Identity_Party_Roles>;
  /** fetch data from the table: "identity.role_type" */
  identity_role_type: Array<Identity_Role_Type>;
  /** fetch aggregated fields from the table: "identity.role_type" */
  identity_role_type_aggregate: Identity_Role_Type_Aggregate;
  /** fetch data from the table: "identity.role_type" using primary key columns */
  identity_role_type_by_pk?: Maybe<Identity_Role_Type>;
  /** fetch data from the table in a streaming manner: "identity.role_type" */
  identity_role_type_stream: Array<Identity_Role_Type>;
  /** An array relationship */
  project_assignments: Array<Project_Assignments>;
  /** An aggregate relationship */
  project_assignments_aggregate: Project_Assignments_Aggregate;
  /** fetch data from the table: "project_assignments" using primary key columns */
  project_assignments_by_pk?: Maybe<Project_Assignments>;
  /** fetch data from the table in a streaming manner: "project_assignments" */
  project_assignments_stream: Array<Project_Assignments>;
  /** fetch data from the table: "project_status" */
  project_status: Array<Project_Status>;
  /** fetch aggregated fields from the table: "project_status" */
  project_status_aggregate: Project_Status_Aggregate;
  /** fetch data from the table: "project_status" using primary key columns */
  project_status_by_pk?: Maybe<Project_Status>;
  /** fetch data from the table in a streaming manner: "project_status" */
  project_status_stream: Array<Project_Status>;
  /** An array relationship */
  projects: Array<Projects>;
  /** An aggregate relationship */
  projects_aggregate: Projects_Aggregate;
  /** fetch data from the table: "projects" using primary key columns */
  projects_by_pk?: Maybe<Projects>;
  /** fetch data from the table in a streaming manner: "projects" */
  projects_stream: Array<Projects>;
};


export type Subscription_RootIdentity_PartiesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Parties_Order_By>>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};


export type Subscription_RootIdentity_Parties_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Parties_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Parties_Order_By>>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};


export type Subscription_RootIdentity_Parties_By_PkArgs = {
  party_id: Scalars['Int']['input'];
};


export type Subscription_RootIdentity_Parties_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Identity_Parties_Stream_Cursor_Input>>;
  where?: InputMaybe<Identity_Parties_Bool_Exp>;
};


export type Subscription_RootIdentity_Party_RolesArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


export type Subscription_RootIdentity_Party_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Party_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Party_Roles_Order_By>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


export type Subscription_RootIdentity_Party_Roles_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
};


export type Subscription_RootIdentity_Party_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Identity_Party_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Identity_Party_Roles_Bool_Exp>;
};


export type Subscription_RootIdentity_Role_TypeArgs = {
  distinct_on?: InputMaybe<Array<Identity_Role_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Role_Type_Order_By>>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};


export type Subscription_RootIdentity_Role_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Identity_Role_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Identity_Role_Type_Order_By>>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};


export type Subscription_RootIdentity_Role_Type_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootIdentity_Role_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Identity_Role_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Identity_Role_Type_Bool_Exp>;
};


export type Subscription_RootProject_AssignmentsArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


export type Subscription_RootProject_Assignments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Assignments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Assignments_Order_By>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


export type Subscription_RootProject_Assignments_By_PkArgs = {
  party_role_id: Scalars['Int']['input'];
  project_id: Scalars['Int']['input'];
};


export type Subscription_RootProject_Assignments_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Assignments_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Assignments_Bool_Exp>;
};


export type Subscription_RootProject_StatusArgs = {
  distinct_on?: InputMaybe<Array<Project_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Status_Order_By>>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};


export type Subscription_RootProject_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Project_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Project_Status_Order_By>>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};


export type Subscription_RootProject_Status_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootProject_Status_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Project_Status_Stream_Cursor_Input>>;
  where?: InputMaybe<Project_Status_Bool_Exp>;
};


export type Subscription_RootProjectsArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Projects_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Projects_Order_By>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};


export type Subscription_RootProjects_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProjects_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Projects_Stream_Cursor_Input>>;
  where?: InputMaybe<Projects_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

export type EditPartyFieldsFragment = { __typename?: 'identity_parties', party_id: number, first_name: string, last_name: string, idp_id: string, party_roles: Array<{ __typename?: 'identity_party_roles', role_type: { __typename?: 'identity_role_type', value: string, description: string } }> } & { ' $fragmentName'?: 'EditPartyFieldsFragment' };

export type UpdatePartyMutationVariables = Exact<{
  party_id: Scalars['Int']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
}>;


export type UpdatePartyMutation = { __typename?: 'mutation_root', update_identity_parties_by_pk?: { __typename?: 'identity_parties', party_id: number } | null };

export type UpdateParty2MutationVariables = Exact<{
  id: Scalars['Int']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  roles: Array<Identity_Party_Roles_Insert_Input> | Identity_Party_Roles_Insert_Input;
}>;


export type UpdateParty2Mutation = { __typename?: 'mutation_root', update_identity_parties_by_pk?: { __typename?: 'identity_parties', party_id: number } | null, delete_identity_party_roles?: { __typename?: 'identity_party_roles_mutation_response', affected_rows: number } | null, insert_identity_party_roles?: { __typename?: 'identity_party_roles_mutation_response', affected_rows: number } | null };

export type ViewPartyFieldsFragment = { __typename?: 'identity_parties', party_id: number, first_name: string, last_name: string, idp_id: string, party_roles: Array<{ __typename?: 'identity_party_roles', role_type: { __typename?: 'identity_role_type', description: string } }> } & { ' $fragmentName'?: 'ViewPartyFieldsFragment' };

export type ProjectDetailFieldsFragment = { __typename?: 'projects', id: number, name: string, description?: string | null, status?: Project_Status_Enum | null, project_status?: { __typename?: 'project_status', description?: string | null } | null, owner_party?: { __typename?: 'identity_parties', party_id: number, name?: string | null } | null } & { ' $fragmentName'?: 'ProjectDetailFieldsFragment' };

export type UpdateProjectMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  description: Scalars['String']['input'];
  status: Project_Status_Enum;
  owner: Scalars['Int']['input'];
}>;


export type UpdateProjectMutation = { __typename?: 'mutation_root', update_projects_by_pk?: { __typename?: 'projects', id: number } | null };

export type ProjectLeadsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectLeadsQuery = { __typename?: 'query_root', identity_parties: Array<{ __typename?: 'identity_parties', party_id: number, name?: string | null }> };

export type ProjectStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectStatusesQuery = { __typename?: 'query_root', project_status: Array<{ __typename?: 'project_status', value: string, description?: string | null }> };

export type PartyRowFieldsFragment = { __typename?: 'identity_parties', party_id: number, first_name: string, last_name: string, idp_id: string, party_roles: Array<{ __typename?: 'identity_party_roles', role_type: { __typename?: 'identity_role_type', description: string } }> } & { ' $fragmentName'?: 'PartyRowFieldsFragment' };

export type PartiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PartiesQuery = { __typename?: 'query_root', identity_parties: Array<(
    { __typename?: 'identity_parties' }
    & { ' $fragmentRefs'?: { 'PartyRowFieldsFragment': PartyRowFieldsFragment } }
  )> };

export type PartyViewQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type PartyViewQuery = { __typename?: 'query_root', identity_parties_by_pk?: (
    { __typename?: 'identity_parties' }
    & { ' $fragmentRefs'?: { 'ViewPartyFieldsFragment': ViewPartyFieldsFragment;'EditPartyFieldsFragment': EditPartyFieldsFragment } }
  ) | null };

export type ProjectViewQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ProjectViewQuery = { __typename?: 'query_root', projects_by_pk?: (
    { __typename?: 'projects' }
    & { ' $fragmentRefs'?: { 'ProjectDetailFieldsFragment': ProjectDetailFieldsFragment } }
  ) | null };

export type ProjectRowFieldsFragment = { __typename?: 'projects', id: number, name: string, description?: string | null, project_status?: { __typename?: 'project_status', description?: string | null } | null, owner_party?: { __typename?: 'identity_parties', name?: string | null } | null } & { ' $fragmentName'?: 'ProjectRowFieldsFragment' };

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = { __typename?: 'query_root', projects: Array<(
    { __typename?: 'projects' }
    & { ' $fragmentRefs'?: { 'ProjectRowFieldsFragment': ProjectRowFieldsFragment } }
  )> };

export const EditPartyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditPartyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<EditPartyFieldsFragment, unknown>;
export const ViewPartyFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ViewPartyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<ViewPartyFieldsFragment, unknown>;
export const ProjectDetailFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"project_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner_party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectDetailFieldsFragment, unknown>;
export const PartyRowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<PartyRowFieldsFragment, unknown>;
export const ProjectRowFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"project_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner_party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectRowFieldsFragment, unknown>;
export const UpdatePartyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateParty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"party_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_identity_parties_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"party_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"party_id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}}]}}]}}]} as unknown as DocumentNode<UpdatePartyMutation, UpdatePartyMutationVariables>;
export const UpdateParty2Document = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateParty2"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roles"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"identity_party_roles_insert_input"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_identity_parties_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"party_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"first_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first_name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"last_name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last_name"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"delete_identity_party_roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"party"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"party_id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}},{"kind":"Field","name":{"kind":"Name","value":"insert_identity_party_roles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roles"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateParty2Mutation, UpdateParty2MutationVariables>;
export const UpdateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"description"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"project_status_enum"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_projects_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"Variable","name":{"kind":"Name","value":"description"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateProjectMutation, UpdateProjectMutationVariables>;
export const ProjectLeadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectLeads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity_parties"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"party_roles"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"role_type"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"description"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"StringValue","value":"Project Lead","block":false}}]}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectLeadsQuery, ProjectLeadsQueryVariables>;
export const ProjectStatusesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectStatuses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ProjectStatusesQuery, ProjectStatusesQueryVariables>;
export const PartiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity_parties"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PartyRowFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PartyRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<PartiesQuery, PartiesQueryVariables>;
export const PartyViewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PartyView"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"identity_parties_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"party_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ViewPartyFields"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EditPartyFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ViewPartyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EditPartyFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"identity_parties"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"idp_id"}},{"kind":"Field","name":{"kind":"Name","value":"party_roles"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role_type"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]} as unknown as DocumentNode<PartyViewQuery, PartyViewQueryVariables>;
export const ProjectViewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProjectView"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectDetailFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectDetailFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"project_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner_party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"party_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectViewQuery, ProjectViewQueryVariables>;
export const ProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProjectRowFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProjectRowFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"projects"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"project_status"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"owner_party"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<ProjectsQuery, ProjectsQueryVariables>;