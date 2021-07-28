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
                    <footer>
                        <h1>Join Our Newsletter</h1>
                        <h4>Sign up to all the latest offers, news and tips!</h4>
                        <form method="get">
                            <input type="email" name="email" id="email" placeholder="Email address" />
                            <br></br>
                            <br></br>
                            <input className="signup" type="submit" value="Sign Me Up!" /> <input className="signup" type="reset" />
                        </form>
                        <a href="../Home/index.html"><img src="./logo.png" width="50px" height="50px" alt="logo" /></a>
                        <h5>Copyright &copy; 2021 pctech.com</h5>
                        <h6><i>Created by Phan, Duc Minh Tan and Nguyen, Hoang Nam</i></h6>
                    </footer>
                </div>
            </body>
        </html>
    );
}

export default Contact;