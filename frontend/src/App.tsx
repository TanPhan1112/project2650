import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    //  Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Patients from './Patients';

function App() {
    return (
        <Router>
            <main>
                <nav className="navbar navbar-expand navbar-dark bg-dark" aria-label="Second navbar example">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarsExample02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/patients-list">Patients</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <header className="d-flex justify-content-center py-3">
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        </ul>
                    </header>
                </div>
                <Switch>
                    <Route path="/patients-list">
                        <Patients />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
