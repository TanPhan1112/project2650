import React from 'react';

function About() {
    return (
        <div id="wrapper">
            <main>
                <h2>Welcome you to visit our website!</h2>
                <p>
                    Contact developers:<br></br>
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