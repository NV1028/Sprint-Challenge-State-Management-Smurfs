import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import uuid from "uuid";
import { initialState, reducer } from "../reducer/reducer";
import axios from 'axios';
import { getSmurf } from '../actions/index'
import { connect } from 'react-redux';


const SmurfForm = () => {
    const [newSmurfName, setNewSmurfName] = useState("");
    const [newSmurfAge, setNewSmurfAge] = useState("");
    const [newSmurfHeight, setNewSmurfHeight] = useState("");
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = e => {
        e.preventDefault();
        console.log("Add", newSmurfName, "to smurf list");
        const newSmurf = {
            name: newSmurfName,
            age: newSmurfAge,
            height: newSmurfHeight,
            id: uuid()
        }
        dispatch({ type: "ADD_SMURF", payload: newSmurf });
        console.log(state);

        axios.post('http://localhost:3333/smurfs', {
            name: newSmurf.name,
            age: newSmurf.age,
            height: newSmurf.height,
            id: uuid()
        })
       

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

            {state.map(itemFromList => {
                console.log(itemFromList.name);
                return (
                    <div
                        key={itemFromList.id}
                        id={itemFromList.name}
                    >
                        {itemFromList.name}
                    </div>
                );
            })
            }
            <button id="add-button"
                    className="submit-button"
                    onClick={getSmurf}>Get Smurf Button</button>

        </div>
    );


};

export default SmurfForm;