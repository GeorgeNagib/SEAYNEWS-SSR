import React from 'react';
import { useRouter } from 'next/router'


export default function SectionHeading({sectionName}) {
    let history = useRouter();

    return (
        <div className="head-news">
            <h1 className="heading-3">{sectionName}</h1>
            <a className="for-more heading-4" onClick={() => history.push(`/section/${sectionName}`)}>المزيد</a>
        </div>
    )
}