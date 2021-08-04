import React, { useState, useEffect, FormEvent } from 'react';
import './Account.css';
import client from './feathers';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';

interface Signup {
    data: any;
    // add the required properties here
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    token: any
};

type SignuptFunction = (g: Signup) => void;

interface AllSignupFuntions {
    addAccount: SignuptFunction
};

let signupFuncs: AllSignupFuntions = {
    addAccount: (c: Signup) => { }
};

const signupsService = client.service('signups');

signupsService.on('created', (newAccount: Signup) => {
    signupFuncs.addAccount(newAccount);
});

function Account() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [email1, setEmail1] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [allAccounts, setAllAccounts] = useState<Array<Signup>>([]);
    const [errorMessage, setErrorMessage] = useState("Forms are required");
    const [errorClass, setErrorClass] = useState("form-control");
    const history = useHistory();

    useEffect(() => {
        function addAccountX(newAccount: Signup) {
            setAllAccounts([...allAccounts, newAccount]);
        }
        signupFuncs.addAccount = addAccountX;
    });

    function onClick(e: any) {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LflFEsbAAAAAFwhLcrLIOOoA4DGVtEMTnP8LTtk', { action: 'submit' }).then(function (token: any) {
                // Add your logic to submit to your backend server here.
                handleSubmit1(e, token);
            });
        });
    }

    const handleSubmit1 = async (e: any, token: string) => {
        e.preventDefault();
        signupsService
            .create({ firstName, lastName, email, password, token })
            .then((signup: Signup) => {
                // successfully created account
                setFirstName("");
                setLastName("");
                setEmail("");
                setPassword("");
                setErrorMessage("Successfully created account");
                setErrorClass("form-control is-valid");
                ReactGA.event({
                    category: "Guest",
                    action: "Add",
                });
            })
            .catch((err: any) => {
                // failed to create account
                setErrorMessage(err.message);
                setErrorClass("form-control is-invalid");
            });
    }

    const handleSubmit2 = async (e: FormEvent) => {
        e.preventDefault();
        const email = email1;
        const password = password1;
        const element = e.currentTarget as HTMLFormElement;
        if (element.checkValidity()) {
            element.classList.remove('was-validated');
            const signups = await signupsService
                .find({
                    query: {
                        email: email,
                        password: password
                    }
                })
                .then((signup: Signup) => {
                    setEmail1("");
                    setPassword1("");
                    ReactGA.event({
                        category: "Guest",
                        action: "Login",
                    });
                    if (signup.data[0].email !== undefined) {
                        if (signup.data[0].email === "pctechAdmin@pctech.com") {
                            setErrorMessage("Admin found! Redirecting to admin page ...");
                            setErrorClass("form-control is-valid");
                            history.push("/Admin");
                            ReactGA.event({
                                category: "Guest",
                                action: "Login",
                            });
                        } else {
                            setErrorMessage("Account found! Welcome!!!");
                            setErrorClass("form-control is-valid");
                        }
                    }
                    else if (signup.data[0].length() === 0) {
                        setErrorMessage("Account not found! or incorrect email/password!");
                        setErrorClass("form-control is-invalid");
                    }
                })
                .catch((err: any) => {
                    // failed to create account
                    setErrorMessage("Account not found! or incorrect email/password!");
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
    }

    return (
        <div id="wrapper">
            <main>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit2} noValidate>
                    <label htmlFor="myEmail">E-mail:</label>
                    <input type="text" name="myEmail" className="myEmail form-control" value={email1} required onChange={e => setEmail1(e.target.value)} />
                    <div className="invalid-feedback">Email is required.</div>
                    <label htmlFor="passWord">Password:</label>
                    <input type="password" name="passWord" className="passWord form-control" value={password1} required onChange={e => setPassword1(e.target.value)} />
                    <div className="invalid-feedback">Password is required.</div>
                    <button className="mySubmit" type="submit">Log in</button>
                </form>
                <h1>Create an account</h1>
                <form onSubmit={e => onClick(e)} noValidate>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" name="firstName" className="firstName form-control" value={firstName} required onChange={e => setFirstName(e.target.value)} />
                    <div className="invalid-feedback">First name is required.</div>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" name="lastName" className="lastName form-control" value={lastName} required onChange={e => setLastName(e.target.value)} />
                    <div className="invalid-feedback">Last name is required.</div>
                    <label htmlFor="myEmail">E-mail:</label>
                    <input type="email" name="myEmail" className="myEmail form-control" value={email} required onChange={e => setEmail(e.target.value)} />
                    <div className="invalid-feedback">Email is required.</div>
                    <label htmlFor="passWord">Password:</label>
                    <input type="password" name="passWord" className="passWord form-control" value={password} required onChange={e => setPassword(e.target.value)} />
                    <div className="invalid-feedback">Password is required.</div>
                    <button className="btn btn-primary btn-lg btn-block g-recaptcha">Signup</button>
                    <div className={errorClass}>
                        {errorMessage}
                    </div>
                </form>
            </main>

            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <h3 className="text-center">Join Our Newsletter</h3>
                    <h6 className="text-center">Sign up to all the latest offers, news and tips!</h6>


                    <form method="get">
                        <div className="row justify-content-center">
                            <input type="email" className="col-4" name="email" id="email" placeholder="Email address" />
                            <input className="col-2 signup btn btn-primary" type="submit" value="Sign me up!" />
                            <input className="col-1 signup btn btn-primary" type="reset" />
                        </div>
                    </form>


                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>Copyright &copy; 2021 pctech.com</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Created by <cite title="authors">Phan, Duc Minh Tan and Nguyen, Hoang Nam</cite>
                        </figcaption>
                    </figure>
                </div>
            </footer>
        </div>
    );
}

export default Account;