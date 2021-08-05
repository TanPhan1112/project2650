import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation, withTranslation, WithTranslation, Trans } from 'react-i18next';

function About() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div id="wrapper">
            <div className="px-3 py-2 mb-3">
                    <div className="container d-flex flex-wrap justify-content-end">
                        <div className="dropdown">
                            <a className="btn btn-primary dropdown-toggle me-md-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('language')}
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item" onClick={() => changeLanguage('en')} to="/About/en">English</Link></li>
                                <li><Link className="dropdown-item" onClick={() => changeLanguage('vi')} to="/About/vi">Vietnamese</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <main className="text-center">
                <h2>{t('about.title')}</h2>
                <p>
                    {t('about.description')}<br></br>
                    minhtan111293@gmail.com<br></br>
                    hoangnamngx882@gmail.com<br></br>
                    &#9742; +7783024285<br></br>
                    &#9742; +6044413896</p>
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

export default About;