import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/react-pro">
                    <Switch>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Route>
            </Router>
        );
    }
}
