import React, {useEffect} from 'react';
import GetStartedComponent from "./GetStartedComponent";

function Email({ email,setEmail }) {
    useEffect(() => {
        console.log(email)
    });
    return (
        <>
            <GetStartedComponent email={email} setEmail={setEmail}/>
        </>
    );
}

export default Email;