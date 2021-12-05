import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRouter } from 'next/router'
import { useQuery } from 'react-query';
import search from '../../services/search';

// Importing page layout
import SearchResult from '../../layout/searchResult.js';
import Header from "../../layout/header";
import Categories from "../../layout/categories";
import FullPageLoading from '../../pages/Loading';

// Error Components
import Error404 from '../Error404';
import Error500 from '../Error500';
import NoResults from '../../components/NoResults';
import Ad from '../../components/Ad';

// Importing Functions
import manageAds from '../../functions/manageAds';
import Head from '../../functions/Head';

var isFirstLoading = true;
var clonedData = [];
let canLoadMore = true;

let ads = [];



export default function Search({initialSearchResults}) {
    const history = useRouter();
    const [limit, setLimit] = useState(7);
    const {query} = history.query;
    let {isLoading, isError, data, error} = useQuery(['search', query, (limit+1)], search, {cacheTime: 0, initialData: initialSearchResults, retry: 0});
    
    if(isLoading) {

        if(isFirstLoading) return <FullPageLoading></FullPageLoading>;
        return (
            <React.Fragment>
                {Head(query)}
                <Header setSearchLimit={setLimit}></Header>
                <Categories data={clonedData?.sectionsNames}></Categories>
                <SearchResult data={data?.searchResult}></SearchResult>
                <div style={{textAlign: 'center', padding: "2rem"}}>
                    {canLoadMore && <a  className="for-more heading-4">جاري تحميل المزيد من النتائج</a>}
                </div>
            </React.Fragment>
        )
        
    }
    
    
    if(isError) {
        return error.message == 404 ? <Error404></Error404> : <Error500></Error500>
    }
    
    isFirstLoading = false;

    if(clonedData?.searchResult) {
        if(data?.searchResult?.length > clonedData?.searchResult?.length) {
            clonedData = data
        }
    } else {
        clonedData = data;
    }


    if(clonedData?.searchResult?.length > limit) {
        canLoadMore = true;
    } else {
        canLoadMore = false;
    }

    ads = manageAds(clonedData);

    
    
    return (
        <React.Fragment>
            {Head(query)}
            <Header setSearchLimit={setLimit}></Header>
            <Categories data={clonedData?.sectionsNames}></Categories>
            <SearchResult ads={ads} data={data?.searchResult}></SearchResult>
            <div style={{textAlign: 'center', padding: "2rem"}}>
                {canLoadMore && <a onClick={() => {setLimit(limit + 10)}}  className="for-more heading-4">المزيد</a>}
            </div>
            {data?.searchResult?.length == 0 && <NoResults></NoResults>}
        </React.Fragment>
    )



    
   

}


Search.getInitialProps = async function({req,query,asPath,pathname}) {
    try {
        const initialSearchResults = await search({queryKey: ['search', query.query, (8)]});
        return { initialSearchResults }
    } catch (error) {
        return {initialSearchResults: error}
    }
  
  }
  