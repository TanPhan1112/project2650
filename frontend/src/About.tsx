import React from 'react';
import Header from './Header';
import { useTranslation } from 'react-i18next';
import Footer from './Footer';

function About() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <div id="wrapper">
                <main>
                    <h2>{t('about.h2')}</h2>
                    <p>
                        {t('about.contact')}<br></br>
                        minhtan111293@gmail.com<br></br>
                        hoangnamngx882@gmail.com<br></br>
                        &#9742; +7783024285<br></br>
                        &#9742; +6044413896</p>
                </main>
            </div>
            <Footer />
        </div>
    );
}

export default About;