import React from 'react'
import html from './images/html.png'
import css from './images/css.png'
import js from './images/js.png'
import reacts from './images/react.png'

const title = (
    <div>
        <h2>Frontend technologies</h2>
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to recieve news and updates</p>
        <button>Subscribe</button>
    </div>
)

const imageStyle = {
    height: '200px',
}

const inputElements = (
    <div className='inputs'>
        <input type='text' placeholder='first Name'/>
        <input type='text' placeholder='last Name'/>
        <input type='email' placeholder='Email'/>
    </div>
)


const skills = ['HTML','CSS','JS']
const getUserInfo = (firstName,lastName,country,title,skills) => {
    return `${firstName} ${lastName}, ${title} developer is from ${country} .Knows skills ${skills.join('')}`
}
const userInfo = getUserInfo('fathima','kousar','india','software developer',skills)

class App extends React.Component{
    render(){
        return(
            <div>
                {userInfo}
                <h1>Hello</h1>
                {title}
                <img src={html} alt='html' style={imageStyle}/>
                <img src={css} alt='css' style={imageStyle}/>
                <img src={js} alt='js' style={imageStyle}/>
                <img src={reacts} alt='reacts' style={imageStyle}/>
                {inputElements}
                {userInfo}
            </div>
        )
    }
}
export default App