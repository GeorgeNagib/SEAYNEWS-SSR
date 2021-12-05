import React from 'react';

// Importing components
import Header from '../layout/header';

export default function Error404() {
    return (
        <>
        <Header></Header>
        <div className="container" style={{width: "100hw",
            height: "80vh"}}>
            <div className="error" style={{color: localStorage.colorMode == 'dark' ? "white" : 'black'}}>
                <h1>500</h1>
                <h4>حدث عطل ما, الرجاء المحاولة مرة اخري</h4>
            </div>
        </div>
        </> 
    )
}