import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../../Collections/FormHandler/formHandler';

const CreateFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(createFlashcards);
    const [setFlashcards] = useState(props.flashcards)


    async function createFlashcards() {
        const addFlashcards = {...values, collection: props.selectedCollection};
        try{
            let response = await axios.post(`http://127.0.0.1:8000/flashcards/`, addFlashcards)
            setFlashcards(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="addcard">
            <h1>Add A Flashcard: </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection Id: 
                    <input type="text" name="collection" onChange={handleChange} value={values.collection} required={true}/>
                </label>
                <label>
                    Front Text: 
                    <input type="text" name="front_text" onChange={handleChange} value={values.front_text} required={true}/>
                </label>
                <label>
                    Back Text: 
                    <input type="text" name="back_text" onChange={handleChange} value={values.back_text} required={true}/>
                </label>
                <div className="addbutton">
                    <button type="submit" className="btn">Add Card</button>
                </div>
            </form>
            <br/>
        </div>
    )
}

export default CreateFlashcard;