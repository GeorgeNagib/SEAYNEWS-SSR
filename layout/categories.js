import React from 'react';
import { useRouter } from 'next/router';

export default function Categories({data, setSectionLimit, setClonedData}) {
    var history = useRouter();
    const router = useRouter()
    let pathname = router.pathname;
    const { section } = router.query

    const renderLinks = function() {
        if(data) {
           

        
            if(pathname == '/') {
                return (
                    <ul className="list-unstyled nav">
                        {data.map(el => (
                        <li className="nav-list" key={el.id}>
                            <a onClick={() => history.push(el.rank == 1 ? '/' : `/section/${el.name}`)} className={el.rank == 1 ? 'nav-links active' : 'nav-links'}>{el.name}</a>
                        </li>))}
                    </ul>
                )
            } else if(pathname.startsWith('/section') && section) {
                
                return (
                    <ul className="list-unstyled nav" onClick={() => {setClonedData(null)}}>
                        {data.map(el => (
                        <li className="nav-list" key={el.id}>
                            <a onClick={() => history.push(el.rank == 1 ? '/' : `/section/${el.name}`)} className={el.name == section ? 'nav-links active' : 'nav-links'}>{el.name}</a>
                        </li>))}
                    </ul>
                )
            } else {

                return(
                    <ul className="list-unstyled nav">
                        <li className="nav-list">
                            <a className="nav-links active">{pathname.startsWith('/search') ? "نتائج البحث" : pathname.startsWith('/article') ? "مقال" : null}</a>
                        </li>
                        {data.map(el => (
                        <li className="nav-list" key={el.id}>
                            <a onClick={() => history.push(el.rank == 1 ? '/' : `/section/${el.name}`)} className={el.name == section ? 'nav-links active' : 'nav-links'}>{el.name}</a>
                        </li>))}
                    </ul>)
            }
        }
    }
    return (
        <nav className="category">
            <div className="container">
            {renderLinks()}
               
            </div>
        </nav>
    )
}

