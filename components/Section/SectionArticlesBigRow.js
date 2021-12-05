import React from 'react';
import Config from '../../config/variables';

// Importing Components
import MediumCard from '../MediumCard';

// Importing functions
import DateTimeToArabicString from '../../functions/DateTimeToArabicString';

export default function SectionArticleBigRow({articles = []}) {
    return (
        <>
            <div className="card-container">
                {articles.map(el => <MediumCard key={el.id} title={el.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.medium?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})} />)}
            </div>
            <hr className="hr" />
        </>
    )
}