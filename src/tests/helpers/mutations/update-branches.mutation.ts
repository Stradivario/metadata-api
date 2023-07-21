export const UpdateBranchesMutation = `
mutation UpdateBranchesMutation($where: BranchWhere!, $connectOrCreate: BranchConnectOrCreateInput!) {
  updateBranches(
    where: $where
    connectOrCreate: $connectOrCreate
  ) {
    branches {
      id
      name
      branches {
        id
        name
      }
      leaves {
        id
        name
      }
    }
  }
}
`