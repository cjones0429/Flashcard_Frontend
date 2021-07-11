import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import CollectionsDisplay from './components/Collections/DisplayCollections/displayCollections';
import CreateFlashcard from './components/Flashcard/AddFlashcard/addFlashcard';
import DisplayFlashcard from './components/Flashcard/DisplayFlashcard/displayFlashcard';


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
    <div className="">
      <CollectionsDisplay collections={collections} flashcards={flashcards} getFlashcards={getFlashcards} selectedCollection={selectedCollection}/>
      <br/>
      <br/>
      <DisplayFlashcard collections={collections}flashcards={flashcards} getCollections={getCollections} getFlashcards={getFlashcards} selectedCollection={selectedCollection}/>
      <br/>
      <CreateFlashcard collections={collections} flashcards={flashcards} selectedCollection={selectedCollection}/>
      <br/>
      <br/>
    </div>
  );

}

export default App;