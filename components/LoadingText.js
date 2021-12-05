import React from 'react';

export default function LoadingText({text = '', onClick}) {
    return (
        
        <div style={{textAlign: 'center', padding: "2rem"}}>
            <a onClick={onClick}  className="for-more heading-4">{text}</a>
        </div>
    )
}