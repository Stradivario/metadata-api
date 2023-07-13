## Install

```
npm install
```

## Create `.env`. file

```
NODE_ENV=development
NEO4J_URI=bolt://localhost:7687
NEO4J_USERNAME=test
NEO4J_PASSWORD=123456
```

## Install `@gapi/cli` (skip if you already have it)

```
npm i -g @gapi/cli
```

## Start server

```
npm start
```

## Deploy Graphql Lambda

### Login to graphql-server cli

1. Go to https://graphql-server.com/profile/settings/identity/cli
2. Click Generate CLI Token button
3. Copy the generated command
4. Install `npm i -g @gapi/gcli`
5. Execute the command from step 3
6. Go to https://graphql-server.com/projects/60fc997063ce4f0031eeb5e9/lambdas
7. On the top right corner you will find button called `CONNECT CLI` click it
8. Copy the command provided in the dialog
9. Execute it inside the terminal `gcli project:use 60fc997063ce4f0031eeb5e9`
10. Get selected lambda for fidex `gcli lambda:get`
11. To update the lambda execute `gcli lambda:update`

### Create/Update/Get/Delete Trees

```graphql
mutation createTrees {
  createTrees(
    input: {
      name: "Root"
      branches: {
        connect: {
          where: { node: { id: "9328dbad-39cf-4750-b2e4-90d5f5eaf294" } }
        }
      }
    }
  ) {
    trees {
      id
      name
    }
  }
}

mutation updateTrees {
  updateTrees(
    where: { name: "Root" }
    connect: {
      branches: {
        where: { node: { id: "720a490e-0e9a-44b6-ac6d-ef6cac0e9143" } }
      }
    }
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


query getTree {
  trees(where:{name:"Root"}) {
    id
    name
    branches {
      id
      name
      branches {
        id
        name
      }
    }
  }
}


mutation deleteTrees {
  deleteTrees(where: { name: "Root" }) {
    relationshipsDeleted
  }
}
```


### Create/Update/Delete/Get Branches


```graphql
mutation createRenewables {
  createBranches(input: { name: "Renewables" }) {
    branches {
      id
      name
    }
  }
}

mutation createESS {
  createBranches(input: { name: "Energy Storage System" }) {
    branches {
      id
      name
    }
  }
}

mutation deleteRenewables {
  deleteBranches(where: { name: "Renewables" }) {
    nodesDeleted
  }
}

mutation deleteESS {
  deleteBranches(where: { name: "Energy Storage System" }) {
    nodesDeleted
  }
}

mutation updateRenewables {
  updateBranches(
    where: { name: "Energy Storage System" }
    connect: {
      branches: {
        where: { node: { id: "fb1d0366-4eb3-4fa7-b762-2cebec594827" } }
      }
      leaves: {
        where: { node: { id: "e33505ed-c82a-4804-bd92-dd5f563c6915" } }
      }
    }
  ) {
    branches {
      id
    }
  }
}
```


### Create/Delete/Update Leaves

```graphql
mutation createLeaves {
  createLeaves(
    input: {
      name: "test"
      type: {
        connect: {
          where: { node: { id: "4de785bc-c225-4b7c-8459-1991ee1d735e" } }
        }
      }
    }
  ) {
    leaves {
      id
      name
      type {
        __typename
      }
    }
  }
}

mutation deleteLeaves {
  deleteLeaves(where: { name: "test" }) {
    nodesDeleted
    bookmark
  }
}

mutation updateLeaves {
  updateLeaves(
    where: { name: "Storage Capacity" }
    update: {
      type: {
        connect: {
          where: { node: { id: "4de785bc-c225-4b7c-8459-1991ee1d735e" } }
        }
      }
    }
  ) {
    leaves {
      id
      name
    }
  }
}

```