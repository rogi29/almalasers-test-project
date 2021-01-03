import { HashRouter, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';
import HomePage from 'pages/HomePage';
import PicturePage from 'pages/PicturePage';

const swrConfig = {
    revalidateOnFocus: false
};

const App = () => (
    <SWRConfig value={swrConfig}>
        {/* BrowserRouter was replaced with HashRouter to work with Github Pages */}
        <HashRouter>
            <div className="App">
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => <Redirect to="/home" />}
                    />
                    <Route exact path="/picture">
                        <PicturePage />
                    </Route>
                    <Route exact path="/home">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </HashRouter>
    </SWRConfig>
);

export default App;
