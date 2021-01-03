import { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

import { parsePath } from 'utils/pathUtils';
import useLocationQuery from 'hooks/useLocationQuery';
import Gallery from 'components/gallery/Gallery';
import PageLayout from 'components/layouts/PageLayout';
import GalleryContainer from 'components/containers/GalleryContainer';

const PicturePage = () => {
    const query = useLocationQuery();
    const history = useHistory();
    const { label, parentPath } = parsePath(query.get('path'));

    useEffect(() => {
        if (label) {
            window.scrollTo(0, 0);
        }
    }, [ label ]);

    if (parentPath === null) {
        return <Redirect to="/home" />;
    }

    return (
        <PageLayout>
            <GalleryContainer
                label={label}
                parentPath={parentPath}
                redirectOnErrorComponent={() => <Redirect to="/home" />}
                handleClick={path => history.push(`picture?path=${path}`)}
                children={Gallery}
            />
        </PageLayout>
    );
};

export default PicturePage;