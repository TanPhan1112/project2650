import React, { useState, useEffect, FormEvent } from 'react';
import './Account.css';
import client from './feathers';
import { Redirect } from 'react-router';
import { useHistory } from "react-router-dom";

interface Signup {
    data: any;
    // add the required properties here
    firstName: string,
    lastName: string,
    email: string,
    password: string
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

    const handleSubmit1 = (e: FormEvent) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLFormElement;
        if (element.checkValidity()) {
            element.classList.remove('was-validated');
            signupsService
                .create({ firstName, lastName, email, password })
                .then((signup: Signup) => {
                    // successfully created account
                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPassword("");
                    setErrorMessage("Successfully created account");
                    setErrorClass("form-control is-valid");
                })
                .catch((err: any) => {
                    // failed to create account
                    setErrorMessage(err.message);
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
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
                    // successfully created account
                    // console.log(signup);
                    // console.log(signup.data);
                    // console.log(signup.data[0]);
                    // console.log(signup.data[0].email);
                    setEmail1("");
                    setPassword1("");
                    if (signup.data[0].email !== undefined) {
                        if (signup.data[0].email === "pctechAdmin@pctech.com") {
                            setErrorMessage("Admin found! Redirecting to admin page ...");
                            setErrorClass("form-control is-valid");
                            history.push("/Admin");
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
        <html lang="en">
            <body>
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
                        <form onSubmit={handleSubmit1} noValidate>
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
                            <button className="mySubmit" type="submit">Signup</button>
                            <div className={errorClass}>
                                {errorMessage}
                            </div>
                        </form>
                    </main>
                    <footer>
                        <h1>Join Our Newsletter</h1>
                        <h4>Sign up to all the latest offers, news and tips!</h4>
                        <form method="get">
                            <input type="email" name="email" id="email" placeholder="Email address" />
                            <br></br>
                            <br></br>
                            <input className="signup" type="submit" value="Sign Me Up!" /> <input className="signup" type="reset" />
                        </form>
                        <a href="../Home/index.html"><img src="./logo.png" width="50px" height="50px" alt="logo" /></a>
                        <h5>Copyright &copy; 2021 pctech.com</h5>
                        <h6><i>Created by Phan, Duc Minh Tan and Nguyen, Hoang Nam</i></h6>
                    </footer>
                </div>
            </body>
        </html>
    );
}

export default Account;