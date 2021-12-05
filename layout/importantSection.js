import React from 'react';

export default function ImportantSectionLayout({articles}) {
    var DOM = articles.map(el => (<div>
        <h1>{el.title}</h1>
        <p>{el.body}</p>
    </div>));
    return DOM;
}