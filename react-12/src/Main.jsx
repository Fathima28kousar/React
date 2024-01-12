import React from 'react'
import TechList from './TechList'
import UserCard from './UserCard'
import Button from './Button'


const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
}


class Main extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs}/>
                        <UserCard user={this.props.user}/>
                        <Button text='Greet People' onClick={this.props.greetPeople} style={buttonStyles}/>
                        <Button text='Show Time' onClick={this.props.handleTime} style={buttonStyles}/>
                    </ul>
                </div>
            </main>
        )
    }
}
export default Main