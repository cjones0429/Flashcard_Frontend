import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../../Collections/FormHandler/formHandler';
import './editFlashcards.css'


const EditFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(() => editCard(props.flashcards.id, values));
    const [setFlashcards] = useState(props.flashcards);

    async function editCard(id, values) {
        const editFlashcard = {collection: props.flashcards.collection, ...values};
        try{
            let response = await axios.put(`http://127.0.0.1:8000/collection/flashcards/`, editFlashcard)
        setFlashcards(response.data)
        }
        catch (err) {
            console.log(err);
            console.log("error editing flashcard")

        }
    }

    return (
        <div className="editcard">
            <h4><u>Edit Flashcard: </u></h4>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection I.D: <input type="text" name="collection" placeholder="enter collection I.D..." onChange={handleChange} value={values.id} required={true}/>
                </label>
                <br/>
                <br/>
                <label>
                    Front Text: <input type="text" name="front_text" placeholder="enter front text..." onChange={handleChange} value={values.front_text} required={true}/>
                </label>
                <br/>
                <br/>
                <label>
                    Back Text: <input type="text" name="back_text" placeholder="enter back text..." onChange={handleChange} value={values.back_text} required={true}/>
                </label>
                <br/>
                <br/>
                <div className="editbutton">
                    <button type="submit" className="btn btn-primary">Edit</button>
                </div>
            </form>
        </div>
    )
    

}

export default EditFlashcard;