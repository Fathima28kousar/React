import React from 'react'
class App extends React.Component{
  state = {
    firstName: '',
    message: '',
    charCount: 0,
    
  }
  //first Event
  handleClick = (e) =>{
    this.setState({
      message: 'welcome to the world of events!'
    })
    // console.log(e)
  }
  //second Event
  handleMouseMove = (e) => {
    this.setState({message: 'mouse is moving!'})
    
  }
  //third Event
  handleChange = (e) =>{
    this.setState({
      firstName: e.target.value,
      message: e.target.value,
    })
    // console.log(e)
  }
  //fourth Event
  handleKeyPressed = (e) => {
    this.setState({
      message: `${e.target.value} has been pressed and the keycode is ${e.key} and length is ` + e.target.value.length,
    })
    console.log(e)
  }
  //fifth Event
  handleBlur = (e) => {
    this.setState({message: 'Input field has been blurred' })
  }
  //sixth Event
  handleCopy = (e) => {
    this.setState({
      message: 'Using 30 Days Of React for commercial purpose is not allowed',
    })
    // console.log(e)
  }
  //seventh Event
  handleSubmit = (e) => {
    this.setState({
      message: 'Submitted!',
    })
    alert('The form is submitted')
    // console.log(e)
    e.preventDefault()
  }
  // eight event
  handleMouseEnter = () =>{
    this.setState({message:'hover'})
  }
  render(){
    return(
      <div>
        <h1>Welcome to 30 days of React</h1>
        <pre>{JSON.stringify(this.state)}</pre>
        <button onClick={this.handleClick}>Click Me</button>
        <hr/>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <hr/>
        <p onCopy={this.handleCopy}>Check copy right permission by copying this text</p>
        <hr/>
        <h1>Message: {this.state.message}</h1>
        <hr/>
        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>FirstName: </label>
            <input onChange={this.handleChange} name='firstName' value={this.setState.value}/>
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
        <p onMouseEnter={this.handleMouseEnter}>Hover here let's see what happens</p>
        <input type="text" onKeyDown={this.handleKeyPressed} placeholder="Press a key..."
      />
      </div>
    )
  }
}
export default App