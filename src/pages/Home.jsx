import React from "react";
import ServicesComponent from "../components/ServicesComponent";
import ProjectsComponent from "../components/ProjectsComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import HeroComponent from "../components/HeroComponent";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home({email,setEmail}) {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
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
