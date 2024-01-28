import React from 'react'
import ReactDOM from 'react-dom'
import angelina from './images/angelina.jpg'


// Header componenet
const Header = () => (
    <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
)

// User card componenet
const UserCard = () => (
    <div className='user-card'>
        <img src={angelina}/>
        <p>Angelina jolie</p>
    </div>
)

// Tech list component
const Techlist = () => {
    const techs = ['HTML','CSS','JS']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}
    
// Main component
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>PreRequisites to get started with react.js:</p>
            <ul>
                <Techlist />
            </ul>
            <UserCard />
        </div>
    </main>
)

// footer component
const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright 2020</p>
        </div>
    </footer>
)

// Hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i=0 ; i<=5; i++){
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
        console.log(str[index])
        console.log(Math.random() * str.length);
    }
    return '#' + color
}
const HexaColor = () => {
    const bgColor = hexaColor()
    const styles = {
      height: '100px',
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      fontFamily: 'Montserrat',
      margin: '2px auto',
      borderRadius: '5px',
      width: '75%',
      border: '2px solid black',
      backgroundColor: bgColor,
    }
    

    return (
      <div style={styles}>
        <h2>{bgColor}</h2>
        
      </div>
      
    )
  }

const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: 'green',
    border: 'none',
    borderRadius: '5px',
    color: 'white'
}

const Button = () => <button style={buttonStyles}>action</button>

const App = () => (
    <div className='app'>
        <Header/>
        <HexaColor/>
        <Main/>
        <Button/>
        <Footer/>
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
