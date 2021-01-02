import useSWR from 'swr';
import { useState, useEffect, ReactElement } from 'react';
import { buildPath } from 'utils/pathUtils';
import { NodeMetadata } from 'modals/NodeMetadata';
import { FileStructure, FOLDER_NODE_TYPE, IMAGE_NODE_TYPE } from 'modals/FileStructure';
import { DEFAULT_PATH_PARAM, explorePictures } from 'queries/explorePictures';
import { TreeProps } from 'components/tree/Tree';

interface TreeContainerProps {
    redirect?: (path: string) => void; 
    children: (props: TreeProps) => ReactElement;
}

const TreeContainer = ({
    children,
    redirect = () => {}
}: TreeContainerProps) => {
    const [ selectedPaths, setSelectedPaths ] = useState<string[]>([]);
    const [ currentPath, setCurrentPath ] = useState<string | null>(null);
    const [ nodeList, setNodeList ] = useState<NodeMetadata[]>([]);
    const { error, data } = useSWR<FileStructure, Error>(currentPath, explorePictures);

    const getNodeByPath = (path: string) => {
        return nodeList.find(({ path: currentPath }) => currentPath === path);
    };

    const clear = () => {
        setCurrentPath(null);
        setSelectedPaths([]);
        setNodeList([]);
    };

    const toggleFolder = (path = DEFAULT_PATH_PARAM) => {
        const isOpen = currentPath === path;
        const metadata = getNodeByPath(path);

        if (isOpen) {
            //close
            setCurrentPath(metadata?.parentPath || null);
            setSelectedPaths(list => {
                let sliced = list.slice(0, (metadata?.level || 0) + 1);

                if (sliced.length === 1) {
                    sliced = [];
                }

                return sliced;
            });
        } else {
            //open
            setCurrentPath(path);
            setSelectedPaths(list => {
                const sliced = list.slice(0, (metadata?.level || 0) + 1);

                if (sliced.indexOf(path) === -1) {
                    sliced.push(path);
                }

                return sliced;
            });
        }
    };

    useEffect(() => {
        if (!!error) {
            alert(error.message);
        }
    }, [ error ]);

    useEffect(() => {
        if (!currentPath) {
            clear();
        }
    }, [ currentPath ]);

    useEffect(() => {
        if (data) {
            const path = currentPath || DEFAULT_PATH_PARAM;
            const metadata = getNodeByPath(path);
            const level = typeof metadata?.level === 'number' ? metadata.level + 1 : 0;

            setNodeList(nodeList => {
                nodeList = nodeList.filter(metadata => metadata.level < level);

                data.children.forEach(node => {
                    nodeList.push({
                        node,
                        level,
                        parentPath: currentPath,
                        path: buildPath(node.label, path)
                    });
                });

                return nodeList;
            });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ data ]);

    return (
        <>
            {children({
                nodeList:nodeList,
                selectedPaths:selectedPaths,
                handleNodeClick:({ node, path }) => {
                    switch (node.type) {
                        case FOLDER_NODE_TYPE:
                            toggleFolder(path);
                            break;
                        case IMAGE_NODE_TYPE:
                            redirect(`/picture?path=${path}`);
                            break;
                    }
                }
            })}
        </>
    );
};

export default TreeContainer;