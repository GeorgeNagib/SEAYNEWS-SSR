import React from 'react';
import Config from '../config/variables';

// Importing components
import MainCard from '../components/MainCard';
import SecondaryCard from '../components/SecondaryCard';


// Importing functions
import DateTimeToArabicString from '../functions/DateTimeToArabicString';

export default function Main({mainArticles = []}) {
    const rightTop = [];
    const left = [];
    const rightBottom = [];

    if(mainArticles) {
        mainArticles.forEach((el, i) => {
            if(i < 4) rightTop.push(el);
            else if(i >= 4 && i < 8) left.push(el);
            else if(i >= 8 && i < 10) rightBottom.push(el);
            else if(i == 10) left.push(el)
        });
    }
    



    
        return(mainArticles.length > 0 &&
            (<main className="main">
                <div className="main-container">
               
                    <div className="right">
                        {rightTop.map(el => <MainCard key={el.id} title={el?.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.medium?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})}/>)}
                        {rightBottom.map(el => <SecondaryCard key={el.id} title={el?.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.small?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})}/>)}
                    </div>

                    <div className="left">
                        {left.map(el => <SecondaryCard key={el.id} title={el?.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.small?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})}/>)}

                    </div>
                </div>
                <div className="container">
                    <hr className="hr" />
                </div>
            </main>)
        )
        
    
}