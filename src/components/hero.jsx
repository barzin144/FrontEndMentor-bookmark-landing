import React from "react";

const Hero = () => {
    return (
        <section className="hero">
            <div className="container container--px flex flex-jc-sb">
                <div className="hero__text">
                    <h1>
                        A Simple Bookmark Manager
                    </h1>
                    <p>
                        A clean and simple interface to organize your favourite websites. Open a new
                        browser tab and see your sites load instantly. Try it for free.
                    </p>
                    <div className="hero__button">
                        <a href="#" className="button blue-btn">Get it on Chrome</a>
                        <a href="#" className="button gray-btn">Get it on Firefox</a>
                    </div>
                </div>
                <div className="hero__image"></div>
            </div>
        </section>
    );
};

export default Hero;