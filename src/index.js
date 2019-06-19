import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculetor';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
<div>
    <img src="https://raw.githubusercontent.com/lnsantos/CalculatorOnline/master/visualArt/logo.png" className="App-logo" alt="logo" />
    <h1>Calculator Online</h1>
    <Calculator />
</div>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
