import React from 'react';

function Home() {
    return (
        <html lang="en">
            <body>
                    <main className="container">
                        <hr></hr>
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Date</div>
                                        <p className="card-text mb-auto">Add post content here</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Date</div>
                                        <p className="mb-auto">Add post content here.</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Date</div>
                                        <p className="card-text mb-auto">Add post content here</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <h3 className="mb-0">Featured post</h3>
                                        <div className="mb-1 text-muted">Date</div>
                                        <p className="mb-auto">Add post content here.</p>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    
                    <hr></hr>
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
