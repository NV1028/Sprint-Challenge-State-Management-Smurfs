import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import uuid from "uuid";
import { initialState, reducer } from "../reducer/reducer";

const SmurfForm = () => {
    const [newSmurfName, setNewSmurfName] = useState("");
    const [newSmurfAge, setNewSmurfAge] = useState("");
    const [newSmurfHeight, setNewSmurfHeight] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Add", newSmurfName, "to smurf list");

        // before dispatching - could add a if statement to
        // check if the new smurf is an empty string
        // or if the item already exists
        const duplicateCheck = state.map((itemFromList) => {

        })

        dispatch({ type: "ADD_SMURF", payload: newSmurfName });
        console.log(state);
    };

    const handleChangeName = e => {
        setNewSmurfName(e.target.value);
        console.log('name', newSmurfName);
    };

    const handleChangeAge = e => {
        setNewSmurfAge(e.target.value);
        console.log('age', newSmurfAge);
    };

    const handleChangeHeight = e => {
        setNewSmurfHeight(e.target.value);
        console.log('height', newSmurfHeight);
    };

    console.log(state);
    return (
        <div>
            <br></br>
            <form onSubmit={handleSubmit}>
                New Smurf To Add:
                <br></br>
                <br></br>
                <div>Name</div>
                <input type="text" name="name" onChange={e => handleChangeName(e)} />
                <br></br>
                <br></br>
                <div>Age</div>
                <input type="text" name="name" onChange={e => handleChangeAge(e)} />
                <br></br>
                <br></br>
                <div>Height</div>
                <input type="text" name="name" onChange={e => handleChangeHeight(e)} />
                <br></br>
                <br></br>
                <button
                    id="add-button"
                    className="submit-button"
                    type="submit">
                    Add
                 </button>
            </form>

        </div>
    );
};

export default SmurfForm;