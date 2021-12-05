import React from 'react';
import Config from '../config/variables';
import AdSense from 'react-adsense';
export default function Ad({data}) {
    if(data) {
        if(data == 'googleAd') {
            return (
                <AdSense.Google
                    client='ca-pub-6522445487056053'
                    slot='9486111507'
                    style={{ display: 'block' }}
                    format='auto'
                    responsive='true'
                    layoutKey='-gw-1+2a-9x+5c'
                />
            )
        } else {
           return (
                <a href={data.link || '#'} style={{width: "100%", display: "block", margin: "1rem 0"}}>
                    <img style={{width: 'auto', maxWidth: "90%",display: 'block', margin: 'auto'}} src={`${Config.IMGS_SERVER_IP}${data.image?.url}`}></img>
                </a>
           )
        }
        
    }
    return null;
    
}
