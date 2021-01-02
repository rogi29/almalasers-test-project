export const FOLDER_NODE_TYPE = 0;
export const IMAGE_NODE_TYPE = 1;

export interface FileStructureNode {
    type: typeof FOLDER_NODE_TYPE | typeof IMAGE_NODE_TYPE;
    label: string;
    url?: string;
}

export interface FileStructure {
    type: typeof FOLDER_NODE_TYPE;
    label: string;
    children: FileStructureNode[];
}