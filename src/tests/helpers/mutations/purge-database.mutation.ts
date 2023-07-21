export const PurgeDatabase = `
mutation {
  deleteScales(where: { value: 50 }) {
    nodesDeleted
  }
  deleteNumbers(where: { value: 50 }) {
    nodesDeleted
  }
  
    deleteTexts(where: { value: "Test" }) {
    nodesDeleted
  }
  deleteAverageUnitPrice: deleteLeaves(where: { name: "Average Unit Price" }) {
    nodesDeleted
    bookmark
  }
  deleteStorageCapacity: deleteLeaves(where: { name: "Storage Capacity" }) {
    nodesDeleted
    bookmark
  }
  
    deleteStorageModel: deleteLeaves(where: { name: "Storage Model" }) {
    nodesDeleted
    bookmark
  }

  energyStorageSystem: deleteBranches(
    where: { name: "Energy Storage System" }
  ) {
    nodesDeleted
  }

  renewables: deleteBranches(where: { name: "Renewables" }) {
    nodesDeleted
  }

  deleteTrees(where: { name: "Root" }) {
    nodesDeleted
  }
}

`