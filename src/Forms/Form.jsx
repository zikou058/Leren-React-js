// import { Component } from "react";
import { useState } from "react";

 export default function Form() {
    // stock the value on stete :   
    const [name , setName] = useState('');
    const [age , setAge] = useState('')
 
    // input :
    const handeleNameInputChane = () => {
        const name =document.querySelector('#name').value
        setName(name)
    };
    const handelgeInputChane = () => {
        const age =document.querySelector('#age').value
        setAge(age) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            age
        })
    }
    return <div>
        <form>
            <input type="text" id="name" onChange={handeleNameInputChane} placeholder="Name"></input>
            <input type="number" id="age" onChange={handelgeInputChane} placeholder="number"></input>
            <input type="submit" onClick={handleSubmit} value="Submit"></input>
        </form>
    </div>
 }