import {React} from 'react';

// Importing Components
import SectionArticlesBigRow from '../components/Section/SectionArticlesBigRow';
import SectionArticlesSmallRow from '../components/Section/SectionArticlesSmallRow';
import Ad from '../components/Ad';


export default function SpecificSection({otherPosts = [], ads = []}) {
    
    const bigRow = [];
    const smallRows = [[]];
    otherPosts.forEach((el, i) => {
        if(global.innerWidth <= 600 || i > 3) {
            if(smallRows[smallRows.length - 1].length < 3)  smallRows[smallRows.length - 1].push(el);
            else smallRows.push([el])
        }
        else {
            
            bigRow.push(el);
        }
    });
    
    


    return (
        <>
            <section className="specific-news">
                <div className="container">
                    
                    {(ads[0] && (bigRow.length > 0  || smallRows[0].length > 0 )) &&  (
                        <>
                            <Ad data={ads[0] || null}></Ad>
                            <div className="head-news">
                                <h1 className="heading-3">جميع المقالات</h1>
                            </div>
                        </>
                    )}
                    {
                        bigRow.length > 0 && (
                            <>
                                
                           
                                <SectionArticlesBigRow articles={bigRow}></SectionArticlesBigRow>
                           </>
                        )
                    }

                    { (ads)}
                    {
                        smallRows[0].length > 0 && (                                         
                            smallRows.map((smallRow, i) => (
                                <>
                                    {ads[i+1] && <Ad key={'ad-section-' + i } data={ads[i+1] || null}></Ad>}
                                    <SectionArticlesSmallRow key={i} articles={smallRow}></SectionArticlesSmallRow>
                                </>
                            )) 
                        )
                    }
                    
                    
                </div>
            </section>
        </>
    )
}