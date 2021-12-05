import React from 'react';
import { useRouter } from 'next/router'
import Config from '../config/variables';

// Importing Components
import Tag from '../components/Tag';

export default function ResultCard({title, brief, sectionName, img, datetime}) {
    const history = useRouter();


    const goToTheArticle = function() {
        history.push(`/article/${title}`);
    }
    return (
        <div className="card-result">
            <div style={{cursor: 'pointer'}} className="result-img" onClick={goToTheArticle}>
                <img src={`${Config.IMGS_SERVER_IP}${img}`} alt="search img 1"/>
            </div>
            <div className="result-body">
                <p style={{cursor: 'pointer'}} className="sub-header m3 time" onClick={goToTheArticle}>{datetime}</p>
                <h1 style={{cursor: 'pointer'}} className="heading-5" onClick={goToTheArticle}>
                    {title}
                </h1>
                <p style={{cursor: 'pointer'}} className="regular" onClick={goToTheArticle}>
                    {brief}
                </p>
                {sectionName && <Tag text={sectionName} type="section" onClick={() => {history.push(`/section/${sectionName}`)}}/>}
            </div>
        </div>
    )
}