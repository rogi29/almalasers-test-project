import './Grid.css';
import styled from 'styled-components';
import classnames from 'classnames';
import { filterAndJoinArray } from 'utils/arrayUtils';

export interface GridProps {
    width?: string;
    height?: string;
	gap?: string;
	columns?: string | number;
	columnsWidth?: string;
	columnsTemplate?: string;
	rows?: string | number;
	rowsHeight?: string;
	rowsMinHeight?: string;
	rowsMaxHeight?: string;
	rowsAuto?: string;
	rowsTemplate?: string;
	columnGap?: string;
    rowGap?: string;
    className?: string;
};

export default styled.div.attrs(({ className }) => ({ className: classnames('Grid', className) }))`
    ${(props: GridProps) => {
        return filterAndJoinArray([
            props.width && `width: ${props.width};`,
            props.height && `height: ${props.height};`,
            props.gap && `--gap: ${props.gap};`,
            props.columns && `--columns: ${props.columns};`,
            props.columnsWidth && `--columns-width: ${props.columnsWidth};`,
            props.columnsTemplate && `--columns-template: ${props.columnsTemplate};`,
            props.rows && `--rows: ${props.rows};`,
            props.rowsHeight && `--rows-height: ${props.rowsHeight};`,
            props.rowsMinHeight && `--rows-min-height: ${props.rowsMinHeight};`,
            props.rowsMaxHeight && `--rows-max-height: ${props.rowsMaxHeight};`,
            props.rowsAuto && `--rows-auto: ${props.rowsAuto};`,
            props.rowsTemplate && `--rows-template: ${props.rowsTemplate};`,
            props.columnGap && `--column-gap: ${props.columnGap};`,
            props.rowGap && `--row-gap: ${props.rowGap};`
        ], '\n')
    }}
`;