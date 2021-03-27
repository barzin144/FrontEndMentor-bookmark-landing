import React from "react";
import firstTabImage from "../images/illustration-features-tab-1";
import secondTabImage from "../images/illustration-features-tab-2";
import thirdTabImage from "../images/illustration-features-tab-3";

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState(1);
    return (
        <section className="tabs">
            <div className="container container--pall flex flex-jc-c">
                <div className={`tabs__title ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
                    <span>
                        Simple Bookmarking
                    </span>
                </div>
                <div className={`tabs__title ${activeTab === 2 ? "active" : ""}`} onClick={() => setActiveTab(2)}>
                    <span>
                        Speedy Searching
                    </span>
                </div>
                <div className={`tabs__title ${activeTab === 3 ? "active" : ""}`} onClick={() => setActiveTab(3)}>
                    <span>
                        Easy Sharing
                    </span>
                </div>
            </div>
            {activeTab === 1 &&
                <div className="container container--pall flex flex-jc-sb">
                    <div className="tabs__contentImage">
                        <div className="tabImage" style={{ backgroundImage: `url(${firstTabImage})` }}></div>
                    </div>
                    <div className="tabs__contentText">
                        <h1>
                            Bookmark in one click
                   </h1>
                        <p>
                            Organize your bookmarks however you like. Our simple drag-and-drop interface
                            gives you complete control over how you manage your favourite sites.
                    </p>
                        <a className="button blue-btn hide-for-mobile">
                            More Info
                    </a>
                    </div>
                </div>}
            {activeTab === 2 &&
                <div className="container container--pall flex flex-jc-sb">
                    <div className="tabs__contentImage">
                        <div className="tabImage tabImageBigger" style={{ backgroundImage: `url(${secondTabImage})` }}></div>
                    </div>
                    <div className="tabs__contentText">
                        <h1>
                            Intelligent search
                   </h1>
                        <p>
                            Our powerful search feature will help you find saved sites in no time at all.
                            No need to trawl through all of your bookmarks.
                    </p>
                        <a className="button blue-btn hide-for-mobile">
                            More Info
                    </a>
                    </div>
                </div>}
            {activeTab === 3 &&
                <div className="container container--pall flex flex-jc-sb">
                    <div className="tabs__contentImage">
                        <div className="tabImage tabImageBigger" style={{ backgroundImage: `url(${thirdTabImage})` }}></div>
                    </div>
                    <div className="tabs__contentText">
                        <h1>
                            Share your bookmarks
                   </h1>
                        <p>
                            Easily share your bookmarks and collections with others. Create a shareable
                            link that you can send at the click of a button.
                    </p>
                        <a className="button blue-btn hide-for-mobile">
                            More Info
                    </a>
                    </div>
                </div>}
        </section>
    );
};

export default Tabs;