import React from 'react';


export default function DisplayCollections(props){

    let collections= props.collections.map(collection => {
        if(props.selectedCollection === collection.id){
            return <ul onClick={() => props.getFlashcards(collection.id)}  key={collection.id}>{collection.id}:     {collection.name}</ul>
        }
        else{
            return <ul onClick={() => props.getFlashcards(collection.id)}  key={collection.id}>{collection.id}:    {collection.name}</ul>
        }
    });

    return(
        <div className="container">
            <div className="collections-title">
                <h1><u>Collections:</u></h1>
            </div>
            <div className="collections-list">
                <h5>{collections}</h5>
                <br/>
            </div>
        </div>
            
    )
}
