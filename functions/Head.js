import Head from 'next/head'

export default function(title = "ساي نيوز", description = "موقع اخباري للشباب المصري و الشباب العربي", tags = ['اخبار', 'اخبار مصر', 'ساي نيوز','اخبار عربية', 'seay news'], img = 'https://api.seaynews.com/uploads/SEAY_LOGO_Final_c06e22c7fc.png',url="https://seaynews.com") {
    return (
        <Head>
            <title>{title}</title>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6522445487056053"
     crossorigin="anonymous"></script>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:type" content="website"/>
            <meta name="description" content={description}/>
            <meta property="og:title" content={title}/>
            <meta name="keywords" content={tags.join(', ')}/>
            <link rel="icon" href="https://api.seaynews.com/uploads/logo_c2bcdd5c1c_b4cb2a5cf6.ico"/>
            <meta property="og:url" content={url}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={img}/>
            <meta name="twitter:image" content={img} />
            <meta name="image" content={img} />
            <meta property="og:image:width" content="640"/>
            <meta property="og:image:height" content="300"/>
            {/*  Open Graph / Facebook */}
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={img}/>

            {/*  Twitter  */}
            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content={url}/>
            <meta property="twitter:title" content={title}/>
            <meta property="twitter:description" content={description}/>
            <meta property="twitter:image" content={img}/>

        </Head>
    )
}   
