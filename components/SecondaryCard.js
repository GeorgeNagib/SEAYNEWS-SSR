import React from 'react';
import { useRouter } from 'next/router'


export default function SecondaryCard({title, img, datetime}) {
    const history = useRouter();
    

    return (
        <div className="secondary-card" style={{cursor: 'pointer'}} onClick={() => history.push(`/article/${title}`)}>
            <div className="secondary-card-image">
            <img src={img} alt="card-5" />
            </div>
            <div className="card-body">
            <p className="sub-header m3 time">{datetime}</p>
            <h1 className="heading-4">
                {title}
            </h1>
            </div>
        </div>
    )
}