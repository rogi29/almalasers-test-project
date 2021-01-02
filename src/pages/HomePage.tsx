import { useHistory } from 'react-router-dom';
import Tree from 'components/tree/Tree';
import TreeContainer from 'components/containers/TreeContainer';


const HomePage = () => {
    const history = useHistory();

    return (
        <TreeContainer
            redirect={history.push}
            children={Tree}
        />
    );
};

export default HomePage;