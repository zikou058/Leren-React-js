import { useEffect, useState } from 'react';
export default function Counter ({defaultValue, incrementBy}) {
    
    //Hooks
    //useState().... change the state
    //useEffect().... = fut component(didmount, update, willmount)
    
    const [count, setCount] = useState(defaultValue , incrementBy);
    const [time , setTime] = useState(new Date()) 
    let timer = null
     
    //evey time 
    // useEffect(() => { 
    //     console.log('evey render !')
    //     //setTime(new Date())

    // })
    //willmounted
    useEffect(() => {
        console.log('component mounted !')
        timer = setInterval(() =>{
            console.log('tick')
            setTime(new Date())
        },3000)
        return () => {
            clearInterval(timer) 
        }
        
    },[])
    //update
    useEffect(() => {
            console.log('age and count updated')
        },[ count ])

  
    return <div>    
        Date : <span>{time.toLocaleString()}</span> 
        <span>
            <button onClick={ () => { 
                setCount((defaultValue) => {
                    return defaultValue + 1;
            })}}> Click to Increment !! </button>

            <button onClick={ () => { 
                //console.log(incrementBy);
                setCount((incrementBy) => {
                    return 0; 
                });
            }}> Reset </button>
            Il y a {count} secondes
        </span>
    </div>
}





// class : 
/*
import {Component} from "react";
export default class Counter extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            counter: 0,
            age : 15
        }
        console.log('Hi Constructor')
    }
     getSnapshotBeforeUpdate(prevProps, prevState) {
        const scroll = {x:window.scrollX, y:window.scrollY}
        return scroll;
    }

    componentDidMount() {
        // fetch API:
        console.log('component mounted')
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        window.scroll(snapshot.x+50, snapshot.y+50)
        console.log(snapshot)
    }

    schouldComponentUpdate(nextProps, nextState ,nextContext) {
        console.log(nextState.this.state)
        if (nextState !== this.state) {
            return false;
        }
        return false ;
    }

    handleReset = () => { 
        this.setState((prevState) => {
        return { counter: 0} 
        });
    }

    handleClick = () => {
        this.setState((prevState) => { 
           return { counter: prevState.counter + 1}
        });
    }

    render() {
        console.log('Hi Render')
        return(
            <div>
            <button onClick={this.handleClick}> Click to Increment !! </button>
            <button onClick={this.handleReset}> Reset </button>
                Il y a {this.state.counter} secondes
            </div>
        )
    }
}       */