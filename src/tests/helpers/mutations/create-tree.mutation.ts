export const CreateTreeMutation = `
mutation createRootTree($input: [TreeCreateInput!]!) {
  createTrees(
    input: $input
  ) {
    trees {
      id
      name
      branches {
        id
        name
      }
    }
  }
}
`;