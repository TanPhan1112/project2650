import React from 'react';

function Contact() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header bg-dark text-white">
                            Contact form
                                    </div>

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="contact-name" className="mb-1">Name</label>
                                    <input type="text" className="form-control" id="contact-name" placeholder="Enter name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="contact-email" className="mb-1">Email address</label>
                                    <input type="email" className="form-control" id="contact-email" placeholder="Enter email" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="contact-message" className="mb-1">Message</label>
                                    <textarea className="form-control" id="contact-message" rows={6} required></textarea>
                                </div>
                                <div className="mx-auto">
                                    <button type="submit" className="btn btn-primary text-right">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card bg-light mb-3">
                        <div className="card-header bg-dark text-white">
                            Contact info
                                    </div>
                        <div className="card-body">
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt me-2" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                </svg>
                                Address
                                        </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                </svg>
                                Email
                                        </p>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headphones me-2" viewBox="0 0 16 16">
                                    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
                                </svg>
                                Phone
                                        </p>
                        </div>
                    </div>
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
        </div>
    );
}

export default Contact;