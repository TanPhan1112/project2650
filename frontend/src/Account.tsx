import React from 'react';
import './Account.css';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';

function Account() {
    return (
        <html lang="en">
            <body>
                <div id="wrapper">
                    <main>
                        <h1>Log In</h1>
                        <form id="contactForm" method="post">
                            <label htmlFor="myEmail">E-mail:</label>
                            <input type="text" name="myEmail" className="myEmail" id="email" />
                            <label htmlFor="passWord">Password:</label>
                            <input type="password" name="passWord" className="passWord" id="pass" />
                            <input className="mySubmit" type="submit" value="Log In" />
                        </form>
                        <h1>Create an account</h1>
                        <form className="needs-validation" noValidate>
                            <label htmlFor="firstName">First name:</label>
                            <input type="text" name="firstName" className="firstName" id="firstName" />
                            <label htmlFor="lastName">Last name:</label>
                            <input type="text" name="lastName" className="lastName" id="lastName" />
                            <label htmlFor="myEmail">E-mail:</label>
                            <input type="text" name="myEmail" className="myEmail" id="Email" />
                            <label htmlFor="passWord">Password:</label>
                            <input type="password" name="passWord" className="passWord" id="passWord" />
                            <input className="mySubmit" type="submit" value="Sign Up" />
                        </form>
                    </main>
                    <footer>
                        <h1>Join Our Newsletter</h1>
                        <h4>Sign up to all the latest offers, news and tips!</h4>
                        <form method="get">
                            <input type="text" name="email" id="email" placeholder="Email address" />
                            <br></br>
                            <br></br>
                            <input className="signup" type="submit" value="Sign Me Up!" /> <input className="signup" type="reset" />
                        </form>
                        <a href="../Home/index.html"><img src="./logo.png" width="50px" height="50px" alt="logo" /></a>
                        <h5>Copyright &copy; 2021 pctech.com</h5>
                        <h6><i>Created by Phan, Duc Minh Tan and Nguyen, Hoang Nam</i></h6>
                    </footer>
                </div>
                <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/core-js/2.1.4/core.min.js"></script>
                <script src="//unpkg.com/@feathersjs/client@^4.3.0/dist/feathers.js"></script>
                <script src="form-signup.js"></script>
            </body>
        </html>
    );
}

export default Account;