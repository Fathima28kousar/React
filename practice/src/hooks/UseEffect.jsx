import {useEffect,useState} from 'react'

const UseEffect = () => {
    const [counter,setCounter] = useState(0);
    const [counter1,setCounter1] = useState(20);

    // useEffect(() => {
    //     console.log('useEffect is called')

    //     return () => {
    //         // Code to run on unmount
    //         console.log("Component is unmounted");
    //       };
   
    // },[counter,counter1])
    const increment = () =>{
        setCounter(counter+1)
    }
    const Incremented = () =>{
        for(let i=0;i<10;i++){
            setCounter1(preCount => preCount +1)
        }
    }
    return(
        <div>
            <h1>{counter}</h1>
            <h1>{counter1}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={Incremented}>Incremented</button>
        </div>
    )
}
export default UseEffect