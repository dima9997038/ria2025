import React from 'react';
import NaviBar from "./NaviBar";
import FooterComponent from "./FooterComponent";
import DocumentPage from "./DocumentPage";

function Document({email,setEmail}) {
    return (
        <>
            <NaviBar/>
            <main>
                <DocumentPage/>
            </main>
            <FooterComponent  setEmail={setEmail}/>
        </>
    );
}

export default Document;