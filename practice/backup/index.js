import ReactDOM from 'react-dom'
import React from 'react'
import angelina from './images/angelina.jpg'


const image = (
    <div className='images'>
        <img src={angelina}/>
        <h3>Angelina Jolie <i class="fa-solid fa-circle-check"></i></h3>
        <p>Senior developer ,Finland</p>
    </div>
)

const main = (
    <main className='skills'>
        <h1>SKILLS</h1>
        <button>HTML</button>
        <button>CSS</button>
        <button>JS</button>
        <button>Sass</button>
        <button>React</button>
        <button>Redux</button>
        <button>Node</button>
        <button>MongoDB</button>
        <button>Python</button>
        <button>Flask</button>
        <button>Django</button>
        <button>Numpy</button>
        <button>Pandas</button>
        <button>Data Analysis</button>
        <button>MYSQL</button>
        <button>GraphQL</button>
        <button>Git</button>
        <button>Docker</button>
        <button>Gatsby</button>
        <button>D3.js</button>
    </main>
)

const footer = (
    <footer>
        <i class="fa-regular fa-clock"></i>
        <span>Joined on Aug 2021</span>
    </footer>
)

const app = (
    <div className='app'>
        {image}
        {main}
        {footer}
    </div>
)

const rootElement = document.querySelector('#root');
ReactDOM.render(app, rootElement);