import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SWRConfig } from 'swr';
import HomePage from 'pages/HomePage';
import PicturePage from 'pages/PicturePage';

const swrConfig = {
    revalidateOnFocus: false
};

const App = () => (
    <SWRConfig value={swrConfig}>
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route path="/picture">
                        <PicturePage />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    </SWRConfig>
);

export default App;
