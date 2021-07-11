import React from 'react';
import FlashcardDetails from '../FlashcardDetails/flashcardDetails';

export default function DisplayFlashcard(props){

    props.flashcards.map(flashcards => { 
        return <li key={flashcards.id}>
                {flashcards.front_text}
                {flashcards.back_text}
               </li>
    });

    return(
        <div className="flashcard-main">
                <ul>
                    <FlashcardDetails flashcards={props.flashcards} collections={props.collections}
                                selectedCollection={props.selectedCollection}/>
                </ul>  
        </div>
    )
}
