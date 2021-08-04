import React from 'react';

function Home() {
    return (
        <html lang="en">
            <body>
                <main className="container">
                    <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                        <div className="container col-md-6">
                            <h1 className="display-3">Hello, world!</h1>
                            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                        </div>
                    </div>

                    <hr></hr>
                    <div className="row mb-2">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                    <h3 className="mb-0">Dell is cancelling Alienware gaming PC shipments to several US states</h3>
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
                                    <h3 className="mb-0">Looks like your Steam Deck could arrive sooner rather than later</h3>
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
                                    <h3 className="mb-0">Next-gen AMD Ryzen CPUs may not feature extra cores, but there's far more to Zen 4</h3>
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
                                    <h3 className="mb-0">I knew mechanical keyboards were getting cheaper, but $13? That's a steal</h3>
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
                </main>

                <hr></hr>

                <p className="position-absolute bottom-20 end-0">
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
                </div>


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
            </body>
        </html>
    );
}

export default Home;
