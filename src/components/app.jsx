import React from "react";
import Download from "./download";
import FAQ from "./FAQ";
import Feature from "./feature";
import Header from "./header";
import Hero from "./hero";
import Tabs from "./tabs";

const App = () => {
    return (
        <>
            <Header />
            <Hero />
            <Feature />
            <Tabs/>
            <Download/>
            <FAQ/>
        </>
    );
};

export default App;