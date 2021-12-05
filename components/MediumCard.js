import React from 'react';
import { useRouter } from 'next/router'


export default function MediumCard({title, img, datetime}) {
    const history = useRouter();


    return (
        <div className="medium-card" style={{cursor: 'pointer'}} onClick={() => history.push(`/article/${title}`)}>
            <img
                src={img}
                alt="card-10"
                className="medium-card-image"
            />
            <div className="medium-card-body">
                <p className="sub-header m3 time">{datetime}</p>
                <h1 className="heading-5">
                    {title}
                </h1>
            </div>
        </div>
    )
}