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
            <div className="px-3 py-2 mb-3">
                <div className="container d-grid gap-2 d-md-flex justify-content-md-end">
                    {/* <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#live-chat">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                        </svg>
                    </button> */}

                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                        </svg>
                    </button>
                    <div className="dropdown">
                        <a className="btn btn-primary dropdown-toggle me-md-2" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            {t('language')}
                        </a>

                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><Link className="dropdown-item" onClick={() => changeLanguage('en')} to="/en">English</Link></li>
                            <li><Link className="dropdown-item" onClick={() => changeLanguage('vi')} to="/vi">Vietnamese</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* chat modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="liveChatLabel">Live chat</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="chatArea">
                            <ul className="messages list-group">
                                <li className="list-group-item">
                                    <div className="row">
                                    <div className="col-2 mx-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-person mt-2" viewBox="0 0 16 16">
                                            <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                            <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                    <div className="col">
                                        Welcome to our chat support, leave a message and we will be with you soon!
                                    </div>
                                    </div>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter your message.." aria-label="messageInput" aria-describedby="button-addon2" />
                            <button type="submit" className="btn btn-outline-primary" id="button-addon2">Send</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            

            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="container col-md-6">
                    <h1 className="display-3">{t('home.title')}</h1>
                    <p>{t('home.description')}</p>
                </div>
            </div>
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

                {/* <p className="position-absolute bottom-20 end-0">
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                            <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                            <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
                        </svg>
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </div> */}
            </main>
            <Footer />
        </div>
    );
}

export default Home;