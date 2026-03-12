import { useRef} from 'react'
export default function FormPraktis () {
    const inputRef = useRef();

    const handleClick = () => {
      alert(inputRef.current.value)
    }
    return (
        <div>
            <input ref={inputRef} type="text"/>
            <button onClick={handleClick}>Show Value</button>
        </div>
    )
}