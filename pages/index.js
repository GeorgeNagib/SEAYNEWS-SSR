import React from 'react';
import { useQuery, } from 'react-query';
import fetchSections from '../services/sections';

// Importing page layout
import Main from '../layout/main.js';
import Section from '../layout/section.js';
import Header from '../layout/header';
import Categories from '../layout/categories';
import FullPageLoading from '../pages/Loading';

// Importing Components
import Ad from '../components/Ad';

// Importing Funtions
import manageAds from '../functions/manageAds';
import Head from '../functions/Head';

// Error Pages
import Error404 from './Error404';
import Error500 from './Error500';



let isFirstLoading = true;
let ads = [];



export default function Home({initSections}) {

    let {isLoading, isError, data, error} = useQuery(['sections', 'home'], fetchSections, {initialData: initSections, retry: 0});
    if(isLoading && isFirstLoading) {
        return <FullPageLoading></FullPageLoading>;
    }

    if(isError) {
        return error.message == 404 ? <Error404></Error404> : <Error500></Error500>
    }

    isFirstLoading = false;

   

    let googleAdsCount = data?.ads?.maxGoogleAds || 0;
    let clientsAdsFetchingPointer = 0;
    const clientsAds = data?.ads?.['clients_advertisements'] || [];
    

    
    ads = manageAds(data);

    
    return (
        <React.Fragment>
            {Head()}
            <Header></Header>
            <Categories data={data?.sections}></Categories>
            
            {data?.sections?.map((el, i) => {


                    if(i == 0) return (
                        <>
                            {<Ad key={'ad-' + i} data={ads[i] || null}></Ad>}
                            <Main key={i} mainArticles={el.premiumPosts}></Main>
                        </>
                    )
                    return (
                        <>
                            {<Ad key={'ad-' + i}  data={ads[i] || null}></Ad>}
                            <Section key={i} sectionData={el}></Section>
                        </>
                    )
                    
                
                
            })}
        </React.Fragment>
    )



    
   

}


Home.getInitialProps = async function({req,query,asPath,pathname}) {
    try {
        const initSections = await fetchSections({queryKey: ['sections', 'home']});
        return { initSections }
    } catch (error) {
      return {initSections: error}
    }
  
  }
  