import React from 'react';
import { useRouter } from 'next/router'


export default function Tag({text, type = 'section'}) {
    let history = useRouter();

    const tagClicked = function(text, type) {
        if(type == 'section') {
            history.push(`/section/${text}`);
        } else {
            history.push(`/search/${text}`);
        }
    }

    return (
        <a className="category-btn" onClick={() => tagClicked(text, type)}>{type == 'section' ? text : `#${text}`}</a>
    );
}