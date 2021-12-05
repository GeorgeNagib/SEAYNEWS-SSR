    import React from 'react';

    // Importing Components
    import SectionHeading from '../components/Section/SectionHeading';
    import SectionArticleBigRow from '../components/Section/SectionArticlesBigRow';
    import SectionArticlesSmallRow from '../components/Section/SectionArticlesSmallRow';

    export default function Section({sectionData}) {

        if(!sectionData?.premiumPosts || sectionData?.premiumPosts?.length == 0) return null;
        var top = [];
        var bottom = [];
       
        

        sectionData?.premiumPosts?.forEach((article, i) => {   
            if(!process.browser) return false;
            if(window.screen.width <= 600 || i > 3) {
                if(i < 7) bottom.push(article);
            }
            else {
                top.push(article);
            }
        });



        return (
            <section className="specific-news">
                <div className="container">
                    <SectionHeading sectionName={sectionData?.name}></SectionHeading>
                    {top.length > 0 && 
                        <SectionArticleBigRow articles={top}></SectionArticleBigRow>
                    }
                    
                    {bottom.length > 0 && 
                    <SectionArticlesSmallRow articles={bottom}></SectionArticlesSmallRow>
                    }
                </div>
            </section>
        )
    }