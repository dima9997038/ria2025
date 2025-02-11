import React from 'react';
import FooterComponent from "./FooterComponent";
import NaviBar from "./NaviBar";
import AboutPage from "./AboutPage";

function About({email,setEmail}) {
    return (
        <>
            <NaviBar/>
            <main>
                <AboutPage/>
            </main>
            <FooterComponent  setEmail={setEmail}/>
        </>
    );
}

export default About;