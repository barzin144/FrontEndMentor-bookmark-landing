import React from "react";

const ContactUs = () => {
    return (
        <section className="contactUs">
            <div className="container container--pall">
                <div className="contactUs__text flex flex-ai-c flex-d-c">
                    <a>
                        35,000+ already joined
                    </a>
                    <h1>
                        Stay up-to-date with what we’re doing
                    </h1>
                </div>
                <div className="contactUs__form">
                    <form className="flex flex-jc-c">
                        <div className="inputContainer">
                            <input className="validateInput" type="email" placeholder="Enter your email address" />
                            <div className="requirements">
                                <a>Whoops, make sure it's an email</a>
                            </div>
                        </div>
                        <button className="button red-btn">Contact Us</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;