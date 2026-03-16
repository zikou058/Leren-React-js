import { useState } from 'react'
export default function Child ({ add, rest , addd }){
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

    return <div>
        <button onClick={add}> Add +</button>
        <button onClick={rest}> Rest </button>
        <button onClick={addd}> Add - </button>
    </div>
}


