import React from 'react';
import Flashcard from './components/flashcard';
import Collection from './components/collection';
import { CreateFlashcard } from './components/createFlashcard';

export default function App() {

  return (
      <div>
        <Collection />
        <Flashcard />
        
        <CreateFlashcard />
      </div> 
  );
}


