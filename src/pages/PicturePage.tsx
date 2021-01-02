import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { parsePath } from 'utils/pathUtils';
import useQuery from 'hooks/useQuery';
import Gallery from 'components/gallery/Gallery';
import PageLayout from 'components/layouts/PageLayout';
import GalleryContainer from 'components/containers/GalleryContainer';

const PicturePage = () => {
    const query = useQuery();
    const history = useHistory();
    const { label, parentPath } = parsePath(query.get('path'));

    useEffect(() => {
        if (label) {
            window.scrollTo(0, 0);
        }
    }, [ label ]);

    if (parentPath === null) {
        return <div>Path was not provided</div>;
    }

    return (
        <PageLayout>
            <GalleryContainer
                label={label}
                parentPath={parentPath}
                redirect={history.push}
                children={Gallery}
            />
        </PageLayout>
    );
};

export default PicturePage;