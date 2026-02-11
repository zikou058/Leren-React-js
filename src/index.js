import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import HalloWorld from './halloWorld/HalloWorld';
import reportWebVitals from './reportWebVitals';
import TextField from './Forms/TextField';
import Fruit from './Fruits/Fruit';
import Counter from './Counter/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const fruitsArray = ['Lemon', 'Stron', 'Tomate', 'Banan'];
root.render(
    <Counter />

  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
