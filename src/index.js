import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Event from './TP/Event/Event.jsx';
//import Store from './TP/store/Store'
//import Product from './TP/ProductList';
//import ProductList from './TP/ProductList';
//import Appp from './test_bootstrap/Appp';
//import Counter from './Counter/Counter';
//import { ToggleName } from './toggle/toggleName';
// import Counter from './Counter/Counter';

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
    {/* <Counter defaultValue={0} /> */}
    {/* <ProductList />  */}
    {/* <Store />  */}
    <Event />

  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

