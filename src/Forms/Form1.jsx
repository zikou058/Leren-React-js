import { useState } from 'react'
export default function Form1() {


    const [formValues, setFormValues] = useState({
        name:'',
        age:'',
        country:'MA',
        accept:'undefinde'

    });

    const handleChange = (e) =>{
        const currentTarget = e.currentTarget
        const id = currentTarget.id
        let value = currentTarget.value

        if(currentTarget.type == 'checkbox'){
             value = currentTarget.checked
        }
        setFormValues( (prevState) => {
            return {...prevState, ...{[id]: value}}
            
        })
        console.log(formValues)
    }
    
    return <div className={'container my-4'}>
        <form className="container my-10">
            ON BASE DONNE: {JSON.stringify(formValues)}
             <div className="form-group">
              <label>Name</label>
              <input type="text" id="name" className='form-control' onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Age</label> 
              <input type="text" id="age" className="form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label>Country</label> 
              <label htmlfor="country"></label>
              <select className="form-control" id="country" onChange={handleChange} >
                    <option value="MA">Maroc</option>
                    <option value="BE">Berlin</option>
                    <option value="US">USA</option>
                    <option value="CA">Canada</option>
                    <option value="OT">Other</option>
              </select>
            </div>
            <div className="form- check">
                <input type="checkbox" id="accept" className="form-check-input" onChange={handleChange}/>
                <label htmlFor="accept" className="form-check-label">Accept our rules</label>
            </div>
            <div className="form-group">
                <button className="btn btn-primary" onClick={handleClick}>Save</button>
            </div>
        </form>
    </div>
}




// how to inputet form "forms" with fucntion 