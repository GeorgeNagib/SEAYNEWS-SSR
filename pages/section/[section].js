import React, {useEffect, useState} from 'react';
import { useQuery, } from 'react-query';
import {useRouter} from 'next/router';
import fetchSection from '../../services/section';

// Importing components
import LoadingText from '../../components/LoadingText';
import FullPageLoading from '../../pages/Loading';
import Ad from '../../components/Ad';

// Importing page layout
import Main from '../../layout/main.js';
import Header from '../../layout/header';
import Categories from '../../layout/categories';
import SpecificSection from "../../layout/specificSectionOtherPosts";

// Error Components
import Error404 from '../Error404';
import Error500 from '../Error500';
import NoResults from '../../components/NoResults';

// Importing Functions
import manageAds from '../../functions/manageAds';
import Head from '../../functions/Head';

let isFirstLoading = true;
let canLoadMore = true;
let ads = [];



export default function Section({initialSection}) {
    const history = useRouter();
    const [limit, setLimit] = useState(6);
    const [clonedData, setClonedData] = useState([])
    const {section} = history.query;
    let {isLoading, isError, data, error} = useQuery(['section', section, (limit+1)], fetchSection, {cacheTime: 0, retry: 0, initialData: initialSection});

    if(isLoading) {
        if(isFirstLoading) return <FullPageLoading></FullPageLoading>
        return (
            <React.Fragment>
                {Head(`ساي نيوز … ${data?.section?.name}`)}
                <Header></Header>
                <Categories data={clonedData?.sectionsNames}  setSectionLimit={setLimit} setClonedData={setClonedData}></Categories>
                {<Ad data={ads[0] || null}></Ad>}
                <Main mainArticles={clonedData?.section?.premiumPosts}></Main>

                <SpecificSection ads={ads.length > 1 ? ads.slice(1, ads.length): []} otherPosts={data?.otherPosts}></SpecificSection>
                {canLoadMore ? <LoadingText text="جاري تحميل المزيد من النتائج"/> : (isLoading && <LoadingText text="جاري تحميل النتائج"/>)}

            </React.Fragment>
        )
    }

    if(isError) {
        return error.message == '404' ? <Error404></Error404> : <Error500></Error500>
    }
    
    isFirstLoading = false;

   

    if(clonedData?.otherPosts) {
        if((data?.otherPosts?.length)  > clonedData?.otherPosts?.length) {
            setClonedData(data)
        }
    } else {
        setClonedData(data);
    }

    
    if(clonedData?.otherPosts?.length > limit) {
        canLoadMore = true;
    } else {
        canLoadMore = false;
    }

    

    ads = manageAds(clonedData);

    
    return (
        <React.Fragment>
            {Head(`ساي نيوز … ${data?.section?.name}`)}
            <Header></Header>
            <Categories data={data?.sectionsNames} setSectionLimit={setLimit} setClonedData={setClonedData}></Categories>
            {<Ad data={ads[0] || null}></Ad>}
            <Main mainArticles={data?.section?.premiumPosts}></Main>
      
            <SpecificSection ads={ads.length > 1 ? ads.slice(1, ads.length): []} otherPosts={data?.otherPosts}></SpecificSection>

            {canLoadMore && <LoadingText onClick={() => {setLimit(limit + 12)}} text="المزيد"/>}

            {(data?.section?.premiumPosts?.length == 0 && data?.otherPosts?.length == 0) && <NoResults></NoResults>}
        </React.Fragment>
    )


}

Section.getInitialProps = async function({query}) {

    try {
        const initialSection = await fetchSection({queryKey: ['section', query.section, 7]});
         (initialSection)
        return { initialSection }
    } catch (error) {
         (error)
        return {initSections: error}
    }
  
  }
  