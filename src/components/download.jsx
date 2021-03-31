import React from "react";
import Card from "./card";
import chromeLogo from "../images/logo-chrome";
import firefoxLogo from "../images/logo-firefox";
import operaLogo from "../images/logo-opera";

const Download = () => {
    return (
        <section className="download">
            <div className="container container--pall">
                <div className="download__text">
                    <h1>
                        Download the extension
                    </h1>
                    <p>
                        We’ve got more browsers in the pipeline. Please do let us know if you’ve
                        got a favourite you’d like us to prioritize.
                    </p>
                </div>
                <div className="download__cardContainer flex flex-jc-sb">
                    <Card image={chromeLogo} title="Add to Chrome" description="Minimum version 62" />
                    <Card image={firefoxLogo} title="Add to Firefox" description="Minimum version 55" />
                    <Card image={operaLogo} title="Add to Opera" description="Minimum version 46" />
                </div>
            </div>
        </section>
    );
};

export default Download;