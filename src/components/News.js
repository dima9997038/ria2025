import React from 'react';
import NaviBar from "./NaviBar";
import FooterComponent from "./FooterComponent";
import NewsPage from "./NewsPage";

function News({email,setEmail}) {
    return (
        <>
            <NaviBar/>
            <main>
                <NewsPage/>
            </main>
            <FooterComponent setEmail={setEmail}/>
        </>
    );
}

export default News;