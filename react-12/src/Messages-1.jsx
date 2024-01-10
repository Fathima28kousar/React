import React from 'react'
class Message extends React.Component{
    constructor(props){
        super(props)
        console.log('First Constructor')
        this.state = {
            msg: 'Hello'
        }
    }
    gmHandler = () => {
        this.setState({msg:'Good Morning!'})
    }
    gaHandler = () => {
        this.setState({msg:'Good Afternoon!'})
    }
    geHandler = () => {
        this.setState({msg:'Good Evening!'})
    }
    gnHandler = () => {
        this.setState({msg:'Good Night!'})
    }
    render(){
        console.log('Second Return')
        return<div>
            <h1>Message Component</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Value : {this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.geHandler}>GE</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message