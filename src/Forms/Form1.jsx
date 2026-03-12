import { useState } from 'react';
import React, { useEffect } from "react";
import { useRef } from 'react'
export default function Form1() {
    
    const inputNameRef = useRef();
    const inputDateRef = useRef();
    const inputCountryRef = useRef();
    const inputAcceptConditionsRef = useRef();

    const [formValues, setFormValues] = useState({
        name:'',
        age:'',
        country:'MA',
        accept:'undefinde'

    });
    useEffect(() =>{
        inputNameRef.current.focus()
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
            const dd = String(today.getDate()).padStart(2, '0');
        inputDateRef.current.value = `${yyyy}-${mm}-${dd}`;
        inputCountryRef.current.value  = 'BE';
        
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault(); 
        setFormValues({
            name : inputNameRef.current.value,
            date : inputDateRef.current .value,
            country : inputCountryRef.current.value,
            accept : inputAcceptConditionsRef.current .value
        })
    }; 
    return <div className={'container my-4'}>
        <form className="container my-10">
            <div><h1>Time :</h1>{(new Date()).toLocaleString()}</div>
            <div><h1>Valeur :</h1>
                {JSON.stringify(formValues)}
            </div>
             <div className="form-group">
              <label>Name</label>
              <input type="text" id="name" className='form-control' ref={inputNameRef}/>
            </div>
            <div className="form-group">
              <label>Age</label> 
              <input type="date" id="date" className="form-control" ref={inputDateRef}/>
            </div>
            <div className="form-group">
              <label>Country</label> 
              <label htmlfor="country"></label>
              <select className="form-control" id="country" ref={inputCountryRef} >
                    <option value="MA">Maroc</option>
                    <option value="BE">Berlin</option>
                    <option value="US">USA</option>
                    <option value="CA">Canada</option>
                    <option value="OT">Other</option>
              </select>
            </div>
            <div className="form- check">
                <input type="checkbox" id="accept" className="form-check-input" ref={inputAcceptConditionsRef}/>
                <label htmlFor="accept" className="form-check-label">Accept our rules</label>
            </div>
            <div className="form-group">
                <button onClick={handleSubmit} className="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
}
