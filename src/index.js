import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Counter from './Counter/Counter';
//import { ToggleName } from './toggle/toggleName';
import Counter from './Counter/Counter';
const root = ReactDOM.createRoot(document.getElementById('root'));
//const fruitsArray = ['Lemon', 'Stron', 'Tomate', 'Banan'];
root.render(
  <React.StrictMode>
    {/* <HalloWorld lastName='Zakaria' /> 
    <TextField inputName='firstName' inputLabel='firstname'> 
     Veuillez enter un first name
    </TextField>
    <TextField inputName='lastName' inputLabel='last name'>
      Veuillez enter un last name
    </TextField>
    <Fruit fruits={fruitsArray}/>  */}
    {/*<Counter /> */}
    {/* <Counter defaultValue={2} incrementBy={3} /> */}
    {/* <Form /> */}
    <Counter  />

  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

