import axios from 'axios';

export const FETCHING_SMURF_START = 'FETCHING_SMURF_START';
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_FAILURE = "FETCHING_SMURF_FAILURE";

export const getSmurf = () => dispatch => {
    //start the fetch
    

    //then do axios call
    axios
    .get("http://localhost:3333/smurfs")
        
        .then(res => {
            console.log('res', res.data);
            dispatch({ type: FETCHING_SMURF_SUCCESS, payload: res.data });
        })
       
}