import { FileStructureNode } from "./FileStructure";

export interface NodeMetadata {
    level: number;
    path: string;
    parentPath: string | null;
    node: FileStructureNode;
}