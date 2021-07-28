import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <html lang="en">
            <body>
                <div id="wrapper">
                    <main>
                        <h1>Contact Us</h1>
                        <form id="contactForm" method="post" action="http://mylinux.langara.bc.ca/~hhamavan/demo.php">
                            <label htmlFor="myName">Name:</label>
                            <input type="text" name="myName" id="myName" />
                            <label htmlFor="myEmail">E-mail:</label>
                            <input type="text" name="myEmail" id="myEmail" />
                            <label htmlFor="myComments">Comments:</label>
                            <textarea name="myComments" id="myComments" rows={2} cols={20}></textarea>
                            <input id="mySubmit" type="submit" value="Submit" />
                        </form>
                    </main>
                    <footer className="footer mt-auto py-3 bg-light">
                        <div className="container">
                            <h3 className="text-center">Join Our Newsletter</h3>
                            <h6 className="text-center">Sign up to all the latest offers, news and tips!</h6>

                            
                                <form method="get">
                                    <div className="row justify-content-center">
                                    <input type="email" className="col-4" name="email" id="email" placeholder="Email address" />
                                    <input className="col-2 signup btn btn-primary" type="submit" value="Sign me up!" /> 
                                    <input className="col-1 signup btn btn-primary" type="reset"/>
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
            </body>
        </html>
    );
}

export default Contact;