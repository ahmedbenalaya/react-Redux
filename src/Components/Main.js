import React from 'react'
import {connect} from 'react-redux'
import {Decrement, Increment, Reset} from '../store/actions/dic-inc'

const Main = (props) => {
    console.log(props)

    return (
        <div>
            <h1>{props.count}</h1>
           <button onClick={()=>{props.decrement()}}>-</button> 
           <button onClick={()=>{props.increment()}}>+</button> 
           <button onClick={()=>{props.reset()}}>reset</button> 
        </div>
    )
}
const mapDispatchToProps =(dispatch)=>{
    return{
        increment: ()=>{dispatch(Increment())},
        decrement: ()=>{dispatch(Decrement())},
        reset: ()=>{dispatch(Reset())}
    }
}
const mapStateToProps=(state)=>{
    return{
        state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main)