export enum FigmaType {
  Slice = 'SLICE',
  Frame = 'FRAME',
  Group = 'GROUP',
  ComponentSet = 'COMPONENT_SET',
  Component = 'COMPONENT',
  Instance = 'INSTANCE',
  BooleanOperation = 'BOOLEAN_OPERATION',
  Vector = 'VECTOR',
  Star = 'STAR',
  Line = 'LINE',
  Ellipse = 'ELLIPSE',
  Polygon = 'POLYGON',
  RegularPolygon = 'REGULAR_POLYGON',
  Rectangle = 'RECTANGLE',
  Text = 'TEXT',
  Sticky = 'STICKY',
  Stamp = 'STAMP',
  ShapeWithText = 'SHAPE_WITH_TEXT',
  CodeBlock = 'CODE_BLOCK',
  Connector = 'CONNECTOR',
  Widget = 'WIDGET',
  Document = 'DOCUMENT',
  Canvas = 'CANVAS',
}

export interface IGuid {
  sessionID:number,
  localID:number;
}

interface IParentIndex {
  guid:IGuid; 
  position: string;

}

interface ITreeNode {
  guid:IGuid;
  type: FigmaType,
  parentIndex: IParentIndex
}


export  {ITreeNode}
