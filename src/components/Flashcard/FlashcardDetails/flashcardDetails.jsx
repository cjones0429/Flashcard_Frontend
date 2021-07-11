import React, { useState } from 'react';
import EditFlashcard from '../EditFlashcards/editFlashcards';
import './flashcardDetails.css'


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
            <div>
                <div className='card-details'>
                    <h1>{props.flashcards[flashcardNumber].front_text}</h1>
                    <br/>
                    <h4>{props.flashcards[flashcardNumber].back_text}</h4>
                </div>
                <br/>
                <div className="number-of-card">
                    <center>
                        <h2>{flashcardNumber + 1}/{props.flashcards.length}</h2>
                    </center>
                </div>
                <div className='buttons'>
                    <center>
                        <button className="btn btn-primary" onClick={() => goToPreviousCard()}>Previous</button>
                        <button className="btn btn-primary" onClick={() => goToNextCard()}>Next</button>
                    </center>
                </div>
                <br/>
                <EditFlashcard cards={props.flashcards[flashcardNumber]} collections={props.collections} selectedCollection={props.selectedCollection}/>
            </div>
    )}
}