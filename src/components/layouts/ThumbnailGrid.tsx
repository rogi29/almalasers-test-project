import './ThumbnailGrid.css';

import { ReactNode } from 'react';
import classnames from 'classnames';
import Grid, { GridProps } from './Grid';
import Cell from './Cell';

interface ThumbnailGridProps extends GridProps {
    children: ReactNode[];
}

const ThumbnailGrid = ({
    children,
    className,
    ...props
}: ThumbnailGridProps) => (
    <Grid
        {...props}
        columns={3}
        gap="1rem"
        rowsHeight="16rem"
        className={classnames(
            'ThumbnailGrid',
            className
        )}
    >
        {children.map((child, index) => (
            <Cell key={index}>
                {child}
            </Cell>
        ))}
    </Grid>
);

export default ThumbnailGrid;