import React, {useEffect} from 'react';
import GetStartedComponent from "./GetStartedComponent";

function Email({ email }) {
    useEffect(() => {
        console.log(email)
    });
    return (
        <>
            <GetStartedComponent email={email}/>
        </>
    );
}

export default Email;