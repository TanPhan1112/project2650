import React, { CSSProperties } from 'react';
import { useState, useEffect, FormEvent } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';
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
import Admin from './Admin';

const myStyles: CSSProperties = {
    borderRight: 'none'
}

interface Product {
    data: any;
    // add the required properties here
    name: string,
    quantity: string,
    price: Number,
    brand: string
};

const productsService = client.service('products');

function App() {
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [errorClass, setErrorClass] = useState("form-control");

    const handleSearch = async (e: FormEvent) => {
        e.preventDefault();
        const name = search;
        const element = e.currentTarget as HTMLFormElement;
        if (element.checkValidity()) {
            element.classList.remove('was-validated');
            const products = await productsService
                .find({
                    query: {
                        name: name
                    }
                })
                .then((product: Product) => {
                    setSearch("");
                    if (product.data[0].name !== undefined) {
                        setErrorMessage("Product found! Yeah!!!");
                        setErrorClass("form-control is-valid");
                    }
                    else if (product.data[0].length() === 0) {
                        setErrorMessage("Product not found!");
                        setErrorClass("form-control is-invalid");
                    }
                })
                .catch((err: any) => {
                    // failed to create account
                    setErrorMessage("Product not found!");
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
    }

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
                        <form onSubmit={handleSearch} noValidate>
                            <input type="text" placeholder="Search products..." name="search" value={search} required onChange={e => setSearch(e.target.value)} />
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
                <div className={errorClass}>
                    {errorMessage}
                </div>
            </body>
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
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router >
    );
}

export default App;
