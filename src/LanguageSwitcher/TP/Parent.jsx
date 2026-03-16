import Child from "./Children"
import { useState } from 'react'

export default function Parent() {
    // const recivData = (data) => {
    //   console.log("Data Form Child :" ,data)
    // }
    // return( const recivData = () => {
    //     <div>
    //         <h1>Parent Component </h1>
    //         <Child sendData={recivData} />
    //     </div>
    // )

    // const handleNumber = (num) => {
    //     console.log('Result:', num*2)
      
    // }
    // return( 
    //     <Child sendNumber={handleNumber} />
    // )

    // const [count, setCount] = useState(0);

    // const add = () => {
    //   setCount( perv => perv + 1)
    // }
    // const rest = () => {
    //   setCount(0)
    // }
    // const addd = () => {
    //   setCount(count -1 )
    // }

    // return(
    //     <div>
    //         <h3>Count : {count}</h3>
    //         <Child add={add}  rest={rest} addd={addd}/>
    //     </div>
    // )
    const [user, setUser] = useState({});

    const handleForm = (data) => {
      setUser(data)
    }

    return(
        <div>
            <h3>parent Component</h3>
            <Child sendData={handleForm}/>  
            <h3> Data From Child</h3>
            <p> Name : {user.name}</p>
            <p> Email : {user.email}</p>
        </div>
    )


}