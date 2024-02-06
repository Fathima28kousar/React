import React,{useState} from 'react'

const UseState = () => {
    const [inputValue,newChangeValue] = useState('Fathima');
    const onchange =(event) =>{
        const newVal = event.target.value;
        newChangeValue(newVal)
    }
  return (
    <div>
        <h1>{inputValue}</h1>
      <input type='text' value={inputValue} placeholer='type something........' onChange={onchange}/>
    </div>
  )
}

export default UseState
