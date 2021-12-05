import React from 'react';
import Config from '../../config/variables';

// Importing Components
import SecondaryCard from '../SecondaryCard';

// Importing functions
import DateTimeToArabicString from '../../functions/DateTimeToArabicString';

export default function SectionArticleSmallRow({articles = []}) {
    
    return (
        <>
            <div className="bottom">
                {articles.map(el => <SecondaryCard key={el.id} title={el.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.medium?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})} />)}
            </div>
            <hr className="hr" />
        </>
    )
}