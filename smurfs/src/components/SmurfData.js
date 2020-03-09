import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import uuid from "uuid";
import { initialState, reducer } from "../reducer/reducer";
import axios from 'axios';

const SmurfData = () => {
    //then do axios call
    return (
    axios
    .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log('res', res.data);
        //    const smurfName = res.data[0].name
        //     console.log(smurfName);
        //     res.data.map(itemFromList => {
        //         return (
        //           <div>
        //             {itemFromList.name}
        //           </div>
        //         );
        //       })
        })
        .catch(err => {
            console.log('err', err);
        })
    // return (
    //     <div>
    //     <div>Data</div>
    //    {smurfName}
    //     </div>
    // )
    )
};

export default SmurfData;