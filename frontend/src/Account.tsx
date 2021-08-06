import React, { useState, useEffect, FormEvent } from 'react';
import './Account.css';
import client from './feathers';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [email1, setEmail1] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [allAccounts, setAllAccounts] = useState<Array<Signup>>([]);
    const [errorMessage, setErrorMessage] = useState(t('account.formRequired'));
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
                setErrorMessage(t('account.success'));
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
                            setErrorMessage(t('account.successLogin'));
                            setErrorClass("form-control is-valid");
                            history.push("/Admin");
                            ReactGA.event({
                                category: "Guest",
                                action: "Login",
                            });
                        } else {
                            setErrorMessage(t('account.successLogin'));
                            setErrorClass("form-control is-valid");
                        }
                    }
                    else if (signup.data[0].length() === 0) {
                        setErrorMessage(t('account.error'));
                        setErrorClass("form-control is-invalid");
                    }
                })
                .catch((err: any) => {
                    // failed to create account
                    setErrorMessage(t('account.error'));
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
    }

    return (
        <div>
            <Header />
            <div id="wrapper">
                <main>
                    <h1>{t('account.title1')}</h1>

                    <form onSubmit={handleSubmit2} noValidate>
                        <label htmlFor="myEmail">{t('account.loginEmail')}</label>
                        <input type="text" name="myEmail" className="myEmail form-control" value={email1} required onChange={e => setEmail1(e.target.value)} />
                        <div className="invalid-feedback">{t('account.emailRequired')}</div>

                        <label htmlFor="passWord">{t('account.password')}</label>
                        <input type="password" name="passWord" className="passWord form-control" value={password1} required onChange={e => setPassword1(e.target.value)} />
                        <div className="invalid-feedback">{t('account.pwdRequired')}</div>

                        <button className="mySubmit" type="submit">{t('account.loginBtn')}</button>
                    </form>

                    <h1>{t('account.title2')}</h1>

                    <form onSubmit={e => onClick(e)} noValidate>
                        <label htmlFor="firstName">{t('account.firstName')}</label>
                        <input type="text" name="firstName" className="firstName form-control" value={firstName} required onChange={e => setFirstName(e.target.value)} />
                        <div className="invalid-feedback">{t('account.fnRequired')}</div>

                        <label htmlFor="lastName">{t('account.lastName')}</label>
                        <input type="text" name="lastName" className="lastName form-control" value={lastName} required onChange={e => setLastName(e.target.value)} />
                        <div className="invalid-feedback">{t('account.lnRequired')}</div>

                        <label htmlFor="myEmail">{t('account.loginEmail')}</label>
                        <input type="email" name="myEmail" className="myEmail form-control" value={email} required onChange={e => setEmail(e.target.value)} />
                        <div className="invalid-feedback">{t('account.emailRequired')}</div>

                        <label htmlFor="passWord">{t('account.password')}</label>
                        <input type="password" name="passWord" className="passWord form-control" value={password} required onChange={e => setPassword(e.target.value)} />
                        <div className="invalid-feedback">{t('account.pwdRequired')}</div>

                        <button className="btn btn-primary btn-lg btn-block g-recaptcha">{t('account.signUp')}</button>

                        <div className={errorClass}>
                            {errorMessage}
                        </div>
                    </form>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default Account;