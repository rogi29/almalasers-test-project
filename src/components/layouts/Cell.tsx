import styled from 'styled-components';
import classnames from 'classnames';
import { filterAndJoinArray } from 'utils/arrayUtils';

interface CellProps {
    columnPosition?: string | number;
    columnSpan?: string | number;
    columnStart?: string;
    columnEnd?: string;
    rowPosition?: string | number;
    rowSpan?: string | number;
    rowStart?: string;
    rowEnd?: string;
};

const Cell = styled.div.attrs(({ className }) => ({ className: classnames('cell', className) }))`
    ${(props: CellProps) => {
        return filterAndJoinArray([
            props.columnPosition && `--column-position: ${props.columnPosition} !important;`,
            props.columnSpan && `--column-span: ${props.columnSpan} !important;`,
            props.columnStart && `--column-start: ${props.columnStart} !important;`,
            props.columnEnd && `--column-end: ${props.columnEnd} !important;`,
            props.rowPosition && `--row-position: ${props.rowPosition} !important;`,
            props.rowSpan && `--row-span: ${props.rowSpan} !important;`,
            props.rowStart && `--row-start: ${props.rowStart} !important;`,
            props.rowEnd && `--row-end: ${props.rowEnd} !important;`
        ], '\n')
    }}
`;

export default Cell;