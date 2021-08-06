import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import Footer from './Footer';

function Home() {
    const { t } = useTranslation();

    return (
        <div>
            <Header />
            <main className="container">
                <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                    <div className="container col-md-6">
                        <h1 className="display-3">{t('home.h1')}</h1>
                        <p>{t('home.p')}</p>
                    </div>
                </div>

                <hr></hr>
                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">{t('home.h3_1')}</h3>
                                <strong className="mt-1 d-inline-block mb-2 text-primary">Paul Lilly</strong>
                                <div className="mb-2 text-muted">July 27</div>
                                <a href="https://www.pcgamer.com/dell-is-cancelling-alienware-gaming-pc-shipments-to-several-us-states/" className="stretched-link"></a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="images/alienware.jpg" width="200" height="250" className="img-thumbnail" alt="alienware icon"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">{t('home.h3_2')}</h3>
                                <strong className="mt-1 d-inline-block mb-2 text-primary">Dave James</strong>
                                <div className="mb-2 text-muted">July 22</div>
                                <a href="https://www.pcgamer.com/steam-deck-availability-sooner-than-expected/" className="stretched-link"></a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="images/steam-deck.jpg" width="200" height="250" className="img-thumbnail" alt="alienware icon"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">{t('home.h3_3')}</h3>
                                <strong className="mt-1 d-inline-block mb-2 text-primary">Jacob Ridley </strong>
                                <div className="mb-1 text-muted">July 14</div>
                                <a href="https://www.pcgamer.com/amd-zen-4-core-count/" className="stretched-link"></a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="images/amd.jpg" width="200" height="250" className="img-thumbnail" alt="alienware icon"></img>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h3 className="mb-0">{t('home.h3_4')}</h3>
                                <strong className="mt-1 d-inline-block mb-2 text-primary">Paul Lilly</strong>
                                <div className="mb-1 text-muted">June 29</div>
                                <a href="https://www.pcgamer.com/i-knew-mechanical-keyboards-were-getting-cheaper-but-dollar13-thats-a-steal/" className="stretched-link"></a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <img src="images/keyboard.jpg" width="200" height="250" className="img-thumbnail" alt="alienware icon"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </main>
            <Footer />
        </div>
    );
}

export default Home;