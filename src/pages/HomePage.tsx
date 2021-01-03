import { useHistory } from 'react-router-dom';
import Tree from 'components/tree/Tree';
import TreeContainer from 'components/containers/TreeContainer';
import TransformTree from 'components/layouts/TransformTree';


const HomePage = () => {
    const history = useHistory();

    return (
        <TreeContainer
            handleClick={path => history.push(`/picture?path=${path}`)}
            children={props => (
                <TransformTree>
                    <Tree {...props} />
                </TransformTree>
            )}
        />
    );
};

export default HomePage;