import React from 'react';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';

import {
    // BrowserRouter as Router,
    Router,
    Switch,
    Route
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Account from './Account';
import Admin from './Admin';

// initialize ReactGA
const trackingId = "UA-204034027-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId, { testMode: process.env.NODE_ENV === 'test' });

// set up history
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/Admin">
                    <Admin />
                </Route>
                <Route path="/Account">
                    <Account />
                </Route>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/products-list">
                    <Products />
                </Route>
                <Route path={["/home", "/"]}>
                    <Home />
                </Route>
            </Switch>
        </Router >
    );
}

export default App;