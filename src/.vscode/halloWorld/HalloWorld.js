// method 1 to creat a component with function 
export default function halloWorld(props) {
    console.log(props);
    return (
        <h1>Hello  {props.lastName}</h1>
    );
}

// Anther method 2 to creat a component 
// import {Component} from "react";

// export default class HalloWorld extends Component {
//     render() {
//         return (
//             <h1>Hello World!</h1>
//         );
//     }
// }