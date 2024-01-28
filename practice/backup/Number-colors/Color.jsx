import React from 'react'
const headerStyles = {
    textAlign: 'center',
    marginTop: '10px'
}
const main_styles = {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center'
}

const styles = {
    height: '81vh',
    width: '73.5vw',
    marginTop: '3rem',
    display: 'flex',
    flexWrap: 'wrap',
}

const evenStyles = {
    backgroundColor: 'lightGreen',
    height:'20vh',
    width: '9vw',
    margin:'0px 1px 0px 1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
}
const oddStyles = {
    backgroundColor: 'rgb(255, 213, 128)',
    height:'20vh',
    width: '9vw',
    margin:'0px 1px 0px 1px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
}

const isPrime = (num) => {
    if(num <= 1) return false;
    for (let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

const Box = ({number}) => {
    const isEven = number % 2 ===0;
    const prime = isPrime(number);
    return (
        <div className='minbox' style={{
            ...isEven ? evenStyles : oddStyles,
            ...(prime && {backgroundColor: 'rgb(255,127,127)'})
        }}> 
        <h1>{number}</h1>
        </div>
    )
}

class Color extends React.Component{
    render(){
        const numberOfBoxes = 32;
        const smallBoxes = Array.from({length:numberOfBoxes},(_,index)=> (
            <Box key={index} number={index}/>
        ))
        return<div>
            <div className='Header' style={headerStyles}>
            <h1>30 Days of React</h1>
            <h4>Number Generator</h4>
            </div>
            
            <div className='main' style={main_styles}>
            <div className='Bigbox' style={styles}>
                {smallBoxes}
            </div>
            </div>
        </div>

    }
}
export default Color