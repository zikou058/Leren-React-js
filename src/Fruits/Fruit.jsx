export default function Fruit({fruits}) { 
    const displayFruits = () => fruits.map((fruit) => <li>{fruit}</li>)
    return <>
        <h1 className="h1" >Fruit :</h1>
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