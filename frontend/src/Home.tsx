import React from 'react';

function Home() {
    return (
        <html lang="en">
            <body>
                <div id="wrapper">
                    <main>
                        <h2>Display announcements/posts/promotions!</h2>
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

export default Home;
