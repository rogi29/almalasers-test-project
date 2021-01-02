import './TreeNode.css';

import styled from 'styled-components';
import classnames from 'classnames';
import { filterAndJoinArray } from 'utils/arrayUtils';

interface TreeNodeProps {
    level?: number;
    index?: number;
    isRoot?: boolean;
    selected?: boolean;
    expandable?: boolean;
    className?: string;
}

const TreeNode = styled.button.attrs(({
    className,
    isRoot = false,
    selected = false,
    expandable = true
}: TreeNodeProps) => ({
    className: classnames(
        'TreeNode',
        isRoot && 'TreeNode--root',
        selected && 'TreeNode--selected',
        expandable && 'TreeNode--expandable',
        className
    )
}))`
    ${({ level, index }: TreeNodeProps) => filterAndJoinArray([
        typeof level === 'number' ? `--level: ${level} !important;` : undefined,
        typeof index === 'number' ? `--index: ${index} !important;` : undefined
    ], '\n')}
`;

export default TreeNode;