import React ,{useState} from 'react'

const Counter =() => {

    let [counter,setCounter] = useState(1)
    let decrHandler = () => {
        setCounter(counter-1)
    }
    return(
        <div>
            <h1>Counter</h1>
            <h2>Counter Value: {counter}</h2>
            <button onClick={()=>{setCounter(counter+1)}}>INCR/+</button>
            <button onClick={decrHandler}>DECR/-</button>
        </div>
    )
}
export default Counter