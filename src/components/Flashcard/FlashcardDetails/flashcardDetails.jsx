import React, { useState } from 'react';
import EditFlashcard from '../EditFlashcards/editFlashcards';


export default function FlashcardDetails(props) {

    const [flashcardNumber, setFlashcardNumber] = useState(0);

    if(props.flashcards.length === 0){
        return(null)
    }

    else{
        function goToPreviousCard(){
            let tempFlashCardNumber = flashcardNumber;
            tempFlashCardNumber--;
            if(tempFlashCardNumber < 0){
                tempFlashCardNumber = props.flashcards.length - 1
            }
            setFlashcardNumber(tempFlashCardNumber)
        }

        function goToNextCard(){
            let tempFlashCardNumber = flashcardNumber;
            tempFlashCardNumber++;
            if(tempFlashCardNumber === props.flashcards.length){
                tempFlashCardNumber = 0;
            }
            setFlashcardNumber(tempFlashCardNumber)
        }

        return(
            <div className=''>
                <div className ='col-md-4'>
                </div>
                <div className='col-md-4'>
                    <h1>{props.flashcards[flashcardNumber].front_text}</h1>
                    <h4>{props.flashcards[flashcardNumber].back_text}</h4>
                    <h2>{flashcardNumber + 1}/{props.flashcards.length}</h2>
                </div>
                <div className='col-md-4'>
                    <button className="btn" onClick={() => goToPreviousCard()}>Previous</button>
                    <button className="btn" onClick={() => goToNextCard()}>Next</button>
                </div>
                <EditFlashcard cards={props.flashcards[flashcardNumber]} collections={props.collections}
                            selectedCollection={props.selectedCollection}/>
            </div>
    )}
}