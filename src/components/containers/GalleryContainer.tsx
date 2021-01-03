import useSWR from 'swr';
import { ReactElement, ComponentType } from 'react';
import { FileStructure, IMAGE_NODE_TYPE } from 'modals/FileStructure';
import { explorePictures } from 'queries/explorePictures';
import { buildPath } from 'utils/pathUtils';
import { GalleryProps } from 'components/gallery/Gallery';

interface GalleryContainerProps {
    label: string | null;
    parentPath: string;
    redirectOnErrorComponent: ComponentType;
    handleClick?: (path: string) => void; 
    children: (props: GalleryProps) => ReactElement;
}

const GalleryContainer = ({
    label,
    parentPath,
    redirectOnErrorComponent: Redirect,
    children,
    handleClick = () => {}
}: GalleryContainerProps) => {
    const { error, data } = useSWR<FileStructure, Error>(parentPath, explorePictures);
    const currFile = data?.children.find(({ label: currLabel }) => currLabel === label);
    const pictures = data?.children.filter(({ type }) => type === IMAGE_NODE_TYPE);

    if (!error && !data) {
        return <div>Loading...</div>;
    }

    if (!!error || currFile?.type !== IMAGE_NODE_TYPE) {
        return <Redirect />;
    }

    return (
        <>
            {children({
                primaryPicture: currFile,
                pictures: pictures || [],
                onImageClick: (e) => {
                    const target = e.currentTarget as HTMLElement;
                    const label = target.getAttribute('data-label');
    
                    if (label) {
                        handleClick(buildPath(label, parentPath));
                    }
                }
            })}
        </>
    );
};

export default GalleryContainer;