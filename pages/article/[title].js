import React, {useState} from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Config from '../../config/variables';

// Importing page layout
import Header from '../../layout/header.js';
import Categories from '../../layout/categories.js';
import ArticleLayout from '../../layout/article.js';
import { useParams } from 'react-router-dom';

// Importing components
import FullPageLoading from '../Loading';
import Ad from '../../components/Ad';

// Importing functions
import manageAds from '../../functions/manageAds';
import fetchArticle from '../../services/article';
import Head from '../../functions/Head';

// Error Pages
import Error404 from '../Error404';
import Error500 from '../Error500';

import DocumentMeta from 'react-document-meta';
import article from '../../layout/article.js';


export default function Article({initArticle}) {
    const [skips, setSkips] = useState(0);
    const history = useRouter();
    const {title} = history.query;

    let {isLoading, isError, data, error} = useQuery([ title ], fetchArticle, {cacheTime: 0, initialData: initArticle, retry: 0});
    if((title && data?.post?.title) && data?.post?.title != title && typeof window != 'undefined') history.push(`/article/${data?.post?.title}`);
    
    

    if(isLoading) {
       return <FullPageLoading></FullPageLoading>;
        
    }

   
    if(isError) {
        return error.message == 404 ? <Error404></Error404> : <Error500></Error500>
    }

    const ads = manageAds(data) || [];
    
    return (
        <>
            {Head(data?.post?.title, data?.post?.brief, data?.post?.tags, `${data?.post?.thumbnail || ( 'https://api.seaynews.com' + data?.post?.banner?.url )}`, `https://seaynews.com/article/${data?.post?.url}`)}
            <Header></Header>
            <Categories data={data?.sectionsNames}></Categories>
            {<Ad data={ads[0] || null}></Ad>}
            <ArticleLayout ads={ads.length > 1 ? ads.slice(1, ads.length) : []} alsoRead={data?.alsoRead} mostReadToday={data?.mostReadToday} article={data?.post}></ArticleLayout>
        </>
    )



    
   

}

Article.getInitialProps = async function({req,query,asPath,pathname}) {
  try {
    const initArticle = await fetchArticle({queryKey: [query.title]});
    return { initArticle }
  } catch (error) {
    return {initArticle: error}
  }

}
