import './Tree.css';

import { FOLDER_NODE_TYPE } from "modals/FileStructure";
import { NodeMetadata } from "modals/NodeMetadata";
import { DEFAULT_PATH_PARAM } from "queries/explorePictures";
import TreeNode from "./TreeNode";

export interface TreeProps {
    nodeList: NodeMetadata[];
    selectedPaths: string[];
    handleNodeClick: (node: NodeMetadata) => void;
}

const getRootMetadata = (): NodeMetadata => ({
    path: DEFAULT_PATH_PARAM,
    parentPath: null,
    level: 0,
    node: {
        label: DEFAULT_PATH_PARAM,
        type: FOLDER_NODE_TYPE
    }
});

const Tree = ({
    nodeList,
    selectedPaths,
    handleNodeClick
}: TreeProps) => {
    let currIndex = -1;
    let prevLevel = 0;
    
    return (
        <div className="Tree">
            <TreeNode
                isRoot={true}
                selected={selectedPaths.indexOf(DEFAULT_PATH_PARAM) > -1}
                children="R"
                onClick={() => {
                    handleNodeClick(getRootMetadata());
                }}
            />
            {nodeList.map(({ path, node, level, parentPath }) => {
                currIndex++;

                if (level > prevLevel) {
                    currIndex = 0;
                }

                prevLevel = level;

                return (
                    <TreeNode
                        key={path}
                        level={level}
                        index={currIndex}
                        expandable={node.type === FOLDER_NODE_TYPE}
                        selected={selectedPaths.indexOf(path) > -1}
                        onClick={() => {
                            handleNodeClick({
                                path,
                                parentPath,
                                node,
                                level
                            });
                        }}
                    />
                );
            })}
        </div>
    );
};

export default Tree;