import React from 'react';

// import Spinner from '../assets/spinner.gif';
// import SpinnerDarkMode from '../assets/spinner-darkmode.gif';

export default function FullPageLoading() {
    return (<div style={{position: 'relative', width: "100hw", height: "100vh"}}>
            <h1>loading</h1>
            {/* <img alt="loading..." style={{display: 'block', position: 'absolute', left: "50%", top: "50%", transform: "translate(-50%, -50%)"}} src={localStorage.getItem('colorMode') == 'dark' ? SpinnerDarkMode : Spinner}></img> */}
        </div>)
}