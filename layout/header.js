import React, {useRef, useState} from 'react';
import { useRouter } from 'next/router'


// import Logo from '../assets/logo.jpg';


export default function Header({setSearchLimit}) {
    
    if(typeof window !== 'undefined') {
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);
    }
        
    const history = useRouter();
    
    // Search handeling
    const searchQueryRef = useRef();
    const mobileSearchQueryRef = useRef();

    const [colorMode, setColorMode] = useState(localStorage.colorMode || 'light');

    const handleSearch = function(e) {
        e.preventDefault();
        var query =(searchQueryRef.current.value).trim();
        if(query.length > 0) {
            history.push(`/search/${query}`);
            if(setSearchLimit) {
                setSearchLimit(7)
            }

        }
    }

    const handleMobileSearch = function(e) {
        e.preventDefault();
        var query =(mobileSearchQueryRef.current.value).trim();
        if(query.length > 0) {
            history.push(`/search/${query}`);
            setMobileSearchState('hide')
            if(setSearchLimit) {
                setSearchLimit(1)
            }

        }
    }
    const toggleDarkLightMode = function (e) {

        if(colorMode == 'light') {
            localStorage.setItem('colorMode', 'dark');
            setColorMode('dark');
        } else {
            localStorage.setItem('colorMode', 'light');
            setColorMode('light');
        }
        
    }
    if(typeof window !== 'undefined' ) {
        if(colorMode == 'dark') {
            r.style.setProperty('--background-color', '#1B1C1F');
            r.style.setProperty('--color-light-1', '#020c1c');
            r.style.setProperty('--color-light-2', '#dfdfdf');
            r.style.setProperty('--color-light-3', '#03132a');
            r.style.setProperty('--color-light-4', '#041631');
            
            r.style.setProperty('--color-dark-1', '#bfbfbf');
            r.style.setProperty('--color-dark-2', '#cfcfcf');
            r.style.setProperty('--color-dark-3', '#dfdfdf');
            r.style.setProperty('--color-dark-4', '#efefef');
            r.style.setProperty('--color-dark-5', '#c4c4c4');
    
            r.style.setProperty('--color-red-1', '#ef4d39');
            r.style.setProperty('--scrollbar-color', '#fff');
            r.style.setProperty('--heading-article-color', '#fff');
     
        } else {
            
            r.style.setProperty('--background-color', '#fff');
            r.style.setProperty('--color-dark-1', '#020c1c');
            r.style.setProperty('--color-dark-2', '#030f23');
            r.style.setProperty('--color-dark-3', '#03132a');
            r.style.setProperty('--color-dark-4', '#041631');
            r.style.setProperty('--color-dark-5', '#051938');
            
            r.style.setProperty('--color-light-1', '#bfbfbf');
            r.style.setProperty('--color-light-2', '#cfcfcf');
            r.style.setProperty('--color-light-3', '#dfdfdf');
            r.style.setProperty('--color-light-4', '#efefef');
            r.style.setProperty('--color-light-5', '#F7F6F6');
    
            r.style.setProperty('--color-red-1', '#D9402E');
            r.style.setProperty('--scrollbar-color', 'rgba(65, 63, 63, 0.404)');
            r.style.setProperty('--heading-article-color', '#03132a');
       
        }
    }
    
    const [mobileSearchState, setMobileSearchState] = useState('hide');


    return (
        <header className="header">
            <div className='underConstuctions'>
                <div>
                     جريدة إلكترونية تحت التأسيس
                </div>
                <div>
                     رئيس مجلس الإدارة: <span>سامي ميخا</span>
                </div>
                <div>
                     المدير العام و التنفيذي: <span>عصام مكرم</span>
                </div>
                <div>
                المشرف العام : <span>حسين الخولي</span>
                </div>
            </div>
            <div className={mobileSearchState == 'hide' ? "display-search hide" : "display-search"}>
                <div className="close-search" onClick={() => setMobileSearchState('hide')}>&#10005;</div>
                <form onSubmit={(e) => handleMobileSearch(e)} className="search-mobile-bar">
                    <div className="form-group">
                        <div className="search-icon">
                        <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M3.99709 17.6927L6.68635 12.9716C5.41058 12.1874 4.41435 10.9548 3.9779 9.41188C3.04471 6.11107 5.00661 2.6667 8.36052 1.71798C11.7144 0.769269 15.1899 2.67559 16.1235 5.97627C17.0572 9.27695 15.0953 12.7213 11.7414 13.67C10.2923 14.0799 8.82137 13.9547 7.54166 13.4167L4.84203 18.1563C4.71055 18.3875 4.41461 18.4712 4.18154 18.3432C3.94804 18.2153 3.8656 17.9239 3.99709 17.6927ZM11.4813 12.7506C14.3191 11.9479 15.9791 9.03325 15.1892 6.24057C14.3992 3.44789 11.4584 1.83471 8.62061 2.63743C5.78281 3.44015 4.12276 6.35477 4.91272 9.14745C5.70268 11.9401 8.6435 13.5533 11.4813 12.7506Z"
                            fill="#051938"
                            fillOpacity="0.92"
                            />
                        </svg>
                        </div>
                        <input
                        type="search"
                        className="form-control"
                        placeholder="ابحث من هنا"
                        ref={mobileSearchQueryRef}
                        />
                        <input type="submit" value="ابحث" className="btn-search" />
                    </div>
                </form>
                <div className="overlayer"></div>
            </div>
            <div className="container">
                <div className="head">
                <div className="search-mobile">
                    <div className="search-icon-mobile" onClick={() => setMobileSearchState('show')}>
                    <svg
                        width="12"
                        height="11"
                        viewBox="0 0 12 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M10.1535 10.1768L7.69681 7.68021C6.98649 8.334 6.04708 8.7357 5.01336 8.7357C2.80205 8.73539 1.00967 6.91399 1.00967 4.66701C1.00967 2.42003 2.80205 0.598633 5.01336 0.598633C7.22468 0.598633 9.01705 2.42003 9.01705 4.66701C9.01705 5.63786 8.68125 6.5283 8.12298 7.22774L10.5894 9.73405C10.7097 9.85617 10.7097 10.0544 10.5894 10.1766C10.4691 10.299 10.2738 10.299 10.1535 10.1768ZM8.40106 4.66701C8.40106 2.76582 6.88434 1.22461 5.01336 1.22461C3.14239 1.22461 1.62567 2.76582 1.62567 4.66701C1.62566 6.56822 3.14238 8.10941 5.01336 8.10941C6.88434 8.10941 8.40106 6.56822 8.40106 4.66701Z"
                        fill="#F7F6F6"
                        stroke="#EFEFEF"
                        />
                    </svg>
                    </div>
                </div>
                <a className="logo" style={{fontWeight: 'bold'}} onClick={() => history.push('/')}><img alt="seay news logo" src="https://api.seaynews.com/uploads/logo_088e36076f.jpg" width="80" height="auto" style={{borderRadius: '4px'}}></img></a>
                <form action="#" className="search" onSubmit={(e) => handleSearch(e)}>
                    <div className="form-group">
                    <div className="search-icon">   
                        <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M3.99709 17.6927L6.68635 12.9716C5.41058 12.1874 4.41435 10.9548 3.9779 9.41188C3.04471 6.11107 5.00661 2.6667 8.36052 1.71798C11.7144 0.769269 15.1899 2.67559 16.1235 5.97627C17.0572 9.27695 15.0953 12.7213 11.7414 13.67C10.2923 14.0799 8.82137 13.9547 7.54166 13.4167L4.84203 18.1563C4.71055 18.3875 4.41461 18.4712 4.18154 18.3432C3.94804 18.2153 3.8656 17.9239 3.99709 17.6927ZM11.4813 12.7506C14.3191 11.9479 15.9791 9.03325 15.1892 6.24057C14.3992 3.44789 11.4584 1.83471 8.62061 2.63743C5.78281 3.44015 4.12276 6.35477 4.91272 9.14745C5.70268 11.9401 8.6435 13.5533 11.4813 12.7506Z"
                            fill="#051938"
                            fillOpacity="0.92"
                        />
                        </svg>
                    </div>
                    <input
                        type="search"
                        className="form-control"
                        placeholder="ابحث من هنا"
                        ref={searchQueryRef}

                    />
                    <input type="submit" value="ابحث" className="btn-search" />
                    </div>
                </form>
                <div className="dark-light-mode">
                    <input type="checkbox" checked={localStorage.colorMode == 'dark' ? true : false} id="checkbox" onChange={() => toggleDarkLightMode()} className="checkbox" />
                    <label htmlFor="checkbox" className="darkmode"
                    ><span className="icon-circle"></span>
                    <div className="icon-moon">
                        <svg
                        className="moon-color"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M20.489 11.9165C20.2742 11.8628 20.0593 11.9165 19.8714 12.0508C19.1732 12.6416 18.3676 13.1249 17.4814 13.4472C16.649 13.7694 15.736 13.9305 14.7693 13.9305C12.5941 13.9305 10.607 13.0444 9.18379 11.6212C7.76057 10.1979 6.87442 8.2108 6.87442 6.03569C6.87442 5.12269 7.03554 4.23653 7.30407 3.43094C7.59945 2.57163 8.0291 1.79289 8.59302 1.12156C8.8347 0.826176 8.78099 0.396525 8.48561 0.154846C8.29764 0.0205805 8.08281 -0.0331259 7.86798 0.0205805C5.58546 0.638204 3.59833 2.00772 2.17511 3.83373C0.805596 5.6329 0 7.86171 0 10.2785C0 13.2055 1.18154 15.864 3.11497 17.7974C5.0484 19.7308 7.68001 20.9124 10.6339 20.9124C13.1044 20.9124 15.3869 20.0531 17.2129 18.6298C19.0658 17.1798 20.4084 15.1121 20.9723 12.749C21.0798 12.373 20.8649 11.9971 20.489 11.9165Z"
                        />
                        </svg>
                    </div>

                    <div className="icon-sun">
                        <svg
                        className="sun-color"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.2999 2.87532L11.1247 2.05048C11.3522 1.82269 11.722 1.82269 11.9495 2.05048C12.1773 2.27827 12.1773 2.64752 11.9495 2.87532L11.1247 3.70015C11.0109 3.81419 10.8616 3.87107 10.7123 3.87107C10.5629 3.87107 10.4136 3.81419 10.2999 3.70015C10.0721 3.47236 10.0721 3.10311 10.2999 2.87532Z"
                        />
                        <path
                            d="M12.25 6.41675H13.4167C13.7387 6.41675 14 6.67808 14 7.00008C14 7.32208 13.7387 7.58341 13.4167 7.58341H12.25C11.928 7.58341 11.6667 7.32208 11.6667 7.00008C11.6667 6.67808 11.928 6.41675 12.25 6.41675Z"
                        />
                        <path
                            d="M10.2999 10.3C10.5274 10.0722 10.8972 10.0722 11.1247 10.3L11.9495 11.1248C12.1773 11.3526 12.1773 11.7219 11.9495 11.9497C11.8358 12.0637 11.6864 12.1206 11.5371 12.1206C11.3878 12.1206 11.2384 12.0637 11.1247 11.9497L10.2999 11.1248C10.0721 10.897 10.0721 10.5278 10.2999 10.3Z"
                        />
                        <path
                            d="M6.99992 11.6667C7.32192 11.6667 7.58325 11.9281 7.58325 12.2501V13.4167C7.58325 13.7387 7.32192 14.0001 6.99992 14.0001C6.67792 14.0001 6.41659 13.7387 6.41659 13.4167V12.2501C6.41659 11.9281 6.67792 11.6667 6.99992 11.6667Z"
                        />
                        <path
                            d="M2.05034 11.1248L2.87517 10.3C3.10267 10.0722 3.47251 10.0722 3.70001 10.3C3.9278 10.5278 3.9278 10.897 3.70001 11.1248L2.87517 11.9497C2.76142 12.0637 2.61209 12.1206 2.46276 12.1206C2.31342 12.1206 2.16409 12.0637 2.05034 11.9497C1.82255 11.7219 1.82255 11.3526 2.05034 11.1248Z"
                        />
                        <path
                            d="M0.583251 6.41675H1.74992C2.07192 6.41675 2.33325 6.67808 2.33325 7.00008C2.33325 7.32208 2.07192 7.58341 1.74992 7.58341H0.583251C0.261251 7.58341 -8.2016e-05 7.32208 -8.2016e-05 7.00008C-8.2016e-05 6.67808 0.261251 6.41675 0.583251 6.41675Z"
                        />
                        <path
                            d="M2.05034 2.05048C2.27784 1.82269 2.64767 1.82269 2.87517 2.05048L3.70001 2.87532C3.9278 3.10311 3.9278 3.47236 3.70001 3.70015C3.58626 3.81419 3.43692 3.87107 3.28759 3.87107C3.13826 3.87107 2.98892 3.81419 2.87517 3.70015L2.05034 2.87532C1.82255 2.64752 1.82255 2.27827 2.05034 2.05048Z"
                        />
                        <path
                            d="M6.99992 0C7.32192 0 7.58325 0.261333 7.58325 0.583333V1.75C7.58325 2.072 7.32192 2.33333 6.99992 2.33333C6.67792 2.33333 6.41659 2.072 6.41659 1.75V0.583333C6.41659 0.261333 6.67792 0 6.99992 0Z"
                        />
                        <path
                            d="M7.00008 3.20825C9.09075 3.20825 10.7917 4.90925 10.7917 6.99992C10.7917 9.09058 9.09075 10.7916 7.00008 10.7916C4.90942 10.7916 3.20842 9.09058 3.20842 6.99992C3.20842 4.90925 4.90942 3.20825 7.00008 3.20825ZM7.00008 9.62492C8.44733 9.62492 9.62508 8.44717 9.62508 6.99992C9.62508 5.55267 8.44733 4.37492 7.00008 4.37492C5.55283 4.37492 4.37508 5.55267 4.37508 6.99992C4.37508 8.44717 5.55283 9.62492 7.00008 9.62492Z"
                        />
                        </svg>
                    </div>
                    </label>
                </div>
                </div>
            </div>
        </header>
    )
    
    
}
