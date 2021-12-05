import React from 'react';
import sanitizeHtml from 'sanitize-html-react';
import Config from '../config/variables';

// Importing Components
import Tag from '../components/Tag';
import SecondaryCard from '../components/SecondaryCard';
import Ad from '../components/Ad';

// Importing social media icons
// import Facebook from '../assets/icons/facebook.svg';
// import Twitter from '../assets/icons/twitter.svg';
// import Messenger from '../assets/icons/messenger.svg';
// import Telegram from '../assets/icons/telegram.svg';
// import Whatsapp from '../assets/icons/whatsapp.svg';

// Importing functions
import DateTimeToArabicString from '../functions/DateTimeToArabicString';

export default function article({alsoRead = [], mostReadToday = [], article = {}, ads = []}) {
    
    const cleanArticleBody = sanitizeHtml(article.body, {
            allowedTags: ['iframe', 'p', 'img', 'h1', 'div','a', 'figure','figcaption', 'table', 'tr', 'th', 'td','blockquote', 'q', 'footer','cite'],
            allowedAttributes: {
                'iframe': ['width', 'height', 'src', 'title', 'frameborder', 'allow', 'allowfullscreen'],
                'img': ['alt','src'],
		        'a': ['href'],
                'div': ['width']
            },
            allowedClasses: {
                'p': ['article-p', 'red'],
                'img': ['article-img','gallery__image'],
                'h1': ['heading-article-1','heading-article-2','heading-article-3', 'heading-article-4','heading-article-5', 'heading-article-6', 'article-heading', 'red'],
                'iframe': ['padding-bottom-1-unit'],
                'div': ['writer', 'gallery', 'gallery__column', 'gallery__link'],
                'figure': ['gallery__thumb', 'gallery__link"'],
                'figcaption': ['gallery__caption'],
		        'a': ['link','gallery__link']
            }
        },
    );

    var alsoReadTop = [];
    var alsoReadBottom = [];

    alsoRead.forEach((article, i) => {
        if(i < 2) alsoReadTop.push(article);
        else if(i > 1 && i < 4) alsoReadBottom.push(article);
    });
    

    return (
        <div className="article">
            <div className="container">
            <hr className="hr" />
                
                <div className="article-container">
                <p className="regular date">{DateTimeToArabicString({datetime: article.createdAt})}</p>
                <h1 className="heading-1">
                    {article.title}
                </h1>
                <ul className="tags-list list-unstyled">
                    {article.section?.name ? <li>
                         <Tag key={article.id} text={article.section?.name} type="section"/>
                        </li> : null
                    }
                    {
                        ((article.tags) || []).map(el => (<li>
                                <Tag  key={el.id} text={el} type="tag"/>
                            </li>
                        ))
                    
                    }
                </ul>
                {
                    article.banner && (
                        <div className="banner-img">
                            <img
                                src={`${Config.IMGS_SERVER_IP}${article.banner.url}`}
                                alt="article-img"
                            />
                        </div>
                    )
                }

                <Ad data={ads[0]}></Ad>
                <div className="article-content">
                    <div className="article-information">
                    <h1 className="heading-3 article-heading">نص المقال</h1>
                    

                    <div className="article-body" dangerouslySetInnerHTML={{ __html: cleanArticleBody }}></div>
                    {/* <blockquote>
                        <p>The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.
</p>
                        <cite><p className="red">~ George</p></cite>
                    </blockquote> */}
                    
                    {/* <h1 className="heading-article-1">test</h1>
                    <h1 className="heading-article-2 red">test</h1>
                    <h1 className="heading-article-3">test</h1>
                    <h1 className="heading-article-4 red">test</h1>
                    <h1 className="heading-article-5">test</h1>
                    <h1 className="heading-article-6 red">test</h1>
                    
                    <table>
                        <tr>
                            <th>Person 1</th>
                            <th>Person 2</th>
                            <th>Person 3</th>
                        </tr>
                        <tr>
                            <td>Emil</td>
                            <td>Tobias</td>
                            <td>Linus</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>14</td>
                            <td>10</td>
                        </tr>
                    </table>

                    
                    
                <div class="gallery">
                    <div class="gallery__column">
                        <a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/_cvwXhGqG-o/300x300" alt="Portrait by Jessica Felicio" class="gallery__image" />
                                <figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="Portrait by Oladimeji Odunsi" class="gallery__image" />
                                <figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@a2eorigins" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/VLPLo-GtrIE/300x300" alt="Portrait by Alex Perez" class="gallery__image" />
                                <figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
                            </figure>
                        </a>
                    </div>
                    
                    <div class="gallery__column">
                        <a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/AR7aumwKr2s/300x300" alt="Portrait by Noah Buscher" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Noah Buscher</figcaption>
                            </figure>
                        </a>
                        
                        <a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/dnL6ZIpht2s/300x300" alt="Portrait by Ivana Cajina" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@samburriss" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/tV_1sC603zA/300x500" alt="Portrait by Sam Burriss" class="gallery__image" />
                                <figcaption class="gallery__caption">Portrait by Sam Burriss</figcaption>
                            </figure>
                        </a>
                    </div>
                    
                    <div class="gallery__column">
                        <a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/Xm9-vA_bhm0/300x500" alt="Portrait by Mari Lezhava" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
                            </figure>
                        </a>
                        
                        <a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/NTjSR3zYpsY/300x300" alt="Portrait by Ethan Haddox" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/2JH8d3ChNec/300x300" alt="Portrait by Amir Geshani" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
                            </figure>
                        </a>
                    </div>
                    
                    <div class="gallery__column">
                        <a href="https://unsplash.com/@frxgui" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/FQhLLehm4dk/300x300" alt="Portrait by Guilian Fremaux" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Guilian Fremaux</figcaption>
                            </figure>
                        </a>

                        <a href="https://unsplash.com/@majestical_jasmin" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/OQd9zONSx7s/300x300" alt="Portrait by Jasmin Chew" class="gallery__image"/>
                                <figcaption class="gallery__caption">Portrait by Jasmin Chew</figcaption>
                            </figure>
                        </a>
                        
                        <a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
                            <figure class="gallery__thumb">
                                <img src="https://source.unsplash.com/XZkEhowjx8k/300x500" alt="Portrait by Dima DallAcqua" class="gallery__image" />
                                <figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
                     */}
                    <h1 className="heading-article-4">شاركنا رأيك عبر حسابك علي:</h1>
                   
                    
                    <ul className="social-media-icons">
                        <li><a href={`https://www.facebook.com/dialog/feed?&app_id=814354155845771&link=${Config.CLIENTSITE_DOMAIN}/article/${article.url || ''}&display=popup&quote=`} target="_blank"><img src="https://api.seaynews.com/uploads/facebook_1c05d936a1.svg"></img></a></li>
                        <li><a href={`whatsapp://send?text=${article?.title} ${Config.CLIENTSITE_DOMAIN}/article/${article.url || '' }`} data-action="share/whatsapp/share"><img src="https://api.seaynews.com/uploads/whatsapp_0fec7c7886.svg"></img></a></li>
                        <li><a href={`fb-messenger://share/?link=${Config.CLIENTSITE_DOMAIN}/article/${article.url || ''}`}><img src="https://api.seaynews.com/uploads/messenger_edf444166d.svg"></img></a></li>
                        <li><a href={`https://twitter.com/share?text=${article?.title}&url=${Config.CLIENTSITE_DOMAIN}/article/${article.url || ''} `}><img src="https://api.seaynews.com/uploads/twitter_7459e7cf73.svg"></img></a></li>
                        <li><a href={`https://telegram.me/share/url?url=${Config.CLIENTSITE_DOMAIN}/article/${article.url || ''}&text=${article?.title}`}><img src="https://api.seaynews.com/uploads/telegram_1e00fdad4c.svg"></img></a></li>
                    </ul>
                    <hr className="hr" />
                    <Ad data={ads[1]}></Ad>
                    {(alsoRead && alsoRead.length > 0) && (
                        <div className="also-read">
                            
                            <h1 className="for-more heading-4">اقرأ المزيد</h1>
                            
                            <div className="row-container">
                                {
                                    alsoReadTop.length > 0 && (
                                        <div className="row-card">

                                            {alsoReadTop.map(el => {
                                           
                                            return (
                                                <SecondaryCard  key={el?.id} style={{width: '10rem !important'}} title={el?.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.small?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el?.createdAt, dateOnly: true})}/>
                                            )})}
                                           
                                        </div>
                                        
                                    )
                                }
                                
                                {
                                    alsoReadBottom.length > 0 && (
                                        <div className="row-card">
                                            {alsoReadBottom.map(el => {
                                            return (
                                                <SecondaryCard  key={el?.id} style={{width: '10rem !important'}} title={el?.title} img={`${Config.IMGS_SERVER_IP}${(el?.banner?.formats?.small?.url || el?.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el?.createdAt, dateOnly: true})}/>
                                            )})}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    )}
                    </div>


                    {(mostReadToday && mostReadToday.length > 0) && (
                       <div className="left latest-news">
                            <h1 className="for-more heading-4">الاكثر قرأة منذ 24 ساعة</h1>
                            {
                                mostReadToday.map(el => <SecondaryCard key={el.id} title={el.title} img={`${Config.IMGS_SERVER_IP}${(el.banner?.formats?.small?.url || el.banner?.url)}`} datetime={DateTimeToArabicString({datetime: el.createdAt, dateOnly: true})}/>
                                )
                            }
                        </div>
                    )}

                   
                </div>
            </div>
            </div>
        </div>
    )
}
