import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AsyncLoader } from './components/index';

import Loading from './components/Loading';

const Home = React.lazy(() => import('./pages/home'));

export default class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/react-pro">
                    <Switch>
                        <Route path="/">
                            <AsyncLoader>
                                <Home />
                            </AsyncLoader>
                        </Route>
                    </Switch>
                </Route>
            </Router>
        );
    }
}
