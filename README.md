# Technologies

[Neo4J](https://neo4j.com/) Highly scalable Graph Database which is schema free

[Neo4JGraphql](https://neo4j.com/developer/graphql/) Write graphql schema which generates abstraction layer sending Cyper queries to Neo4J using graphql queries

[Graphql](https://graphql.com/) Communication protocol which uses a query language to fetch the data

[@gapi](https://github.com/Stradivario/gapi) Graphql API framework working with @decorators for creating simple and yet powerful Graphql API's

[Typescript](https://www.typescriptlang.org/) Superse

[Babel](https://babeljs.io/) Set of tools for the new ES+ standard

[Parcel](https://parceljs.org/) Code Bundler

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

## Preparing the Neo4j Database
We can use Neo4J Desktop in order to create our database locally and to have some visual query introspection provided from the application.
In order to install it you need to follow the instructions provided in this link https://neo4j.com/download/

## Install `@gapi/cli`
This is a command line interface for `@gapi` infrastructure you can find more details about it in the Wiki page of the framework
https://github.com/Stradivario/gapi/wiki

```
npm i -g @gapi/cli
```

## Start server

```
npm start
```

## Create Flow

```graphql
mutation createRootTree {
  createTrees(
    input: {
      name: "Root"
      branches: {
        connectOrCreate: {
          where: { node: { name: "Renewables" } }
          onCreate: { node: { name: "Renewables" } }
        }
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

mutation updateRenewables {
  updateBranches(
    where: { name: "Renewables" }
    connectOrCreate: {
      branches: {
        where: { node: { name: "Energy Storage System" } }
        onCreate: { node: { name: "Energy Storage System" } }
      }
    }
  ) {
    branches {
      id
      name
    }
  }
}

mutation updateEnergyStorageSystem {
  updateBranches(
    where: { name: "Energy Storage System" }
    connectOrCreate: {
      leaves: {
        where: { node: { name: "Average Unit Price" } }
        onCreate: { node: { name: "Average Unit Price" } }
      }
    }
  ) {
    branches {
      id
    }
  }
}

mutation updateLeaves {
  updateLeaves(
    where: { name: "Average Unit Price" }
    connectOrCreate: {
      
      parentBranch: {
        where: { node: { name: "Energy Storage System" } }
        onCreate: { node: { name: "Energy Storage System" } }
      }
      type: {
        Number: {
          where: { node: { id: "e1daf355-2cc8-4997-9a10-fd6b34f2d62d" } }
          onCreate: { node: {} }
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

mutation updateEnergyStorageSystemAddStorageCapacity {
  updateBranches(
    where: { name: "Energy Storage System" }
    connectOrCreate: {
      leaves: {
        where: { node: { name: "Storage Capacity" } }
        onCreate: { node: { name: "Storage Capacity" } }
      }
    }
  ) {
    branches {
      id
    }
  }
}



mutation updateLeavesStorageCapacity {
  updateLeaves(
    where: { name: "Storage Capacity" }
    connectOrCreate: {
      parentBranch: {
        where: { node: { name: "Energy Storage System" } }
        onCreate: { node: { name: "Energy Storage System" } }
      }
      type: {
        Scale: {
          where: { node: { id: "e1daf355-2cc8-4997-9a10-fd6b34f2d62d" } }
          onCreate: { node: { min: 1, max: 100 } }
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

mutation updateEnergyStorageSystemAddStorageModel {
  updateBranches(
    where: { name: "Energy Storage System" }
    connectOrCreate: {
      leaves: {
        where: { node: { name: "Storage Model" } }
        onCreate: { node: { name: "Storage Model" } }
      }
    }
  ) {
    branches {
      id
    }
  }
}


mutation updateLeavesStorageModel {
  updateLeaves(
    where: { name: "Storage Model" }
    connectOrCreate: {
      parentBranch: {
        where: { node: { name: "Energy Storage System" } }
        onCreate: { node: { name: "Energy Storage System" } }
      }
      type: {
        Text: {
          where: { node: { id: "e1daf355-2cc8-4997-9a10-fd6b34f2d62d" } }
          onCreate: { node: {  value:"Test" } }
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


query getTree {
  trees(where: { name: "Root" }) {
    id
    name
    branches {
      id
      name
      branches {
        id
        name
        leaves(options: { sort: { id:ASC}}) {
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

```


## Delete Flow


```graphql
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

```




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