import {
  IBranchConnectOrCreateInput,
  IBranchWhere,
  ILeafConnectOrCreateInput,
  ILeafWhere,
  IMutation,
  IQuery,
  ITreeCreateInput
} from '@core/api-introspection';
import { map } from 'rxjs/operators';
import {
  CreateTreeMutation,
  UpdateBranchesMutation,
  UpdateLeavesMutation,
  PurgeDatabase
} from './helpers/mutations';
import { query } from './helpers/query';

describe('Init', () => {
  afterAll(async () => {
    await query<IMutation>(PurgeDatabase).toPromise()
  });

  it('should return 200 status', (done) => {
    query<IQuery>(
      `query status { status { status } }`
    )
      .subscribe((res) => {
        expect(res.status.status).toBe('200');
        done()
      })
  });

  it('should create Root tree with branch Renewables', (done) => {
    query<IMutation, {
      input: ITreeCreateInput
    }>(CreateTreeMutation, {
      input: {
        name: 'Root',
        branches: {
          connectOrCreate: [{
            where: {
              node: {
                name: 'Renewables'
              }
            },
            onCreate: {
              node: {
                name: 'Renewables'
              }
            }
          }]
        }
      }
    })
      .pipe(map(res => res.createTrees))
      .subscribe((data) => {
        expect(data.trees.length).toBe(1);
        const [tree] = data.trees;
        const [branch] = tree.branches;
        expect(tree.name).toBe('Root');
        expect(branch.name).toBe('Renewables');
        done()
      })
  });

  it('should update update Renewables branch and connect Energy Storage System', (done) => {
    query<IMutation, {
      where: Partial<IBranchWhere>,
      connectOrCreate: Partial<IBranchConnectOrCreateInput>
    }>(UpdateBranchesMutation, {
      where: {
        name: 'Renewables'
      },
      connectOrCreate: {
        branches: [{
          where: {
            node: { name: "Energy Storage System" }
          },
          onCreate: {
            node: {
              name: "Energy Storage System"
            }
          }
        }]
      },
    })
      .pipe(map(res => res.updateBranches))
      .subscribe((data) => {
        const [branch] = data.branches;
        expect(branch.name).toBe('Renewables');
        const [connectedBranch] = branch.branches;
        expect(connectedBranch.name).toBe('Energy Storage System');
        done()
      })
  });

  it('should update Energy Storage System with leaf Average Unit Price', (done) => {
    query<IMutation, {
      where: Partial<IBranchWhere>,
      connectOrCreate: Partial<IBranchConnectOrCreateInput>
    }>(UpdateBranchesMutation, {
      where: {
        name: 'Energy Storage System'
      },
      connectOrCreate: {
        leaves: [{
          where: {
            node: {
              name: "Average Unit Price"
            }
          },
          onCreate: {
            node: {
              name: "Average Unit Price"
            }
          }
        }]
      },
    })
      .pipe(map(res => res.updateBranches))
      .subscribe((data) => {
        const [branch] = data.branches;
        expect(branch.name).toBe('Energy Storage System');
        const [leaf] = branch.leaves;
        expect(leaf.name).toBe('Average Unit Price');
        done()
      })
  });

  it('should update leaf Average Unit Price with Number and default value 50', (done) => {
    query<IMutation, {
      where: Partial<ILeafWhere>,
      connectOrCreate: Partial<ILeafConnectOrCreateInput>
    }>(UpdateLeavesMutation, {
      where: { name: 'Average Unit Price' },
      connectOrCreate: {
        parentBranch: {
          where: {
            node: {
              name: "Energy Storage System"
            }
          },
          onCreate: {
            node: {
              name: "Energy Storage System"
            }
          }
        },
        type: {
          Number: {
            where: {
              node: {
                id: "e1daf355-2cc8-4997-9a10-fd6b34f2d62d"
              }
            },
            onCreate: {
              node: {}
            }
          }
        }
      }
    })
      .pipe(map(res => res.updateLeaves))
      .subscribe((data) => {
        const [leaf] = data.leaves;
        expect(leaf.name).toBe('Average Unit Price');
        expect(leaf.type.__typename).toBe('Number');
        if (leaf.type.__typename === 'Number') {
          expect(leaf.type.value).toBe(50);
        }

        done()
      })
  });


  it('should create Storage Capacity under Energy Storage System branch', (done) => {
    query<IMutation, {
      where: Partial<IBranchWhere>,
      connectOrCreate: Partial<IBranchConnectOrCreateInput>
    }>(UpdateBranchesMutation, {
      where: {
        name: 'Energy Storage System'
      },
      connectOrCreate: {
        leaves: [{
          where: {
            node: {
              name: "Storage Capacity"
            }
          },
          onCreate: {
            node: {
              name: "Storage Capacity"
            }
          }
        }]
      }
    })
      .pipe(map(res => res.updateBranches))
      .subscribe((data) => {
        const [branch] = data.branches;
        expect(branch.name).toBe('Energy Storage System')
        const [leaf] = branch.leaves;
        expect(leaf.name).toBe('Storage Capacity')
        done()
      })
  });

})