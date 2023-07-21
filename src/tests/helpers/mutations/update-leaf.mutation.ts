export const UpdateLeavesMutation = `
mutation updateLeaves($where: LeafWhere!, $connectOrCreate: LeafConnectOrCreateInput!) {
  updateLeaves(
    where: $where
    connectOrCreate: $connectOrCreate
  ) {
    leaves {
      id
      name
      type {
        ...NumberFragment
        ...ScaleFragment
        ...TextFragment
        __typename
      }
    }
  }
}


fragment NumberFragment on Number {
  id
  value
}

fragment ScaleFragment on Scale {
  id
  min
  max
  value
}

fragment TextFragment on Text {
  id
  text:value
}
`