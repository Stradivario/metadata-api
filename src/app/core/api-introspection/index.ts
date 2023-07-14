/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
 // tslint:disable
// graphql typescript definitions


  export interface IGraphQLResponseRoot {
    data?: IQuery | IMutation;
    errors?: Array<IGraphQLResponseError>;
  }

  export interface IGraphQLResponseError {
    message: string;            // Required for all errors
    locations?: Array<IGraphQLResponseErrorLocation>;
    [propName: string]: any;    // 7.2.2 says 'GraphQL servers may provide additional entries to error'
  }

  export interface IGraphQLResponseErrorLocation {
    line: number;
    column: number;
  }

  
  export interface IQuery {
    __typename?: "Query";
    status?: IStatusQueryType | null;
    _service?: IGraphqlFederation | null;
    graphqlFederations?: Array<IGraphqlFederation>;
    graphqlFederationsAggregate?: IGraphqlFederationAggregateSelection;
    graphqlFederationsConnection?: IGraphqlFederationsConnection;
    statusQueryTypes?: Array<IStatusQueryType>;
    statusQueryTypesAggregate?: IStatusQueryTypeAggregateSelection;
    statusQueryTypesConnection?: IStatusQueryTypesConnection;
    trees?: Array<ITree>;
    treesAggregate?: ITreeAggregateSelection;
    treesConnection?: ITreesConnection;
    branches?: Array<IBranch>;
    branchesAggregate?: IBranchAggregateSelection;
    branchesConnection?: IBranchesConnection;
    scales?: Array<IScale>;
    scalesAggregate?: IScaleAggregateSelection;
    scalesConnection?: IScalesConnection;
    numbers?: Array<INumber>;
    numbersAggregate?: INumberAggregateSelection;
    numbersConnection?: INumbersConnection;
    texts?: Array<IText>;
    textsAggregate?: ITextAggregateSelection;
    textsConnection?: ITextsConnection;
    buildings?: Array<IBuilding>;
    buildingsAggregate?: IBuildingAggregateSelection;
    buildingsConnection?: IBuildingsConnection;
    leaves?: Array<ILeaf>;
    leavesAggregate?: ILeafAggregateSelection;
    leavesConnection?: ILeavesConnection;
}

  
  export interface IStatusQueryType {
    __typename?: "StatusQueryType";
    status?: string | null;
}

  
  export interface IGraphqlFederation {
    __typename?: "GraphqlFederation";
    sdl?: string | null;
}

  
  export interface IGraphqlFederationWhere {
    OR: Array<IGraphqlFederationWhere>;
    AND: Array<IGraphqlFederationWhere>;
    sdl?: string | null;
    sdl_NOT?: string | null;
    sdl_IN?: Array<string> | null;
    sdl_NOT_IN?: Array<string> | null;
    sdl_CONTAINS?: string | null;
    sdl_NOT_CONTAINS?: string | null;
    sdl_STARTS_WITH?: string | null;
    sdl_NOT_STARTS_WITH?: string | null;
    sdl_ENDS_WITH?: string | null;
    sdl_NOT_ENDS_WITH?: string | null;
}

  
  export interface IGraphqlFederationOptions {
    /**
    description: Specify one or more GraphqlFederationSort objects to sort GraphqlFederations by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<IGraphqlFederationSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort GraphqlFederations by. The order in which sorts are applied is not guaranteed when specifying many fields in one GraphqlFederationSort object.
  */
  export interface IGraphqlFederationSort {
    sdl?: ISortDirectionEnum | null;
}

export   
  type ISortDirectionEnum = 'ASC' | 'DESC';

  
  export interface IGraphqlFederationAggregateSelection {
    __typename?: "GraphqlFederationAggregateSelection";
    count?: number;
    sdl?: IStringAggregateSelectionNullable;
}

  
  export interface IStringAggregateSelectionNullable {
    __typename?: "StringAggregateSelectionNullable";
    shortest?: string | null;
    longest?: string | null;
}

  
  export interface IGraphqlFederationsConnection {
    __typename?: "GraphqlFederationsConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<IGraphqlFederationEdge>;
}

  /**
    description?: Pagination information (Relay)
  */
  export interface IPageInfo {
    __typename?: "PageInfo";
    hasNextPage?: boolean;
    hasPreviousPage?: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
}

  
  export interface IGraphqlFederationEdge {
    __typename?: "GraphqlFederationEdge";
    cursor?: string;
    node?: IGraphqlFederation;
}

  
  export interface IStatusQueryTypeWhere {
    OR: Array<IStatusQueryTypeWhere>;
    AND: Array<IStatusQueryTypeWhere>;
    status?: string | null;
    status_NOT?: string | null;
    status_IN?: Array<string> | null;
    status_NOT_IN?: Array<string> | null;
    status_CONTAINS?: string | null;
    status_NOT_CONTAINS?: string | null;
    status_STARTS_WITH?: string | null;
    status_NOT_STARTS_WITH?: string | null;
    status_ENDS_WITH?: string | null;
    status_NOT_ENDS_WITH?: string | null;
}

  
  export interface IStatusQueryTypeOptions {
    /**
    description: Specify one or more StatusQueryTypeSort objects to sort StatusQueryTypes by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<IStatusQueryTypeSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort StatusQueryTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one StatusQueryTypeSort object.
  */
  export interface IStatusQueryTypeSort {
    status?: ISortDirectionEnum | null;
}

  
  export interface IStatusQueryTypeAggregateSelection {
    __typename?: "StatusQueryTypeAggregateSelection";
    count?: number;
    status?: IStringAggregateSelectionNullable;
}

  
  export interface IStatusQueryTypesConnection {
    __typename?: "StatusQueryTypesConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<IStatusQueryTypeEdge>;
}

  
  export interface IStatusQueryTypeEdge {
    __typename?: "StatusQueryTypeEdge";
    cursor?: string;
    node?: IStatusQueryType;
}

  
  export interface ITreeWhere {
    OR: Array<ITreeWhere>;
    AND: Array<ITreeWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    name?: string | null;
    name_NOT?: string | null;
    name_IN?: Array<string> | null;
    name_NOT_IN?: Array<string> | null;
    name_CONTAINS?: string | null;
    name_NOT_CONTAINS?: string | null;
    name_STARTS_WITH?: string | null;
    name_NOT_STARTS_WITH?: string | null;
    name_ENDS_WITH?: string | null;
    name_NOT_ENDS_WITH?: string | null;
    branches?: IBranchWhere | null;
    branches_NOT?: IBranchWhere | null;
    branchesAggregate?: ITreeBranchesAggregateInput | null;
    /**
    description: Return Trees where all of the related Branches match this filter
  */
    branches_ALL?: IBranchWhere | null;
    /**
    description: Return Trees where none of the related Branches match this filter
  */
    branches_NONE?: IBranchWhere | null;
    /**
    description: Return Trees where one of the related Branches match this filter
  */
    branches_SINGLE?: IBranchWhere | null;
    /**
    description: Return Trees where some of the related Branches match this filter
  */
    branches_SOME?: IBranchWhere | null;
    branchesConnection?: ITreeBranchesConnectionWhere | null;
    branchesConnection_NOT?: ITreeBranchesConnectionWhere | null;
    branchesConnection_ALL?: ITreeBranchesConnectionWhere | null;
    branchesConnection_NONE?: ITreeBranchesConnectionWhere | null;
    branchesConnection_SINGLE?: ITreeBranchesConnectionWhere | null;
    branchesConnection_SOME?: ITreeBranchesConnectionWhere | null;
}

  
  export interface IBranchWhere {
    OR: Array<IBranchWhere>;
    AND: Array<IBranchWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    name?: string | null;
    name_NOT?: string | null;
    name_IN: Array<string>;
    name_NOT_IN: Array<string>;
    name_CONTAINS?: string | null;
    name_NOT_CONTAINS?: string | null;
    name_STARTS_WITH?: string | null;
    name_NOT_STARTS_WITH?: string | null;
    name_ENDS_WITH?: string | null;
    name_NOT_ENDS_WITH?: string | null;
    leaves?: ILeafWhere | null;
    leaves_NOT?: ILeafWhere | null;
    leavesAggregate?: IBranchLeavesAggregateInput | null;
    /**
    description: Return Branches where all of the related Leaves match this filter
  */
    leaves_ALL?: ILeafWhere | null;
    /**
    description: Return Branches where none of the related Leaves match this filter
  */
    leaves_NONE?: ILeafWhere | null;
    /**
    description: Return Branches where one of the related Leaves match this filter
  */
    leaves_SINGLE?: ILeafWhere | null;
    /**
    description: Return Branches where some of the related Leaves match this filter
  */
    leaves_SOME?: ILeafWhere | null;
    branches?: IBranchWhere | null;
    branches_NOT?: IBranchWhere | null;
    branchesAggregate?: IBranchBranchesAggregateInput | null;
    /**
    description: Return Branches where all of the related Branches match this filter
  */
    branches_ALL?: IBranchWhere | null;
    /**
    description: Return Branches where none of the related Branches match this filter
  */
    branches_NONE?: IBranchWhere | null;
    /**
    description: Return Branches where one of the related Branches match this filter
  */
    branches_SINGLE?: IBranchWhere | null;
    /**
    description: Return Branches where some of the related Branches match this filter
  */
    branches_SOME?: IBranchWhere | null;
    leavesConnection?: IBranchLeavesConnectionWhere | null;
    leavesConnection_NOT?: IBranchLeavesConnectionWhere | null;
    leavesConnection_ALL?: IBranchLeavesConnectionWhere | null;
    leavesConnection_NONE?: IBranchLeavesConnectionWhere | null;
    leavesConnection_SINGLE?: IBranchLeavesConnectionWhere | null;
    leavesConnection_SOME?: IBranchLeavesConnectionWhere | null;
    branchesConnection?: IBranchBranchesConnectionWhere | null;
    branchesConnection_NOT?: IBranchBranchesConnectionWhere | null;
    branchesConnection_ALL?: IBranchBranchesConnectionWhere | null;
    branchesConnection_NONE?: IBranchBranchesConnectionWhere | null;
    branchesConnection_SINGLE?: IBranchBranchesConnectionWhere | null;
    branchesConnection_SOME?: IBranchBranchesConnectionWhere | null;
}

  
  export interface ILeafWhere {
    OR: Array<ILeafWhere>;
    AND: Array<ILeafWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    name?: string | null;
    name_NOT?: string | null;
    name_IN: Array<string>;
    name_NOT_IN: Array<string>;
    name_CONTAINS?: string | null;
    name_NOT_CONTAINS?: string | null;
    name_STARTS_WITH?: string | null;
    name_NOT_STARTS_WITH?: string | null;
    name_ENDS_WITH?: string | null;
    name_NOT_ENDS_WITH?: string | null;
    parentBranch?: IBranchWhere | null;
    parentBranch_NOT?: IBranchWhere | null;
    parentBranchAggregate?: ILeafParentBranchAggregateInput | null;
    typeConnection?: ILeafTypeConnectionWhere | null;
    typeConnection_NOT?: ILeafTypeConnectionWhere | null;
    parentBranchConnection?: ILeafParentBranchConnectionWhere | null;
    parentBranchConnection_NOT?: ILeafParentBranchConnectionWhere | null;
}

  
  export interface ILeafParentBranchAggregateInput {
    count?: number | null;
    count_LT?: number | null;
    count_LTE?: number | null;
    count_GT?: number | null;
    count_GTE?: number | null;
    AND: Array<ILeafParentBranchAggregateInput>;
    OR: Array<ILeafParentBranchAggregateInput>;
    node?: ILeafParentBranchNodeAggregationWhereInput | null;
}

  
  export interface ILeafParentBranchNodeAggregationWhereInput {
    AND: Array<ILeafParentBranchNodeAggregationWhereInput>;
    OR: Array<ILeafParentBranchNodeAggregationWhereInput>;
    id_EQUAL?: string | null;
    name_EQUAL?: string | null;
    name_AVERAGE_EQUAL?: number | null;
    name_LONGEST_EQUAL?: number | null;
    name_SHORTEST_EQUAL?: number | null;
    name_GT?: number | null;
    name_AVERAGE_GT?: number | null;
    name_LONGEST_GT?: number | null;
    name_SHORTEST_GT?: number | null;
    name_GTE?: number | null;
    name_AVERAGE_GTE?: number | null;
    name_LONGEST_GTE?: number | null;
    name_SHORTEST_GTE?: number | null;
    name_LT?: number | null;
    name_AVERAGE_LT?: number | null;
    name_LONGEST_LT?: number | null;
    name_SHORTEST_LT?: number | null;
    name_LTE?: number | null;
    name_AVERAGE_LTE?: number | null;
    name_LONGEST_LTE?: number | null;
    name_SHORTEST_LTE?: number | null;
}

  
  export interface ILeafTypeConnectionWhere {
    Scale?: ILeafTypeScaleConnectionWhere | null;
    Number?: ILeafTypeNumberConnectionWhere | null;
    Text?: ILeafTypeTextConnectionWhere | null;
    Building?: ILeafTypeBuildingConnectionWhere | null;
}

  
  export interface ILeafTypeScaleConnectionWhere {
    OR: Array<ILeafTypeScaleConnectionWhere>;
    AND: Array<ILeafTypeScaleConnectionWhere>;
    node?: IScaleWhere | null;
    node_NOT?: IScaleWhere | null;
}

  
  export interface IScaleWhere {
    OR: Array<IScaleWhere>;
    AND: Array<IScaleWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    min?: number | null;
    min_NOT?: number | null;
    min_IN: Array<number>;
    min_NOT_IN: Array<number>;
    min_LT?: number | null;
    min_LTE?: number | null;
    min_GT?: number | null;
    min_GTE?: number | null;
    max?: number | null;
    max_NOT?: number | null;
    max_IN: Array<number>;
    max_NOT_IN: Array<number>;
    max_LT?: number | null;
    max_LTE?: number | null;
    max_GT?: number | null;
    max_GTE?: number | null;
    value?: number | null;
    value_NOT?: number | null;
    value_IN?: Array<number> | null;
    value_NOT_IN?: Array<number> | null;
    value_LT?: number | null;
    value_LTE?: number | null;
    value_GT?: number | null;
    value_GTE?: number | null;
}

  
  export interface ILeafTypeNumberConnectionWhere {
    OR: Array<ILeafTypeNumberConnectionWhere>;
    AND: Array<ILeafTypeNumberConnectionWhere>;
    node?: INumberWhere | null;
    node_NOT?: INumberWhere | null;
}

  
  export interface INumberWhere {
    OR: Array<INumberWhere>;
    AND: Array<INumberWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    value?: number | null;
    value_NOT?: number | null;
    value_IN?: Array<number> | null;
    value_NOT_IN?: Array<number> | null;
    value_LT?: number | null;
    value_LTE?: number | null;
    value_GT?: number | null;
    value_GTE?: number | null;
}

  
  export interface ILeafTypeTextConnectionWhere {
    OR: Array<ILeafTypeTextConnectionWhere>;
    AND: Array<ILeafTypeTextConnectionWhere>;
    node?: ITextWhere | null;
    node_NOT?: ITextWhere | null;
}

  
  export interface ITextWhere {
    OR: Array<ITextWhere>;
    AND: Array<ITextWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    value?: string | null;
    value_NOT?: string | null;
    value_IN?: Array<string> | null;
    value_NOT_IN?: Array<string> | null;
    value_CONTAINS?: string | null;
    value_NOT_CONTAINS?: string | null;
    value_STARTS_WITH?: string | null;
    value_NOT_STARTS_WITH?: string | null;
    value_ENDS_WITH?: string | null;
    value_NOT_ENDS_WITH?: string | null;
}

  
  export interface ILeafTypeBuildingConnectionWhere {
    OR: Array<ILeafTypeBuildingConnectionWhere>;
    AND: Array<ILeafTypeBuildingConnectionWhere>;
    node?: IBuildingWhere | null;
    node_NOT?: IBuildingWhere | null;
}

  
  export interface IBuildingWhere {
    OR: Array<IBuildingWhere>;
    AND: Array<IBuildingWhere>;
    id?: string | null;
    id_NOT?: string | null;
    id_IN?: Array<string> | null;
    id_NOT_IN?: Array<string> | null;
    id_CONTAINS?: string | null;
    id_NOT_CONTAINS?: string | null;
    id_STARTS_WITH?: string | null;
    id_NOT_STARTS_WITH?: string | null;
    id_ENDS_WITH?: string | null;
    id_NOT_ENDS_WITH?: string | null;
    propertyName?: string | null;
    propertyName_NOT?: string | null;
    propertyName_IN?: Array<string> | null;
    propertyName_NOT_IN?: Array<string> | null;
    propertyName_CONTAINS?: string | null;
    propertyName_NOT_CONTAINS?: string | null;
    propertyName_STARTS_WITH?: string | null;
    propertyName_NOT_STARTS_WITH?: string | null;
    propertyName_ENDS_WITH?: string | null;
    propertyName_NOT_ENDS_WITH?: string | null;
    owner?: string | null;
    owner_NOT?: string | null;
    owner_IN?: Array<string> | null;
    owner_NOT_IN?: Array<string> | null;
    owner_CONTAINS?: string | null;
    owner_NOT_CONTAINS?: string | null;
    owner_STARTS_WITH?: string | null;
    owner_NOT_STARTS_WITH?: string | null;
    owner_ENDS_WITH?: string | null;
    owner_NOT_ENDS_WITH?: string | null;
}

  
  export interface ILeafParentBranchConnectionWhere {
    AND: Array<ILeafParentBranchConnectionWhere>;
    OR: Array<ILeafParentBranchConnectionWhere>;
    node?: IBranchWhere | null;
    node_NOT?: IBranchWhere | null;
}

  
  export interface IBranchLeavesAggregateInput {
    count?: number | null;
    count_LT?: number | null;
    count_LTE?: number | null;
    count_GT?: number | null;
    count_GTE?: number | null;
    AND: Array<IBranchLeavesAggregateInput>;
    OR: Array<IBranchLeavesAggregateInput>;
    node?: IBranchLeavesNodeAggregationWhereInput | null;
}

  
  export interface IBranchLeavesNodeAggregationWhereInput {
    AND: Array<IBranchLeavesNodeAggregationWhereInput>;
    OR: Array<IBranchLeavesNodeAggregationWhereInput>;
    id_EQUAL?: string | null;
    name_EQUAL?: string | null;
    name_AVERAGE_EQUAL?: number | null;
    name_LONGEST_EQUAL?: number | null;
    name_SHORTEST_EQUAL?: number | null;
    name_GT?: number | null;
    name_AVERAGE_GT?: number | null;
    name_LONGEST_GT?: number | null;
    name_SHORTEST_GT?: number | null;
    name_GTE?: number | null;
    name_AVERAGE_GTE?: number | null;
    name_LONGEST_GTE?: number | null;
    name_SHORTEST_GTE?: number | null;
    name_LT?: number | null;
    name_AVERAGE_LT?: number | null;
    name_LONGEST_LT?: number | null;
    name_SHORTEST_LT?: number | null;
    name_LTE?: number | null;
    name_AVERAGE_LTE?: number | null;
    name_LONGEST_LTE?: number | null;
    name_SHORTEST_LTE?: number | null;
}

  
  export interface IBranchBranchesAggregateInput {
    count?: number | null;
    count_LT?: number | null;
    count_LTE?: number | null;
    count_GT?: number | null;
    count_GTE?: number | null;
    AND: Array<IBranchBranchesAggregateInput>;
    OR: Array<IBranchBranchesAggregateInput>;
    node?: IBranchBranchesNodeAggregationWhereInput | null;
}

  
  export interface IBranchBranchesNodeAggregationWhereInput {
    AND: Array<IBranchBranchesNodeAggregationWhereInput>;
    OR: Array<IBranchBranchesNodeAggregationWhereInput>;
    id_EQUAL?: string | null;
    name_EQUAL?: string | null;
    name_AVERAGE_EQUAL?: number | null;
    name_LONGEST_EQUAL?: number | null;
    name_SHORTEST_EQUAL?: number | null;
    name_GT?: number | null;
    name_AVERAGE_GT?: number | null;
    name_LONGEST_GT?: number | null;
    name_SHORTEST_GT?: number | null;
    name_GTE?: number | null;
    name_AVERAGE_GTE?: number | null;
    name_LONGEST_GTE?: number | null;
    name_SHORTEST_GTE?: number | null;
    name_LT?: number | null;
    name_AVERAGE_LT?: number | null;
    name_LONGEST_LT?: number | null;
    name_SHORTEST_LT?: number | null;
    name_LTE?: number | null;
    name_AVERAGE_LTE?: number | null;
    name_LONGEST_LTE?: number | null;
    name_SHORTEST_LTE?: number | null;
}

  
  export interface IBranchLeavesConnectionWhere {
    AND: Array<IBranchLeavesConnectionWhere>;
    OR: Array<IBranchLeavesConnectionWhere>;
    node?: ILeafWhere | null;
    node_NOT?: ILeafWhere | null;
}

  
  export interface IBranchBranchesConnectionWhere {
    AND: Array<IBranchBranchesConnectionWhere>;
    OR: Array<IBranchBranchesConnectionWhere>;
    node?: IBranchWhere | null;
    node_NOT?: IBranchWhere | null;
}

  
  export interface ITreeBranchesAggregateInput {
    count?: number | null;
    count_LT?: number | null;
    count_LTE?: number | null;
    count_GT?: number | null;
    count_GTE?: number | null;
    AND: Array<ITreeBranchesAggregateInput>;
    OR: Array<ITreeBranchesAggregateInput>;
    node?: ITreeBranchesNodeAggregationWhereInput | null;
}

  
  export interface ITreeBranchesNodeAggregationWhereInput {
    AND: Array<ITreeBranchesNodeAggregationWhereInput>;
    OR: Array<ITreeBranchesNodeAggregationWhereInput>;
    id_EQUAL?: string | null;
    name_EQUAL?: string | null;
    name_AVERAGE_EQUAL?: number | null;
    name_LONGEST_EQUAL?: number | null;
    name_SHORTEST_EQUAL?: number | null;
    name_GT?: number | null;
    name_AVERAGE_GT?: number | null;
    name_LONGEST_GT?: number | null;
    name_SHORTEST_GT?: number | null;
    name_GTE?: number | null;
    name_AVERAGE_GTE?: number | null;
    name_LONGEST_GTE?: number | null;
    name_SHORTEST_GTE?: number | null;
    name_LT?: number | null;
    name_AVERAGE_LT?: number | null;
    name_LONGEST_LT?: number | null;
    name_SHORTEST_LT?: number | null;
    name_LTE?: number | null;
    name_AVERAGE_LTE?: number | null;
    name_LONGEST_LTE?: number | null;
    name_SHORTEST_LTE?: number | null;
}

  
  export interface ITreeBranchesConnectionWhere {
    AND: Array<ITreeBranchesConnectionWhere>;
    OR: Array<ITreeBranchesConnectionWhere>;
    node?: IBranchWhere | null;
    node_NOT?: IBranchWhere | null;
}

  
  export interface ITreeOptions {
    /**
    description: Specify one or more TreeSort objects to sort Trees by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<ITreeSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Trees by. The order in which sorts are applied is not guaranteed when specifying many fields in one TreeSort object.
  */
  export interface ITreeSort {
    id?: ISortDirectionEnum | null;
    name?: ISortDirectionEnum | null;
}

  
  export interface ITree {
    __typename?: "Tree";
    id?: string | null;
    name?: string | null;
    branches?: Array<IBranch>;
    branchesAggregate?: ITreeBranchBranchesAggregationSelection | null;
    branchesConnection?: ITreeBranchesConnection;
}

  
  export interface IBranchOptions {
    /**
    description: Specify one or more BranchSort objects to sort Branches by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<IBranchSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Branches by. The order in which sorts are applied is not guaranteed when specifying many fields in one BranchSort object.
  */
  export interface IBranchSort {
    id?: ISortDirectionEnum | null;
    name?: ISortDirectionEnum | null;
}

  
  export interface IBranch {
    __typename?: "Branch";
    id?: string | null;
    name?: string;
    leaves?: Array<ILeaf>;
    leavesAggregate?: IBranchLeafLeavesAggregationSelection | null;
    branches?: Array<IBranch>;
    branchesAggregate?: IBranchBranchBranchesAggregationSelection | null;
    leavesConnection?: IBranchLeavesConnection;
    branchesConnection?: IBranchBranchesConnection;
}

  
  export interface ILeafOptions {
    /**
    description: Specify one or more LeafSort objects to sort Leaves by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<ILeafSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Leaves by. The order in which sorts are applied is not guaranteed when specifying many fields in one LeafSort object.
  */
  export interface ILeafSort {
    id?: ISortDirectionEnum | null;
    name?: ISortDirectionEnum | null;
}

  
  export interface ILeaf {
    __typename?: "Leaf";
    id?: string | null;
    name?: string;
    type?: LeafDataTypeUnion;
    parentBranch?: IBranch;
    parentBranchAggregate?: ILeafBranchParentBranchAggregationSelection | null;
    typeConnection?: ILeafTypeConnection;
    parentBranchConnection?: ILeafParentBranchConnection;
}

  
  export interface IQueryOptions {
    offset?: number | null;
    limit?: number | null;
}

  
  export interface ILeafDataTypeUnionWhere {
    Scale?: IScaleWhere | null;
    Number?: INumberWhere | null;
    Text?: ITextWhere | null;
    Building?: IBuildingWhere | null;
}

export   
  type LeafDataTypeUnion = IScale | INumber | IText | IBuilding;



  
  export interface IScale {
    __typename?: "Scale";
    id?: string | null;
    min?: number;
    max?: number;
    value?: number | null;
}

  
  type Value = IScale | INumber;

  
  export interface IValue {
    __typename?: "Value";
    value?: number | null;
}

  
  export interface INumber {
    __typename?: "Number";
    id?: string | null;
    value?: number | null;
}

  
  export interface IText {
    __typename?: "Text";
    id?: string | null;
    value?: string | null;
}

  
  export interface IBuilding {
    __typename?: "Building";
    id?: string | null;
    propertyName?: string | null;
    owner?: string | null;
}

  
  export interface ILeafBranchParentBranchAggregationSelection {
    __typename?: "LeafBranchParentBranchAggregationSelection";
    count?: number;
    node?: ILeafBranchParentBranchNodeAggregateSelection | null;
}

  
  export interface ILeafBranchParentBranchNodeAggregateSelection {
    __typename?: "LeafBranchParentBranchNodeAggregateSelection";
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface IIDAggregateSelectionNullable {
    __typename?: "IDAggregateSelectionNullable";
    shortest?: string | null;
    longest?: string | null;
}

  
  export interface IStringAggregateSelectionNonNullable {
    __typename?: "StringAggregateSelectionNonNullable";
    shortest?: string;
    longest?: string;
}

  
  export interface ILeafTypeConnection {
    __typename?: "LeafTypeConnection";
    edges?: Array<ILeafTypeRelationship>;
    totalCount?: number;
    pageInfo?: IPageInfo;
}

  
  export interface ILeafTypeRelationship {
    __typename?: "LeafTypeRelationship";
    cursor?: string;
    node?: LeafDataTypeUnion;
}

  
  export interface ILeafParentBranchConnectionSort {
    node?: IBranchSort | null;
}

  
  export interface ILeafParentBranchConnection {
    __typename?: "LeafParentBranchConnection";
    edges?: Array<ILeafParentBranchRelationship>;
    totalCount?: number;
    pageInfo?: IPageInfo;
}

  
  export interface ILeafParentBranchRelationship {
    __typename?: "LeafParentBranchRelationship";
    cursor?: string;
    node?: IBranch;
}

  
  export interface IBranchLeafLeavesAggregationSelection {
    __typename?: "BranchLeafLeavesAggregationSelection";
    count?: number;
    node?: IBranchLeafLeavesNodeAggregateSelection | null;
}

  
  export interface IBranchLeafLeavesNodeAggregateSelection {
    __typename?: "BranchLeafLeavesNodeAggregateSelection";
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface IBranchBranchBranchesAggregationSelection {
    __typename?: "BranchBranchBranchesAggregationSelection";
    count?: number;
    node?: IBranchBranchBranchesNodeAggregateSelection | null;
}

  
  export interface IBranchBranchBranchesNodeAggregateSelection {
    __typename?: "BranchBranchBranchesNodeAggregateSelection";
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface IBranchLeavesConnectionSort {
    node?: ILeafSort | null;
}

  
  export interface IBranchLeavesConnection {
    __typename?: "BranchLeavesConnection";
    edges?: Array<IBranchLeavesRelationship>;
    totalCount?: number;
    pageInfo?: IPageInfo;
}

  
  export interface IBranchLeavesRelationship {
    __typename?: "BranchLeavesRelationship";
    cursor?: string;
    node?: ILeaf;
}

  
  export interface IBranchBranchesConnectionSort {
    node?: IBranchSort | null;
}

  
  export interface IBranchBranchesConnection {
    __typename?: "BranchBranchesConnection";
    edges?: Array<IBranchBranchesRelationship>;
    totalCount?: number;
    pageInfo?: IPageInfo;
}

  
  export interface IBranchBranchesRelationship {
    __typename?: "BranchBranchesRelationship";
    cursor?: string;
    node?: IBranch;
}

  
  export interface ITreeBranchBranchesAggregationSelection {
    __typename?: "TreeBranchBranchesAggregationSelection";
    count?: number;
    node?: ITreeBranchBranchesNodeAggregateSelection | null;
}

  
  export interface ITreeBranchBranchesNodeAggregateSelection {
    __typename?: "TreeBranchBranchesNodeAggregateSelection";
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface ITreeBranchesConnectionSort {
    node?: IBranchSort | null;
}

  
  export interface ITreeBranchesConnection {
    __typename?: "TreeBranchesConnection";
    edges?: Array<ITreeBranchesRelationship>;
    totalCount?: number;
    pageInfo?: IPageInfo;
}

  
  export interface ITreeBranchesRelationship {
    __typename?: "TreeBranchesRelationship";
    cursor?: string;
    node?: IBranch;
}

  
  export interface ITreeAggregateSelection {
    __typename?: "TreeAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNullable;
}

  
  export interface ITreesConnection {
    __typename?: "TreesConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<ITreeEdge>;
}

  
  export interface ITreeEdge {
    __typename?: "TreeEdge";
    cursor?: string;
    node?: ITree;
}

  
  export interface IBranchAggregateSelection {
    __typename?: "BranchAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface IBranchesConnection {
    __typename?: "BranchesConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<IBranchEdge>;
}

  
  export interface IBranchEdge {
    __typename?: "BranchEdge";
    cursor?: string;
    node?: IBranch;
}

  
  export interface IScaleOptions {
    /**
    description: Specify one or more ScaleSort objects to sort Scales by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<IScaleSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Scales by. The order in which sorts are applied is not guaranteed when specifying many fields in one ScaleSort object.
  */
  export interface IScaleSort {
    id?: ISortDirectionEnum | null;
    min?: ISortDirectionEnum | null;
    max?: ISortDirectionEnum | null;
    value?: ISortDirectionEnum | null;
}

  
  export interface IScaleAggregateSelection {
    __typename?: "ScaleAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    min?: IIntAggregateSelectionNonNullable;
    max?: IIntAggregateSelectionNonNullable;
    value?: IIntAggregateSelectionNullable;
}

  
  export interface IIntAggregateSelectionNonNullable {
    __typename?: "IntAggregateSelectionNonNullable";
    max?: number;
    min?: number;
    average?: number;
    sum?: number;
}

  
  export interface IIntAggregateSelectionNullable {
    __typename?: "IntAggregateSelectionNullable";
    max?: number | null;
    min?: number | null;
    average?: number | null;
    sum?: number | null;
}

  
  export interface IScalesConnection {
    __typename?: "ScalesConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<IScaleEdge>;
}

  
  export interface IScaleEdge {
    __typename?: "ScaleEdge";
    cursor?: string;
    node?: IScale;
}

  
  export interface INumberOptions {
    /**
    description: Specify one or more NumberSort objects to sort Numbers by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<INumberSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Numbers by. The order in which sorts are applied is not guaranteed when specifying many fields in one NumberSort object.
  */
  export interface INumberSort {
    id?: ISortDirectionEnum | null;
    value?: ISortDirectionEnum | null;
}

  
  export interface INumberAggregateSelection {
    __typename?: "NumberAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    value?: IIntAggregateSelectionNullable;
}

  
  export interface INumbersConnection {
    __typename?: "NumbersConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<INumberEdge>;
}

  
  export interface INumberEdge {
    __typename?: "NumberEdge";
    cursor?: string;
    node?: INumber;
}

  
  export interface ITextOptions {
    /**
    description: Specify one or more TextSort objects to sort Texts by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<ITextSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Texts by. The order in which sorts are applied is not guaranteed when specifying many fields in one TextSort object.
  */
  export interface ITextSort {
    id?: ISortDirectionEnum | null;
    value?: ISortDirectionEnum | null;
}

  
  export interface ITextAggregateSelection {
    __typename?: "TextAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    value?: IStringAggregateSelectionNullable;
}

  
  export interface ITextsConnection {
    __typename?: "TextsConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<ITextEdge>;
}

  
  export interface ITextEdge {
    __typename?: "TextEdge";
    cursor?: string;
    node?: IText;
}

  
  export interface IBuildingOptions {
    /**
    description: Specify one or more BuildingSort objects to sort Buildings by. The sorts will be applied in the order in which they are arranged in the array.
  */
    sort: Array<IBuildingSort>;
    limit?: number | null;
    offset?: number | null;
}

  /**
    description: Fields to sort Buildings by. The order in which sorts are applied is not guaranteed when specifying many fields in one BuildingSort object.
  */
  export interface IBuildingSort {
    id?: ISortDirectionEnum | null;
    propertyName?: ISortDirectionEnum | null;
    owner?: ISortDirectionEnum | null;
}

  
  export interface IBuildingAggregateSelection {
    __typename?: "BuildingAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    propertyName?: IStringAggregateSelectionNullable;
    owner?: IStringAggregateSelectionNullable;
}

  
  export interface IBuildingsConnection {
    __typename?: "BuildingsConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<IBuildingEdge>;
}

  
  export interface IBuildingEdge {
    __typename?: "BuildingEdge";
    cursor?: string;
    node?: IBuilding;
}

  
  export interface ILeafAggregateSelection {
    __typename?: "LeafAggregateSelection";
    count?: number;
    id?: IIDAggregateSelectionNullable;
    name?: IStringAggregateSelectionNonNullable;
}

  
  export interface ILeavesConnection {
    __typename?: "LeavesConnection";
    totalCount?: number;
    pageInfo?: IPageInfo;
    edges?: Array<ILeafEdge>;
}

  
  export interface ILeafEdge {
    __typename?: "LeafEdge";
    cursor?: string;
    node?: ILeaf;
}

  
  export interface IMutation {
    __typename?: "Mutation";
    createGraphqlFederations?: ICreateGraphqlFederationsMutationResponse;
    deleteGraphqlFederations?: IDeleteInfo;
    updateGraphqlFederations?: IUpdateGraphqlFederationsMutationResponse;
    createStatusQueryTypes?: ICreateStatusQueryTypesMutationResponse;
    deleteStatusQueryTypes?: IDeleteInfo;
    updateStatusQueryTypes?: IUpdateStatusQueryTypesMutationResponse;
    createTrees?: ICreateTreesMutationResponse;
    deleteTrees?: IDeleteInfo;
    updateTrees?: IUpdateTreesMutationResponse;
    createBranches?: ICreateBranchesMutationResponse;
    deleteBranches?: IDeleteInfo;
    updateBranches?: IUpdateBranchesMutationResponse;
    createScales?: ICreateScalesMutationResponse;
    deleteScales?: IDeleteInfo;
    updateScales?: IUpdateScalesMutationResponse;
    createNumbers?: ICreateNumbersMutationResponse;
    deleteNumbers?: IDeleteInfo;
    updateNumbers?: IUpdateNumbersMutationResponse;
    createTexts?: ICreateTextsMutationResponse;
    deleteTexts?: IDeleteInfo;
    updateTexts?: IUpdateTextsMutationResponse;
    createBuildings?: ICreateBuildingsMutationResponse;
    deleteBuildings?: IDeleteInfo;
    updateBuildings?: IUpdateBuildingsMutationResponse;
    createLeaves?: ICreateLeavesMutationResponse;
    deleteLeaves?: IDeleteInfo;
    updateLeaves?: IUpdateLeavesMutationResponse;
}

  
  export interface IGraphqlFederationCreateInput {
    sdl?: string | null;
}

  
  export interface ICreateGraphqlFederationsMutationResponse {
    __typename?: "CreateGraphqlFederationsMutationResponse";
    info?: ICreateInfo;
    graphqlFederations?: Array<IGraphqlFederation>;
}

  
  export interface ICreateInfo {
    __typename?: "CreateInfo";
    bookmark?: string | null;
    nodesCreated?: number;
    relationshipsCreated?: number;
}

  
  export interface IDeleteInfo {
    __typename?: "DeleteInfo";
    bookmark?: string | null;
    nodesDeleted?: number;
    relationshipsDeleted?: number;
}

  
  export interface IGraphqlFederationUpdateInput {
    sdl?: string | null;
}

  
  export interface IUpdateGraphqlFederationsMutationResponse {
    __typename?: "UpdateGraphqlFederationsMutationResponse";
    info?: IUpdateInfo;
    graphqlFederations?: Array<IGraphqlFederation>;
}

  
  export interface IUpdateInfo {
    __typename?: "UpdateInfo";
    bookmark?: string | null;
    nodesCreated?: number;
    nodesDeleted?: number;
    relationshipsCreated?: number;
    relationshipsDeleted?: number;
}

  
  export interface IStatusQueryTypeCreateInput {
    status?: string | null;
}

  
  export interface ICreateStatusQueryTypesMutationResponse {
    __typename?: "CreateStatusQueryTypesMutationResponse";
    info?: ICreateInfo;
    statusQueryTypes?: Array<IStatusQueryType>;
}

  
  export interface IStatusQueryTypeUpdateInput {
    status?: string | null;
}

  
  export interface IUpdateStatusQueryTypesMutationResponse {
    __typename?: "UpdateStatusQueryTypesMutationResponse";
    info?: IUpdateInfo;
    statusQueryTypes?: Array<IStatusQueryType>;
}

  
  export interface ITreeCreateInput {
    name?: string | null;
    branches?: ITreeBranchesFieldInput | null;
}

  
  export interface ITreeBranchesFieldInput {
    create?: Array<ITreeBranchesCreateFieldInput>;
    connect?: Array<ITreeBranchesConnectFieldInput>;
    connectOrCreate?: Array<ITreeBranchesConnectOrCreateFieldInput>;
}

  
  export interface ITreeBranchesCreateFieldInput {
    node?: IBranchCreateInput;
}

  
  export interface IBranchCreateInput {
    name: string;
    leaves?: IBranchLeavesFieldInput | null;
    branches?: IBranchBranchesFieldInput | null;
}

  
  export interface IBranchLeavesFieldInput {
    create?: Array<IBranchLeavesCreateFieldInput>;
    connect?: Array<IBranchLeavesConnectFieldInput>;
    connectOrCreate?: Array<IBranchLeavesConnectOrCreateFieldInput>;
}

  
  export interface IBranchLeavesCreateFieldInput {
    node?: ILeafCreateInput;
}

  
  export interface ILeafCreateInput {
    name: string;
    type?: ILeafTypeCreateInput | null;
    parentBranch?: ILeafParentBranchFieldInput | null;
}

  
  export interface ILeafTypeCreateInput {
    Scale?: ILeafTypeScaleFieldInput | null;
    Number?: ILeafTypeNumberFieldInput | null;
    Text?: ILeafTypeTextFieldInput | null;
    Building?: ILeafTypeBuildingFieldInput | null;
}

  
  export interface ILeafTypeScaleFieldInput {
    create?: ILeafTypeScaleCreateFieldInput | null;
    connect?: ILeafTypeScaleConnectFieldInput | null;
    connectOrCreate?: ILeafTypeScaleConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeScaleCreateFieldInput {
    node?: IScaleCreateInput;
}

  
  export interface IScaleCreateInput {
    min: number;
    max: number;
    value?: number | null;
}

  
  export interface ILeafTypeScaleConnectFieldInput {
    where?: IScaleConnectWhere | null;
}

  
  export interface IScaleConnectWhere {
    node?: IScaleWhere;
}

  
  export interface ILeafTypeScaleConnectOrCreateFieldInput {
    where?: IScaleConnectOrCreateWhere;
    onCreate?: ILeafTypeScaleConnectOrCreateFieldInputOnCreate;
}

  
  export interface IScaleConnectOrCreateWhere {
    node?: IScaleUniqueWhere;
}

  
  export interface IScaleUniqueWhere {
    id?: string | null;
}

  
  export interface ILeafTypeScaleConnectOrCreateFieldInputOnCreate {
    node?: IScaleOnCreateInput;
}

  
  export interface IScaleOnCreateInput {
    min: number;
    max: number;
    value?: number | null;
}

  
  export interface ILeafTypeNumberFieldInput {
    create?: ILeafTypeNumberCreateFieldInput | null;
    connect?: ILeafTypeNumberConnectFieldInput | null;
    connectOrCreate?: ILeafTypeNumberConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeNumberCreateFieldInput {
    node?: INumberCreateInput;
}

  
  export interface INumberCreateInput {
    value?: number | null;
}

  
  export interface ILeafTypeNumberConnectFieldInput {
    where?: INumberConnectWhere | null;
}

  
  export interface INumberConnectWhere {
    node?: INumberWhere;
}

  
  export interface ILeafTypeNumberConnectOrCreateFieldInput {
    where?: INumberConnectOrCreateWhere;
    onCreate?: ILeafTypeNumberConnectOrCreateFieldInputOnCreate;
}

  
  export interface INumberConnectOrCreateWhere {
    node?: INumberUniqueWhere;
}

  
  export interface INumberUniqueWhere {
    id?: string | null;
}

  
  export interface ILeafTypeNumberConnectOrCreateFieldInputOnCreate {
    node?: INumberOnCreateInput;
}

  
  export interface INumberOnCreateInput {
    value?: number | null;
}

  
  export interface ILeafTypeTextFieldInput {
    create?: ILeafTypeTextCreateFieldInput | null;
    connect?: ILeafTypeTextConnectFieldInput | null;
    connectOrCreate?: ILeafTypeTextConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeTextCreateFieldInput {
    node?: ITextCreateInput;
}

  
  export interface ITextCreateInput {
    value?: string | null;
}

  
  export interface ILeafTypeTextConnectFieldInput {
    where?: ITextConnectWhere | null;
}

  
  export interface ITextConnectWhere {
    node?: ITextWhere;
}

  
  export interface ILeafTypeTextConnectOrCreateFieldInput {
    where?: ITextConnectOrCreateWhere;
    onCreate?: ILeafTypeTextConnectOrCreateFieldInputOnCreate;
}

  
  export interface ITextConnectOrCreateWhere {
    node?: ITextUniqueWhere;
}

  
  export interface ITextUniqueWhere {
    id?: string | null;
}

  
  export interface ILeafTypeTextConnectOrCreateFieldInputOnCreate {
    node?: ITextOnCreateInput;
}

  
  export interface ITextOnCreateInput {
    value?: string | null;
}

  
  export interface ILeafTypeBuildingFieldInput {
    create?: ILeafTypeBuildingCreateFieldInput | null;
    connect?: ILeafTypeBuildingConnectFieldInput | null;
    connectOrCreate?: ILeafTypeBuildingConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeBuildingCreateFieldInput {
    node?: IBuildingCreateInput;
}

  
  export interface IBuildingCreateInput {
    propertyName?: string | null;
    owner?: string | null;
}

  
  export interface ILeafTypeBuildingConnectFieldInput {
    where?: IBuildingConnectWhere | null;
}

  
  export interface IBuildingConnectWhere {
    node?: IBuildingWhere;
}

  
  export interface ILeafTypeBuildingConnectOrCreateFieldInput {
    where?: IBuildingConnectOrCreateWhere;
    onCreate?: ILeafTypeBuildingConnectOrCreateFieldInputOnCreate;
}

  
  export interface IBuildingConnectOrCreateWhere {
    node?: IBuildingUniqueWhere;
}

  
  export interface IBuildingUniqueWhere {
    id?: string | null;
}

  
  export interface ILeafTypeBuildingConnectOrCreateFieldInputOnCreate {
    node?: IBuildingOnCreateInput;
}

  
  export interface IBuildingOnCreateInput {
    propertyName?: string | null;
    owner?: string | null;
}

  
  export interface ILeafParentBranchFieldInput {
    create?: ILeafParentBranchCreateFieldInput | null;
    connect?: ILeafParentBranchConnectFieldInput | null;
    connectOrCreate?: ILeafParentBranchConnectOrCreateFieldInput | null;
}

  
  export interface ILeafParentBranchCreateFieldInput {
    node?: IBranchCreateInput;
}

  
  export interface ILeafParentBranchConnectFieldInput {
    where?: IBranchConnectWhere | null;
    connect?: IBranchConnectInput | null;
}

  
  export interface IBranchConnectWhere {
    node?: IBranchWhere;
}

  
  export interface IBranchConnectInput {
    leaves?: Array<IBranchLeavesConnectFieldInput>;
    branches?: Array<IBranchBranchesConnectFieldInput>;
}

  
  export interface IBranchLeavesConnectFieldInput {
    where?: ILeafConnectWhere | null;
    connect: Array<ILeafConnectInput>;
}

  
  export interface ILeafConnectWhere {
    node?: ILeafWhere;
}

  
  export interface ILeafConnectInput {
    type?: ILeafTypeConnectInput | null;
    parentBranch?: ILeafParentBranchConnectFieldInput | null;
}

  
  export interface ILeafTypeConnectInput {
    Scale?: ILeafTypeScaleConnectFieldInput | null;
    Number?: ILeafTypeNumberConnectFieldInput | null;
    Text?: ILeafTypeTextConnectFieldInput | null;
    Building?: ILeafTypeBuildingConnectFieldInput | null;
}

  
  export interface IBranchBranchesConnectFieldInput {
    where?: IBranchConnectWhere | null;
    connect: Array<IBranchConnectInput>;
}

  
  export interface ILeafParentBranchConnectOrCreateFieldInput {
    where?: IBranchConnectOrCreateWhere;
    onCreate?: ILeafParentBranchConnectOrCreateFieldInputOnCreate;
}

  
  export interface IBranchConnectOrCreateWhere {
    node?: IBranchUniqueWhere;
}

  
  export interface IBranchUniqueWhere {
    id?: string | null;
    name?: string | null;
}

  
  export interface ILeafParentBranchConnectOrCreateFieldInputOnCreate {
    node?: IBranchOnCreateInput;
}

  
  export interface IBranchOnCreateInput {
    name?: string;
}

  
  export interface IBranchLeavesConnectOrCreateFieldInput {
    where?: ILeafConnectOrCreateWhere;
    onCreate?: IBranchLeavesConnectOrCreateFieldInputOnCreate;
}

  
  export interface ILeafConnectOrCreateWhere {
    node?: ILeafUniqueWhere;
}

  
  export interface ILeafUniqueWhere {
    id?: string | null;
    name?: string | null;
}

  
  export interface IBranchLeavesConnectOrCreateFieldInputOnCreate {
    node?: ILeafOnCreateInput;
}

  
  export interface ILeafOnCreateInput {
    name?: string;
}

  
  export interface IBranchBranchesFieldInput {
    create?: Array<IBranchBranchesCreateFieldInput>;
    connect?: Array<IBranchBranchesConnectFieldInput>;
    connectOrCreate?: Array<IBranchBranchesConnectOrCreateFieldInput>;
}

  
  export interface IBranchBranchesCreateFieldInput {
    node?: IBranchCreateInput;
}

  
  export interface IBranchBranchesConnectOrCreateFieldInput {
    where?: IBranchConnectOrCreateWhere;
    onCreate?: IBranchBranchesConnectOrCreateFieldInputOnCreate;
}

  
  export interface IBranchBranchesConnectOrCreateFieldInputOnCreate {
    node?: IBranchOnCreateInput;
}

  
  export interface ITreeBranchesConnectFieldInput {
    where?: IBranchConnectWhere | null;
    connect: Array<IBranchConnectInput>;
}

  
  export interface ITreeBranchesConnectOrCreateFieldInput {
    where?: IBranchConnectOrCreateWhere;
    onCreate?: ITreeBranchesConnectOrCreateFieldInputOnCreate;
}

  
  export interface ITreeBranchesConnectOrCreateFieldInputOnCreate {
    node?: IBranchOnCreateInput;
}

  
  export interface ICreateTreesMutationResponse {
    __typename?: "CreateTreesMutationResponse";
    info?: ICreateInfo;
    trees?: Array<ITree>;
}

  
  export interface ITreeDeleteInput {
    branches?: Array<ITreeBranchesDeleteFieldInput>;
}

  
  export interface ITreeBranchesDeleteFieldInput {
    where?: ITreeBranchesConnectionWhere | null;
    delete?: IBranchDeleteInput | null;
}

  
  export interface IBranchDeleteInput {
    leaves?: Array<IBranchLeavesDeleteFieldInput>;
    branches?: Array<IBranchBranchesDeleteFieldInput>;
}

  
  export interface IBranchLeavesDeleteFieldInput {
    where?: IBranchLeavesConnectionWhere | null;
    delete?: ILeafDeleteInput | null;
}

  
  export interface ILeafDeleteInput {
    type?: ILeafTypeDeleteInput | null;
    parentBranch?: ILeafParentBranchDeleteFieldInput | null;
}

  
  export interface ILeafTypeDeleteInput {
    Scale?: ILeafTypeScaleDeleteFieldInput | null;
    Number?: ILeafTypeNumberDeleteFieldInput | null;
    Text?: ILeafTypeTextDeleteFieldInput | null;
    Building?: ILeafTypeBuildingDeleteFieldInput | null;
}

  
  export interface ILeafTypeScaleDeleteFieldInput {
    where?: ILeafTypeScaleConnectionWhere | null;
}

  
  export interface ILeafTypeNumberDeleteFieldInput {
    where?: ILeafTypeNumberConnectionWhere | null;
}

  
  export interface ILeafTypeTextDeleteFieldInput {
    where?: ILeafTypeTextConnectionWhere | null;
}

  
  export interface ILeafTypeBuildingDeleteFieldInput {
    where?: ILeafTypeBuildingConnectionWhere | null;
}

  
  export interface ILeafParentBranchDeleteFieldInput {
    where?: ILeafParentBranchConnectionWhere | null;
    delete?: IBranchDeleteInput | null;
}

  
  export interface IBranchBranchesDeleteFieldInput {
    where?: IBranchBranchesConnectionWhere | null;
    delete?: IBranchDeleteInput | null;
}

  
  export interface ITreeUpdateInput {
    name?: string | null;
    branches: Array<ITreeBranchesUpdateFieldInput>;
}

  
  export interface ITreeBranchesUpdateFieldInput {
    where?: ITreeBranchesConnectionWhere | null;
    update?: ITreeBranchesUpdateConnectionInput | null;
    connect: Array<ITreeBranchesConnectFieldInput>;
    disconnect: Array<ITreeBranchesDisconnectFieldInput>;
    create: Array<ITreeBranchesCreateFieldInput>;
    delete: Array<ITreeBranchesDeleteFieldInput>;
    connectOrCreate: Array<ITreeBranchesConnectOrCreateFieldInput>;
}

  
  export interface ITreeBranchesUpdateConnectionInput {
    node?: IBranchUpdateInput | null;
}

  
  export interface IBranchUpdateInput {
    name?: string | null;
    leaves: Array<IBranchLeavesUpdateFieldInput>;
    branches: Array<IBranchBranchesUpdateFieldInput>;
}

  
  export interface IBranchLeavesUpdateFieldInput {
    where?: IBranchLeavesConnectionWhere | null;
    update?: IBranchLeavesUpdateConnectionInput | null;
    connect: Array<IBranchLeavesConnectFieldInput>;
    disconnect: Array<IBranchLeavesDisconnectFieldInput>;
    create: Array<IBranchLeavesCreateFieldInput>;
    delete: Array<IBranchLeavesDeleteFieldInput>;
    connectOrCreate: Array<IBranchLeavesConnectOrCreateFieldInput>;
}

  
  export interface IBranchLeavesUpdateConnectionInput {
    node?: ILeafUpdateInput | null;
}

  
  export interface ILeafUpdateInput {
    name?: string | null;
    type?: ILeafTypeUpdateInput | null;
    parentBranch?: ILeafParentBranchUpdateFieldInput | null;
}

  
  export interface ILeafTypeUpdateInput {
    Scale?: ILeafTypeScaleUpdateFieldInput | null;
    Number?: ILeafTypeNumberUpdateFieldInput | null;
    Text?: ILeafTypeTextUpdateFieldInput | null;
    Building?: ILeafTypeBuildingUpdateFieldInput | null;
}

  
  export interface ILeafTypeScaleUpdateFieldInput {
    where?: ILeafTypeScaleConnectionWhere | null;
    update?: ILeafTypeScaleUpdateConnectionInput | null;
    connect?: ILeafTypeScaleConnectFieldInput | null;
    disconnect?: ILeafTypeScaleDisconnectFieldInput | null;
    create?: ILeafTypeScaleCreateFieldInput | null;
    delete?: ILeafTypeScaleDeleteFieldInput | null;
    connectOrCreate?: ILeafTypeScaleConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeScaleUpdateConnectionInput {
    node?: IScaleUpdateInput | null;
}

  
  export interface IScaleUpdateInput {
    min?: number | null;
    max?: number | null;
    value?: number | null;
    min_INCREMENT?: number | null;
    min_DECREMENT?: number | null;
    max_INCREMENT?: number | null;
    max_DECREMENT?: number | null;
    value_INCREMENT?: number | null;
    value_DECREMENT?: number | null;
}

  
  export interface ILeafTypeScaleDisconnectFieldInput {
    where?: ILeafTypeScaleConnectionWhere | null;
}

  
  export interface ILeafTypeNumberUpdateFieldInput {
    where?: ILeafTypeNumberConnectionWhere | null;
    update?: ILeafTypeNumberUpdateConnectionInput | null;
    connect?: ILeafTypeNumberConnectFieldInput | null;
    disconnect?: ILeafTypeNumberDisconnectFieldInput | null;
    create?: ILeafTypeNumberCreateFieldInput | null;
    delete?: ILeafTypeNumberDeleteFieldInput | null;
    connectOrCreate?: ILeafTypeNumberConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeNumberUpdateConnectionInput {
    node?: INumberUpdateInput | null;
}

  
  export interface INumberUpdateInput {
    value?: number | null;
    value_INCREMENT?: number | null;
    value_DECREMENT?: number | null;
}

  
  export interface ILeafTypeNumberDisconnectFieldInput {
    where?: ILeafTypeNumberConnectionWhere | null;
}

  
  export interface ILeafTypeTextUpdateFieldInput {
    where?: ILeafTypeTextConnectionWhere | null;
    update?: ILeafTypeTextUpdateConnectionInput | null;
    connect?: ILeafTypeTextConnectFieldInput | null;
    disconnect?: ILeafTypeTextDisconnectFieldInput | null;
    create?: ILeafTypeTextCreateFieldInput | null;
    delete?: ILeafTypeTextDeleteFieldInput | null;
    connectOrCreate?: ILeafTypeTextConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeTextUpdateConnectionInput {
    node?: ITextUpdateInput | null;
}

  
  export interface ITextUpdateInput {
    value?: string | null;
}

  
  export interface ILeafTypeTextDisconnectFieldInput {
    where?: ILeafTypeTextConnectionWhere | null;
}

  
  export interface ILeafTypeBuildingUpdateFieldInput {
    where?: ILeafTypeBuildingConnectionWhere | null;
    update?: ILeafTypeBuildingUpdateConnectionInput | null;
    connect?: ILeafTypeBuildingConnectFieldInput | null;
    disconnect?: ILeafTypeBuildingDisconnectFieldInput | null;
    create?: ILeafTypeBuildingCreateFieldInput | null;
    delete?: ILeafTypeBuildingDeleteFieldInput | null;
    connectOrCreate?: ILeafTypeBuildingConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeBuildingUpdateConnectionInput {
    node?: IBuildingUpdateInput | null;
}

  
  export interface IBuildingUpdateInput {
    propertyName?: string | null;
    owner?: string | null;
}

  
  export interface ILeafTypeBuildingDisconnectFieldInput {
    where?: ILeafTypeBuildingConnectionWhere | null;
}

  
  export interface ILeafParentBranchUpdateFieldInput {
    where?: ILeafParentBranchConnectionWhere | null;
    update?: ILeafParentBranchUpdateConnectionInput | null;
    connect?: ILeafParentBranchConnectFieldInput | null;
    disconnect?: ILeafParentBranchDisconnectFieldInput | null;
    create?: ILeafParentBranchCreateFieldInput | null;
    delete?: ILeafParentBranchDeleteFieldInput | null;
    connectOrCreate?: ILeafParentBranchConnectOrCreateFieldInput | null;
}

  
  export interface ILeafParentBranchUpdateConnectionInput {
    node?: IBranchUpdateInput | null;
}

  
  export interface ILeafParentBranchDisconnectFieldInput {
    where?: ILeafParentBranchConnectionWhere | null;
    disconnect?: IBranchDisconnectInput | null;
}

  
  export interface IBranchDisconnectInput {
    leaves?: Array<IBranchLeavesDisconnectFieldInput>;
    branches?: Array<IBranchBranchesDisconnectFieldInput>;
}

  
  export interface IBranchLeavesDisconnectFieldInput {
    where?: IBranchLeavesConnectionWhere | null;
    disconnect?: ILeafDisconnectInput | null;
}

  
  export interface ILeafDisconnectInput {
    type?: ILeafTypeDisconnectInput | null;
    parentBranch?: ILeafParentBranchDisconnectFieldInput | null;
}

  
  export interface ILeafTypeDisconnectInput {
    Scale?: ILeafTypeScaleDisconnectFieldInput | null;
    Number?: ILeafTypeNumberDisconnectFieldInput | null;
    Text?: ILeafTypeTextDisconnectFieldInput | null;
    Building?: ILeafTypeBuildingDisconnectFieldInput | null;
}

  
  export interface IBranchBranchesDisconnectFieldInput {
    where?: IBranchBranchesConnectionWhere | null;
    disconnect?: IBranchDisconnectInput | null;
}

  
  export interface IBranchBranchesUpdateFieldInput {
    where?: IBranchBranchesConnectionWhere | null;
    update?: IBranchBranchesUpdateConnectionInput | null;
    connect: Array<IBranchBranchesConnectFieldInput>;
    disconnect: Array<IBranchBranchesDisconnectFieldInput>;
    create: Array<IBranchBranchesCreateFieldInput>;
    delete: Array<IBranchBranchesDeleteFieldInput>;
    connectOrCreate: Array<IBranchBranchesConnectOrCreateFieldInput>;
}

  
  export interface IBranchBranchesUpdateConnectionInput {
    node?: IBranchUpdateInput | null;
}

  
  export interface ITreeBranchesDisconnectFieldInput {
    where?: ITreeBranchesConnectionWhere | null;
    disconnect?: IBranchDisconnectInput | null;
}

  
  export interface ITreeConnectInput {
    branches?: Array<ITreeBranchesConnectFieldInput>;
}

  
  export interface ITreeDisconnectInput {
    branches?: Array<ITreeBranchesDisconnectFieldInput>;
}

  
  export interface ITreeRelationInput {
    branches?: Array<ITreeBranchesCreateFieldInput>;
}

  
  export interface ITreeConnectOrCreateInput {
    branches?: Array<ITreeBranchesConnectOrCreateFieldInput>;
}

  
  export interface IUpdateTreesMutationResponse {
    __typename?: "UpdateTreesMutationResponse";
    info?: IUpdateInfo;
    trees?: Array<ITree>;
}

  
  export interface ICreateBranchesMutationResponse {
    __typename?: "CreateBranchesMutationResponse";
    info?: ICreateInfo;
    branches?: Array<IBranch>;
}

  
  export interface IBranchRelationInput {
    leaves?: Array<IBranchLeavesCreateFieldInput>;
    branches?: Array<IBranchBranchesCreateFieldInput>;
}

  
  export interface IBranchConnectOrCreateInput {
    leaves?: Array<IBranchLeavesConnectOrCreateFieldInput>;
    branches?: Array<IBranchBranchesConnectOrCreateFieldInput>;
}

  
  export interface IUpdateBranchesMutationResponse {
    __typename?: "UpdateBranchesMutationResponse";
    info?: IUpdateInfo;
    branches?: Array<IBranch>;
}

  
  export interface ICreateScalesMutationResponse {
    __typename?: "CreateScalesMutationResponse";
    info?: ICreateInfo;
    scales?: Array<IScale>;
}

  
  export interface IUpdateScalesMutationResponse {
    __typename?: "UpdateScalesMutationResponse";
    info?: IUpdateInfo;
    scales?: Array<IScale>;
}

  
  export interface ICreateNumbersMutationResponse {
    __typename?: "CreateNumbersMutationResponse";
    info?: ICreateInfo;
    numbers?: Array<INumber>;
}

  
  export interface IUpdateNumbersMutationResponse {
    __typename?: "UpdateNumbersMutationResponse";
    info?: IUpdateInfo;
    numbers?: Array<INumber>;
}

  
  export interface ICreateTextsMutationResponse {
    __typename?: "CreateTextsMutationResponse";
    info?: ICreateInfo;
    texts?: Array<IText>;
}

  
  export interface IUpdateTextsMutationResponse {
    __typename?: "UpdateTextsMutationResponse";
    info?: IUpdateInfo;
    texts?: Array<IText>;
}

  
  export interface ICreateBuildingsMutationResponse {
    __typename?: "CreateBuildingsMutationResponse";
    info?: ICreateInfo;
    buildings?: Array<IBuilding>;
}

  
  export interface IUpdateBuildingsMutationResponse {
    __typename?: "UpdateBuildingsMutationResponse";
    info?: IUpdateInfo;
    buildings?: Array<IBuilding>;
}

  
  export interface ICreateLeavesMutationResponse {
    __typename?: "CreateLeavesMutationResponse";
    info?: ICreateInfo;
    leaves?: Array<ILeaf>;
}

  
  export interface ILeafRelationInput {
    type?: ILeafTypeCreateFieldInput | null;
    parentBranch?: ILeafParentBranchCreateFieldInput | null;
}

  
  export interface ILeafTypeCreateFieldInput {
    Scale?: Array<ILeafTypeScaleCreateFieldInput>;
    Number?: Array<ILeafTypeNumberCreateFieldInput>;
    Text?: Array<ILeafTypeTextCreateFieldInput>;
    Building?: Array<ILeafTypeBuildingCreateFieldInput>;
}

  
  export interface ILeafConnectOrCreateInput {
    type?: ILeafTypeConnectOrCreateInput | null;
    parentBranch?: ILeafParentBranchConnectOrCreateFieldInput | null;
}

  
  export interface ILeafTypeConnectOrCreateInput {
    Scale?: ILeafTypeScaleConnectOrCreateFieldInput | null;
    Number?: ILeafTypeNumberConnectOrCreateFieldInput | null;
    Text?: ILeafTypeTextConnectOrCreateFieldInput | null;
    Building?: ILeafTypeBuildingConnectOrCreateFieldInput | null;
}

  
  export interface IUpdateLeavesMutationResponse {
    __typename?: "UpdateLeavesMutationResponse";
    info?: IUpdateInfo;
    leaves?: Array<ILeaf>;
}


// tslint:enable
