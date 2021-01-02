import './Gallery.css';

import { SyntheticEvent } from 'react';
import { FileStructureNode } from "modals/FileStructure";
import ThumbnailGrid from "components/layouts/ThumbnailGrid";
import Grid from "components/layouts/Grid";
import Cell from "components/layouts/Cell";
import Image from "./Image";

export interface GalleryProps {
    primaryPicture: FileStructureNode;
    pictures: FileStructureNode[];
    onImageClick?: (e: SyntheticEvent) => any;
}

const Gallery = ({
    primaryPicture,
    pictures,
    onImageClick
}: GalleryProps) => (
    <Grid className="Gallery" rows={2} columns={1}>
        <Cell className="primaryPictureWrapper">
            <Image src={primaryPicture.url} alt={primaryPicture.label} />
        </Cell>
        <Cell>
            <ThumbnailGrid height="100%">
                {(pictures || []).map(({ label, url }) => (
                    <Image
                        key={label}
                        src={url}
                        alt={label}
                        data-label={label}
                        selected={primaryPicture.url === url}
                        onClick={onImageClick}
                        className="thumbnail"
                    />
                ))}
            </ThumbnailGrid>
        </Cell>
    </Grid>
);

export default Gallery;