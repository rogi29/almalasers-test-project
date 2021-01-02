import useSWR from 'swr';
import { ReactElement } from 'react';
import { FileStructure, IMAGE_NODE_TYPE } from 'modals/FileStructure';
import { explorePictures } from 'queries/explorePictures';
import { buildPath } from 'utils/pathUtils';
import { GalleryProps } from 'components/gallery/Gallery';

interface GalleryContainerProps {
    label: string | null;
    parentPath: string;
    redirect?: (path: string) => void; 
    children: (props: GalleryProps) => ReactElement;
}

const GalleryContainer = ({
    label,
    parentPath,
    children,
    redirect = () => {}
}: GalleryContainerProps) => {
    const { error, data } = useSWR<FileStructure, Error>(parentPath, explorePictures);
    const currFile = data?.children.find(({ label: currLabel }) => currLabel === label);
    const pictures = data?.children.filter(({ type }) => type === IMAGE_NODE_TYPE);

    if (!!error) {
        return <div>Error occurred!</div>;
    }

    if (!data) {
        return <div>Loading...</div>;
    }

    if (currFile?.type !== IMAGE_NODE_TYPE) {
        return <div>Path provided is not an image</div>;
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
                        redirect(`/picture?path=${buildPath(label, parentPath)}`);
                    }
                }
            })}
        </>
    );
};

export default GalleryContainer;