import { ITreeNode ,IGuid} from './type'

interface ILayer extends ITreeNode{
  layers: ILayer[]
}

const generateID = (guid:IGuid) => {
  const id = guid.localID;
  const sessionID = guid.sessionID;

  return`${id}-${sessionID}`;
}

// sort in ascending order
function comparison(first: ILayer,second: ILayer): number {
  const  firstPos = first.parentIndex.position;
  const secondPos = second.parentIndex.position; 

  // To avoid using a loop structure to compare each character, 
  // I refer to "https://stackoverflow.com/questions/49258319/localecompare-with-ascii-style-lexicographical-sorting"
  const result =  -(firstPos < secondPos) || +(firstPos > secondPos);

  return  result
}

function sort(layers:ILayer[]) {
  for(const layer of layers) {

    if(layer.layers.length > 0) {
      sort(layer.layers)
    }
  }

   layers.sort(comparison)
}

function makeNodesToTree(nodes: ITreeNode[]):ILayer[] {
const objectMap: {
  [key :string]:ILayer
} = {}

  for(const node of nodes) {
    const { guid} = node;
    const id = generateID(guid)

      objectMap[id] = {
        ...node,
        layers:[]
    }
  }

  const needClearID :string[]= []

  for(const node of nodes) {
    const {  parentIndex,guid} = node;
    const id = generateID(guid);

    if(parentIndex) {
      const parentID = generateID(parentIndex.guid)
      const parent  = objectMap[parentID]
      const data = objectMap[id]

      if(parent && data) {
        parent.layers.push(data)
        needClearID.push(id)
      }
    }
  }

  for(const id of needClearID) {
    delete objectMap[id]
  }

  const layers = Object.values(objectMap);

  // Skip the first layer because its type is "DOCUMENT".
  sort(layers[0].layers)

  return layers;
}

export default  makeNodesToTree;
