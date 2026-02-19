import { useState } from "react"

export default function FruitList() { 
    const displayFruits = () => fruitList.map((fruit,fruitKey) =>  <li key={fruitKey}>{fruit}</li>)
    const [fruit ,setFruit] = useState('');
    const [fruitList, setFruitList] = useState([]);    

    const handeleFruitChange = (e) => {
        e.preventDefault();
        const fruitValue = document.querySelector('#fruit').value
        setFruit(fruitValue)
    }
    const handeleSubmit = (e) => {
        e.preventDefault();
        // Push on React : 
        setFruitList([...fruitList, fruit])
        // To Change the old value of input :
        document.querySelector('ul').innerHTML += ('<li>jaj</li>')
    }
    return <>
        <h1 className="h1" >AUTOS :</h1>
        <span>
            <from>
                <input onChange={handeleFruitChange} type="text" id="fruit" placeholder="Fruit" />
                <input onClick={handeleSubmit} type="submit" value='Add Fruits'/>
            </from>
        </span>
        <ul>
            {displayFruits()}
        </ul>
       
    </>
}
//with class :
// import {Component} from "react";

// export default class TextField extends Component {
//     render(){
//         const displayFruits = (fruit) => this.props.fruits.map((fruit) => <li>{fruit}</li>)
//         return
//         <>
//             <h1>Fruit :</h1>
//             <ul>
//                 {displayFruits()}
//             </ul>
//         </>
//     }
// }