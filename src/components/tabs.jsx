import React from "react";

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
                <div className="tabs__contentImage"></div>
                <div className="tabs__contentText">
                    <h1>
                        Bookmark in one click
                   </h1>
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop interface
                        gives you complete control over how you manage your favourite sites.
                    </p>
                </div>
            </div>}
        </section>
    );
};

export default Tabs;