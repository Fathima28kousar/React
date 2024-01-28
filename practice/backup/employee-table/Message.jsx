import React from 'react'

class Message extends React.Component{
    constructor(props){
        super(props)
        console.log("First Constructor")
        this.state = {
            msg: 'Hello'
        }
    }
    updateHandler = (value) => {
        this.setState({msg: value})
    }
    render(){
        console.log("Second Return")
        return <div>
            <h1>Message Component</h1>
            <h3>Message Value:{this.state.msg}</h3>
            <button onClick={this.updateHandler.bind(this,' Good Morning!')}>GM</button>
            <button onClick={this.updateHandler.bind(this,' Good AfterNoon!')}>GA</button>
            <button onClick={this.updateHandler.bind(this,' Good Evening!')}>GE</button>
            <button onClick={this.updateHandler.bind(this,' Good Night!')}>GN</button>
        </div>
    }
}
export default Message