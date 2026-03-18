import { useRef  } from 'react'
import { useState } from 'react'
export function FormValidationBeginner () {
    
    const nameField = useRef();
    const emailField = useRef();
    const messageField = useRef();
    const countryField = useRef();
    const acceptConditionsField = useRef();
    const [error, setError] = useState([]);

    const validateForm = () => {
      const nameValue = nameField.current.value
      const emailValue = emailField.current.value
      const messageValue = messageField.current.value
      const countryValue = countryField.current.value
      const acceptConditionsValue = acceptConditionsField.current.checked

      let isFormValid = true;
      
      if(nameValue.trime === '' ){ 
        setError( prevState => {
            return [...prevState, 'name required']
        })
        isFormValid = false
      }
      isFormValid = true
    }
      
    const handleSubmit = (e) => {
      e.preventDefault() 
      validateForm()
    }

    return (
    <div className={'container-fluid w-75 mx-auto my-5'}>
        <form onClick={handleSubmit}>
            <h1>Contact form</h1>
            <hr/>
            {/*<-- Name input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="name" >Name</label>
                <input type="text" id="name" className="form-control"ref={nameField} />
            </div>

            {/*<-- Email input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">Email address</label>
                <input type="text" id="email" className="form-control" ref={emailField} />
            </div>

            {/*<-- Message input -->*/}
            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="4" ref={messageField}   ></textarea>
            </div>

            {/*<-- Country select -->*/}
            <div className="form-group mb-4">
                <label>Country</label>
                <label htmlFor="country" ></label>
                <select className="form-control" id="country" ref={countryField}>
                    <option value=''>Select country</option>
                    <option value='MA'>Maroc</option>
                    <option value='DZ'>Algérie</option>
                    <option value='TN'>Tunisie</option>
                </select>
            </div>

            {/*<-- Checkbox -->*/}
            <div className="form-check mb-4">
                <div className="d-flex">
                    <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={acceptConditionsField}/>
                    <label className="form-check-label" htmlFor="acceptAllConditions">
                        Accept all conditions
                    </label>
                </div>
            </div>

            {/*<-- Submit -->*/}
            <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
        </form>
    </div>
    )
}