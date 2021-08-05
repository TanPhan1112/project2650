import React, { useState, useEffect, FormEvent } from 'react';
import './Account.css';
import client from './feathers';
import { useHistory } from "react-router-dom";
import ReactGA from 'react-ga';
import { Link } from "react-router-dom";
import { useTranslation, withTranslation, WithTranslation, Trans } from 'react-i18next';

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

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

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
                <div className="px-3 py-2 mb-3">
                    <div className="container d-flex flex-wrap justify-content-end">
                        <div className="dropdown">
                            <a className="btn btn-primary dropdown-toggle me-md-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('language')}
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" onClick={() => changeLanguage('en')} to="/Account/en">English</Link></li>
                                <li><Link className="dropdown-item" onClick={() => changeLanguage('vi')} to="/Account/vi">Vietnamese</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h1>{t('account.title')}</h1>
                <form onSubmit={handleSubmit2} noValidate>
                    <label htmlFor="myEmail">{t('account.email')}</label>
                    <input type="text" name="myEmail" className="myEmail form-control" value={email1} required onChange={e => setEmail1(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.email')}</div>
                    <label htmlFor="passWord">{t('account.pw')}</label>
                    <input type="password" name="passWord" className="passWord form-control" value={password1} required onChange={e => setPassword1(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.pw')}</div>
                    <button className="mySubmit" type="submit">{t('account.title')}</button>
                </form>
                <h1>{t('account.title2')}</h1>
                <form onSubmit={e => onClick(e)} noValidate>
                    <label htmlFor="firstName">{t('account.fn')}</label>
                    <input type="text" name="firstName" className="firstName form-control" value={firstName} required onChange={e => setFirstName(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.fn')}</div>
                    <label htmlFor="lastName">{t('account.ln')}</label>
                    <input type="text" name="lastName" className="lastName form-control" value={lastName} required onChange={e => setLastName(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.ln')}</div>
                    <label htmlFor="myEmail">{t('account.email')}</label>
                    <input type="email" name="myEmail" className="myEmail form-control" value={email} required onChange={e => setEmail(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.email')}</div>
                    <label htmlFor="passWord">{t('account.pw')}</label>
                    <input type="password" name="passWord" className="passWord form-control" value={password} required onChange={e => setPassword(e.target.value)} />
                    <div className="invalid-feedback">{t('account.invalid.pw')}</div>
                    <button className="btn btn-primary btn-lg btn-block g-recaptcha">{t('account.title2')}</button>
                    <div className={errorClass}>
                        {errorMessage}
                    </div>
                </form>
            </main>

            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <h3 className="text-center">{t('footer.title')}</h3>
                    <h6 className="text-center">{t('footer.description')}</h6>


                    <form method="get">
                        <div className="row justify-content-center">
                            <input type="email" className="col-4" name="email" id="email" placeholder={t('footer.email')} />
                            <input className="col-2 signup btn btn-primary" type="submit" placeholder={t('footer.signup')} />
                            <input className="col-1 signup btn btn-danger" type="reset" placeholder={t('footer.reset')}/>
                        </div>
                    </form>


                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>{t('footer.copyright')} &copy; 2021 pctech.com</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {t('footer.authors')} <cite title="authors">Phan, Duc Minh Tan and Nguyen, Hoang Nam</cite>
                        </figcaption>
                    </figure>
                </div>
            </footer>
        </div>
    );
}

export default Account;