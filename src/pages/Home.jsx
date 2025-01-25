import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";

function Home({email,setEmail}) {
    return (
        <>
            <HeaderComponent/>
            <HeroComponent/>
            <main id="main">
                <ServicesComponent/>
                <ProjectsComponent/>
            </main>
            <FooterComponent  setEmail={setEmail}/>
        </>
    );
}

export default Home;
