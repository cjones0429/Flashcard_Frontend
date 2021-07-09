import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './flashcard.css'

export default function Flashcard() {
  const [ flashcard, setFlashcard ] = useState([]);
  const [ FlashcardNumber, setFlashcardNumber ] = useState(0);

  useEffect(() => {
      axios.get('http://127.0.0.1:8000/flashcard/')
      .then((response) => {
        setFlashcard(response.data);
      });
    }, []);
  
  if(flashcard.length === 0){
      return(
        <div>
          <center>
            <h4>"There are no flashcards to display"</h4>
          </center>
        </div>
      )
  }

  else{
    function goToNext() {
      let flash_card = FlashcardNumber;
      flash_card++;
      if(flash_card === flashcard.length){
        flash_card = 0;
      }
      setFlashcardNumber(flash_card);
    }

    function goToPrevious() {
      let flash_card = FlashcardNumber;
      flash_card--;
      if(flash_card < 0)
      flash_card = flashcard.length -1;
      setFlashcardNumber(flash_card)
    }

