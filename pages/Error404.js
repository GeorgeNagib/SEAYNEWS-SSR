import React from 'react';

// Importing components
import Header from '../layout/header';

export default function Error404() {
    return (
        <>
        <Header></Header>
        <div className="container" style={{width: "100hw",
            height: "80vh"}}>
            <div className="error" style={{color: localStorage.colorMod == 'dark' ? "white" : 'black'}}>
                <h1>404</h1>
                <h4>هذة الصفحة غير موجودة</h4>
            </div>
        </div>
        </> 
    )
}