import { Component } from "react";
import HalloWorld from "../halloWorld/HalloWorld";

export class ToggleName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display : true,
        }
    }
    toggleName = () => {
          this.setState((prevState) => {
            return {
                display: !prevState.display
            }
        })
    }
    render() {
        return <div>
            <button onClick={this.toggleName}>Button 1 </button> 
            {this.state.display.toString()}
            
            {

                this.state.display === true ?
                <HalloWorld lastName ={' Mennis'} />
                : 
                undefined
            }

        </div>
    }
} 