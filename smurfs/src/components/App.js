import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import SmurfData from './SmurfData';
import axios from 'axios';
class App extends Component {

  
  render() {

    axios
            .get("http://localhost:3333/smurfs")
            .then(res => {
                console.log('res', res.data);
            })
            .catch(err => {
                console.log('err', err);
            })

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <SmurfForm />
        
      </div>
    );
  }
}

export default App;
