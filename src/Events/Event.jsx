// export default function Event() {
//     const  handleClick = () => {
//         console.log(this)
//         alert('Button clicked!'); 
//     }

//     return <div>
//         <button onClick ={handleClick}>
//            click me 
//         </button>
//     </div>
// }

// event jsx in class 
import { Component } from 'react';

export default class Event extends Component {

    handleClick = () => {
        console.log(this)
        alert('Button clicked!')
    };
    
    render() {
        //console.log(handleClick)
        return <div>
            <button onClick={this.handleClick} >click me !</button>
        </div>
    } 
}