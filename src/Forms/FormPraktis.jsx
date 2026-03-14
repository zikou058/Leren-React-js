import  {useRef} from 'react'
import { useState } from 'react'
import  {useEffect}  from 'react'
export default function FormPraktis () {
    const inputNameRef = useRef();
    const inputEmailRef = useRef();
    const inputPaswordRef = useRef();
    const inputUsernameRef = useRef();
    const [valeur, setValeur] = useState({
        name : ''
    });

    const handleClick = () => {
      setValeur({
        name : inputNameRef.current.value,
        email : inputEmailRef.current.value
      })
      console.log("Email:",inputEmailRef.current.value)
      console.log("Name:",inputNameRef.current.value)
    }
    useEffect(() => {
      inputUsernameRef.current.focus(),
      inputPaswordRef.current.focus(),
    }, []);
    return (
        <div>
            <h2>objet: </h2>
            {JSON.stringify(valeur)}
            <div>
                <h5>Name :</h5><input id='name' ref={inputNameRef} type="text"/>
                <h5>Email: </h5><input type="email" ref={inputEmailRef}/>
                <h5>Password: </h5><input type="password" ref={inputPaswordRef}/>
                
            </div>
            <div>
                <button onClick={handleClick}>Show Value</button>
            </div>
        </div>
    )
}
