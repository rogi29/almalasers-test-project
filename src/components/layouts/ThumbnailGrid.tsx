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
        columns={15}
        gap="0.5rem"
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