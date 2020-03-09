import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from '../src/reducer/reducer';

const store = createStore(reducer, applyMiddleware(thunk))



ReactDOM.render(<App />, document.getElementById("root"));

