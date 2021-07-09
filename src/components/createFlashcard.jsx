import React, { useState } from "react";
import axios from "axios";

export function CreateFlashcard() {
  const [ flashcard, setflashcard ] = useState("");
  
  const handleSubmit = event => {
      event.preventDefault();
      axios.post('http://127.0.0.1:8000/flashcard/').then(response => {
          setflashcard(response.data)
      })
  }

  return (
    <div>
        <div>
            <h1>Create New Flashcard</h1>
        </div>
    <form onSubmit={handleSubmit}>
      <label>
        Front:
        <input
          type="text"
          onChange={event => setflashcard(event.target.value)}
        />
      </label>
      <label>
          Back:
          <input
            type="text"
            onChange={event => setflashcard(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  );
}