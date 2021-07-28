import React, { CSSProperties } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    //  Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Account from './Account';

const myStyles: CSSProperties = {
    borderRight: 'none'
}

function App() {
    return (
        <Router>
            <head>
                <title>PC Tech</title>
                <meta charSet="utf-8" />
                {/* <link rel="stylesheet" href="./main.css" /> */}
                <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet" />
                <meta name="viewport" content="width=device-width, initital-scale=1.0" />
                <style>
                </style>
            </head>
            <body>
                <div id="wrapper">
                    <header>
                        {/* https://www.pinclipart.com/pindetail/ihRTJJh_computer-pc-clipart-vector-computer-pc-logo-png/ */}
                        <a href="index.html"><img src="./logo.png" width="100px" height="100px" alt="logo" /></a>
                        <h1>PC Tech</h1>
                    </header>
                    <div className="search">
                        <form method="get">
                            <input type="text" placeholder="Search products..." name="search" />
                        </form>
                        <a href="https://pixabay.com/illustrations/design-icon-modern-internet-sign-2381160/"><img className="basket" src="basket.png" width="50px" height="50px" alt="basket" /></a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products-list">Products</a></li>
                            <li><a href="/About">About</a></li>
                            <li><a style={myStyles} href="/Contact">Contact Us</a></li>
                            <li className="signin"><a href="/Account">Sign in/Register</a></li>
                        </ul>
                    </nav>
                </div>
            </body>
            <Switch>
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
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router >
    );
}

export default App;
