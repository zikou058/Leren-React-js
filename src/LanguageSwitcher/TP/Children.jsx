import { useState } from 'react'
export default function Child ({ sendData}){
    // const handleClick = () => {
    //   props.sendData(props)
    // }
    // return(
    //     <button onClick={handleClick}>
    //         Send Data
    //     </button>
    // )
    //EX 2

    // const [text, setText] = useState();

    // const handleClick = () => {
    //   sendNumber(text)
      
    // };
    // const handleChange = (e) => {
    //   setText(e.target.value)
    // }
    

    // return(
    //     <div>
    //         <input type="number" onClick={handleChange}/>
    //         <button onClick={handleClick}>Send Data</button>
    //     </div>

    // );
    
    // ex 4: 

    // return <div>
    //     <button onClick={add}> Add +</button>
    //     <button onClick={rest}> Rest </button>
    //     <button onClick={addd}> Add - </button>
    // </div>

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const hanleName = (e) => {
      setNagitme(e.target.value)
    }
    const handleEmail = (e) => {
      setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name)
      sendData({
        name : name, 
        email : email
      })
    }

    return(
        <form>
            <input type="text" placeholder='name' onClick={hanleName}/>
            <input type="email" placeholder='email' onClick={handleEmail}/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )

}


