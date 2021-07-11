import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CollectionsDisplay from './components/Collections/DisplayCollections/displayCollections';
import CreateFlashcard from './components/Flashcard/AddFlashcard/addFlashcard';
import DisplayFlashcard from './components/Flashcard/DisplayFlashcard/displayFlashcard';
import TitleBar from './components/TitleBar/titleBar'
import './App.css'

function App() {
  const [collections, setCollections] = useState([]);
  const [flashcards, setFlashcards] = useState([]);
  const [selectedCollection, setSelectedCollection] = useState(null);


  useEffect(() => {
    getCollections();
    getFlashcards();

  }, []);
  
  let getCollections = async () => {
    try{
      let response= await axios.get(`http://127.0.0.1:8000/collection/`);
      setCollections(response.data)
    }
    catch(err) {
      console.log(err);
    }
  }
  
  let getFlashcards = async (id) => {
    try{
      let response = await axios.get(`http://127.0.0.1:8000/collection/flashcards/1`);
      setFlashcards(response.data)
      setSelectedCollection(id);
    }
    catch(err) {
      console.log(err);
    }
  }
  


  return(
    <div className="entire-page">
      <br/>
      <br/>
      <TitleBar />
      <CollectionsDisplay collections={collections} flashcards={flashcards} getFlashcards={getFlashcards} selectedCollection={selectedCollection}/>
      <DisplayFlashcard collections={collections}flashcards={flashcards} getCollections={getCollections} getFlashcards={getFlashcards} selectedCollection={selectedCollection}/>
      <CreateFlashcard collections={collections} flashcards={flashcards} selectedCollection={selectedCollection}/>
    </div>
  );

}

export default App;