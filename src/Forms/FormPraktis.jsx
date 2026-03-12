import { useRef} from 'react'
import { useEffect } from 'react'
export default function FormPraktis () {
    const inputRef = useRef();

    const handleClick = () => {
      alert(inputRef.current.value)
    }
    useEffect(() => {
      name: inputRef.current.fucus()
      
    }, []);
    return (
        <div>
            <input id='name' ref={inputRef} type="text"/>
            <button onClick={handleClick}>Show Value</button>
        </div>
    )
}