import React from "react";
import logoImage from "../images/logo-bookmark";
import facebook from "../images/icon-facebook";
import twitter from "../images/icon-twitter";
import logoImageWhite from "../images/logo-bookmark-white";

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const hamburgerButtonClickHandler = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <header className={`header ${mobileMenuOpen ? "open" : ""}`}>
            <div className={`overlay ${mobileMenuOpen ? "open" : ""}`}></div>
            <nav className="container container--pall flex flex-jc-sb flex-ai-c">
                <a href="/" className="header__logo">
                    {!mobileMenuOpen && <img src={logoImage} alt="bookmark" />}
                    {mobileMenuOpen && <img src={logoImageWhite} alt="bookmark" />}
                </a>

                <a onClick={hamburgerButtonClickHandler} href="#" className="header__toggle hide-for-desktop">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className="header__links hide-for-mobile">
                    <a href="#">FEATURES</a>
                    <a href="#">PRICING</a>
                    <a href="#">CONTACT</a>
                    <a href="#" className="button">LOGIN</a>
                </div>
            </nav>
            {mobileMenuOpen && <div className="header__menu container container--py hide-for-desktop">
                <div>
                <div className="divider"></div>
                <a href="#">FEATURES</a>
                <div className="divider"></div>
                <a href="#">PRICING</a>
                <div className="divider"></div>
                <a href="#">CONTACT</a>
                <div className="divider"></div>
                <a href="#" className="button">LOGIN</a>
                </div>
                <div className="social">
                    <a href="#">
                        <img src={facebook} alt="facebook" />
                    </a>
                    <a href="#">
                        <img src={twitter} alt="twitter" />
                    </a>
                </div>
            </div>}
        </header>
    );
};

export default Header;