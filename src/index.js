import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculetor';
import * as serviceWorker from './serviceWorker';
import {ReactComponent as logo} from './logo.svg';
ReactDOM.render(<div><img src={logo} width="150" height="150" className="App-logo" alt="logo" /><h1>Calculator Online</h1><Calculator /></div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
