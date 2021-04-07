import React from "react";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="container container--pall flex">
                <div className="footer__logo"></div>
                <div className="footer__links flex">
                    <a href="#">FEATURES</a>
                    <a href="#">PRICING</a>
                    <a href="#">CONTACT</a>
                </div>
                <div className="footer__social">
                    <a href="#" className="facebook"></a>
                    <a href="#" className="twitter"></a>
                </div>
            </div>
            <p className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Barzin Assa</a>.
            </p>
        </footer>
    );
};

export default Footer;