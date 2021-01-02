import './Image.css';

import classnames from 'classnames';
import { LazyLoadImage, LazyLoadImageProps } from 'react-lazy-load-image-component';

interface ImageProps extends LazyLoadImageProps {
    selected?: boolean;
    className?: string;
}

const Image = ({ className, selected = false, ...props }: ImageProps) => (
    <LazyLoadImage
        {...props}
        effect="blur"
        className="Image__img"
        wrapperClassName={classnames(
            'Image',
            selected && 'Image--selected',
            className
        )}
    />
);

export default Image;