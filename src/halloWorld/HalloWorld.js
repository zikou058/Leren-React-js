// method 1 to creat a component with function 
export default function halloWorld({lastName}) {
      const age = 15;
    return(age ? <h1>Hallo{lastName} Adult</h1> :<h1>Hallo{lastName} Child</h1> )
}

// Anther method 2 to creat a component 
// import {Component} from "react";

// export default class HalloWorld extends Component {
//     render() {
//         return <h1> hallo{this.propsl.lastName}</h1>  
//     }
// }