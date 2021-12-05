import React from 'react';

// Importing Components
import ResultCard from '../components/ResultCard';
import Ad from '../components/Ad';

// Importing functions
import DateTimeToArabicString from "../functions/DateTimeToArabicString";

export default function SearchResult({data, ads = []}) {
    var numberOfRows = data?.length / 2 || 0;
    const renderSearchResults = function() {
        var dom = [];
        for(var i = 0; i < numberOfRows; i++) {
            
            var resultCards = [];
            for(var z = 0; z < 2; z++) {
                if(data[((i*2) + z)]) resultCards.push(<ResultCard  key={data[((i*2) + z)]?.id} title={data[((i*2) + z)]?.title} brief={data[((i*2) + z)]?.brief} sectionName={data[((i*2) + z)]?.section?.name} img={(data[((i*2) + z)]?.banner?.formats?.small?.url || data[((i*2) + z)]?.banner?.url)} datetime={DateTimeToArabicString({datetime: data[((i*2) + z)].createdAt, dateOnly: true})} />
                )
            }
            
            dom.push(
                <>
                    {(i % 2 == 0 && ads[i / 2] )&& <Ad data={ads[i / 2]}></Ad>}
                    <div className="result">
                        {resultCards}                    
                    </div>
                    
                    <hr className="hr-s"/>
                </>)
        }
        return dom;
    }
    return (
    <div className="search-result">
        <div className="container">
            <hr className="hr-s"/>
            {renderSearchResults()}
        </div>
      </div>

    )
}