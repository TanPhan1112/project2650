import React, { ReactNode, Suspense  } from 'react';
import { useState, FormEvent } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
// import './App.css';
import logo from './logo.svg';
import { useTranslation, withTranslation, WithTranslation, Trans } from 'react-i18next';

import {
    // BrowserRouter as Router,
    Router,
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

interface Product {
    _id: ReactNode;
    data: any,
    // add the required properties here
    name: string,
    quantity: string,
    price: number,
    brand: string,
    id: number
};

const productsService = client.service('products');

// initialize ReactGA
const trackingId = "UA-204034027-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// set up history
const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


function Main() {
    const { t, i18n } = useTranslation();
    const [search, setSearch] = useState("");
    const [errorMessage, setErrorMessage] = useState("Searching result(s) ...");
    const [allProducts, setAllProducts] = useState<Array<Product>>([]);
    const [errorClass, setErrorClass] = useState("form-control");
    const [found, setFound] = useState(false);

    const productRows = allProducts.map((product: Product) =>
        <tr key={product.id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
        </tr>
    );

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
                .then((productPage: Paginated<Product>) => {
                    setSearch("");
                    setAllProducts(productPage.data);
                    ReactGA.event({
                        category: "Guest",
                        action: "Search",
                    });
                    if (productPage.data[0].name !== undefined) {
                        setFound(true);
                        setAllProducts(productPage.data);
                        setErrorMessage("Product found!");
                        setErrorClass("form-control is-valid");
                    }
                    else {
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

    if (found) {
        return (
            <Router history={history}>
                <head>
                    <title>PC Tech</title>
                    <meta charSet="utf-8" />
                    <style>
                    </style>
                </head>
                <body>
                    <header>
                        <div className="px-3 py-2 bg-dark text-white">
                            <div className="container">
                                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 text-white text-decoration-none me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cpu-fill d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
                                        </svg>
                                    </a>

                                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" onSubmit={handleSearch} noValidate>
                                        <input type="search" className="form-control" placeholder={t('search')} aria-label="Search" name="search" value={search} required onChange={e => setSearch(e.target.value)} />
                                    </form>

                                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                        <li>
                                            <a href="/" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                                </svg>
                                                {t('nav1')}</a>
                                        </li>
                                        <li>
                                            <a href="/About" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                                {t('nav2')}</a>
                                        </li>
                                        <li>
                                            <a href="/products-list" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shop-window d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>
                                                {t('nav3')}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/Contact" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-outbound d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                {t('nav4')}</a>
                                        </li>
                                        <li>
                                            <a href="/Account" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                </svg>
                                            {t('account')}</a>
                                        </li>                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className={errorClass}>
                        {errorMessage}
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">quantity</th>
                                <th scope="col">price</th>
                                <th scope="col">brand</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productRows}
                        </tbody>
                    </table>
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
                    <Route path="/en">
                        <Home />
                    </Route>
                    <Route path="/vi">
                        <Home />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router >
        );
    }
    else {
        return (
            <Router history={history}>
                <head>
                    <title>PC Tech</title>
                    <meta charSet="utf-8" />
                    <style>
                    </style>
                </head>
                <body>
                    <header>
                        <div className="px-3 py-2 bg-dark text-white">
                            <div className="container">
                                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-3 text-white text-decoration-none">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cpu-fill d-block mx-auto mb-1" viewBox="0 0 16 16">
                                            <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                            <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
                                        </svg>
                                    </a>

                                    <form className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" onSubmit={handleSearch} noValidate>
                                        <input type="search" className="form-control" placeholder={t('search')} aria-label="Search" name="search" value={search} required onChange={e => setSearch(e.target.value)} />
                                    </form>

                                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                                        <li>
                                            <a href="/" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-house-door d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                                                </svg>
                                                Home</a>
                                        </li>
                                        <li>
                                            <a href="/About" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-info-circle d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                </svg>
                                                About</a>
                                        </li>
                                        <li>
                                            <a href="/products-list" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-shop-window d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                                                </svg>
                                                Products</a>
                                        </li>
                                        <li>
                                            <a href="/Contact" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-telephone-outbound d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                Contact us</a>
                                        </li>
                                        <li>
                                            <a href="/Account" className="nav-link text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle d-block mx-auto mb-1" viewBox="0 0 16 16">
                                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                                                </svg>
                                            {t('account')}</a>
                                        </li>                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </header>
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
}

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);



function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Main />
    </Suspense>
  );
}


export default App;
