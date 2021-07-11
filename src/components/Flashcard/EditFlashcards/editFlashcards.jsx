import React, { useState } from 'react';
import axios from 'axios'
import FormHandler from '../../Collections/FormHandler/formHandler';


const EditFlashcard = (props) => {
    const { values, handleChange, handleSubmit } = FormHandler(() => editCard(props.flashcards.id, values));
    const [setFlashcards] = useState(props.flashcards);

    async function editCard(id, values) {
        const editFlashcard = {collection: props.flashcards.collection, ...values};
        try{
            let response = await axios.put(`http://127.0.0.1:8000/collection/flashcards/${id}/${id}/`, editFlashcard)
        setFlashcards(response.data)
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="editcard">
            <h6>Edit Flashcard: </h6>
            <form onSubmit={handleSubmit}>
                <label>
                    Collection Id: 
                    <input type="text" name="collection" onChange={handleChange} value={values} required={true}/>
                </label>
                <label>
                    Front Text: 
                    <input type="text" name="front_text" onChange={handleChange} value={values.front_text} required={true}/>
                </label>
                <label>
                    Back Text: 
                    <input type="text" name="back_text" onChange={handleChange} value={values.back_text} required={true}/>
                </label>
                <br/>
                <div className="editbutton">
                    <button type="submit" className="btn">Edit</button>
                </div>
            </form>
            <br/>
        </div>
    )
    

}

export default EditFlashcard;