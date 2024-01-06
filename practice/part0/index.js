import React from 'react'
import ReactDOM from 'react-dom'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import reacts from './images/react.png'


const title = (
    <div className='title'>
        <h2>Frontend technologies</h2>
    </div>
    
    )
// image
const imageStyle = {
    height: '200px',
    
}
const user = (
    <div className='user'>
        <img src={html} alt='html' style={imageStyle}/>
        <img src={css} alt='css' style={imageStyle}/>
        <img src={js} alt='js' style={imageStyle}/>
        <img src={reacts} alt='react' style={imageStyle}/>
    </div>
)


// main
const subtitle =(
    <div className='subtitle'>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to recieve news and updates</p>
    </div>
)

const inputElements = (
    <div className='inputs'>
        <input type='text' placeholder='first Name'/>
        <input type='text' placeholder='last Name'/>
        <input type='email' placeholder='Email'/>
    </div>
)

const buttonElement = (
    <div className='buttons'>
        <button>Subscribe</button>
    </div>
)



const rootElement = document.getElementById('root')
const app = (
    <div className='app'>
        {/* {title}
        {user} */}
        {subtitle}
        {inputElements}
        {buttonElement}
    </div>
)



ReactDOM.render(app, rootElement)
