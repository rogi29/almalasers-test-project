import './TransformTree.css';

import { ReactNode } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export interface TransformTreeProps {
    children: ReactNode
}

const TransformTree = ({ children }: TransformTreeProps) => (
    <TransformWrapper
        defaultScale={1}
        defaultPositionX={0}
        defaultPositionY={0}
        options={{
            minScale: 0.6
        }}
        zoomIn={{
            step: 10
        }}
        zoomOut={{
            step: 10
        }}
    >
        {({
            zoomIn,
            zoomOut,
            resetTransform
        }: {
            zoomIn: any;
            zoomOut: any;
            resetTransform: any
        }) => (
            <>
                <div className="TransformTree__tools">
                    <button onClick={zoomIn}>+</button>
                    <button onClick={zoomOut}>-</button>
                    <button onClick={resetTransform}>x</button>
                </div>
                <TransformComponent>
                    {children}
                </TransformComponent>
            </>
        )}
    </TransformWrapper>
);

export default TransformTree;