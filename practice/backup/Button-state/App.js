import React from 'react'

class App extends React.Component{

    state = {
        count: 0,
    }
    addHandler = () =>{
        this.setState({ count: this.state.count + 1 }) 
    }

    subHandler = () =>{
        this.setState({ count: this.state.count - 1})
    }
    render(){
        const count = this.state.count
        return(
            <div className='App'>
                <h1>{count}</h1>
                <button className='btn btn-success' onClick={this.addHandler}>+</button>
                <button className='btn btn-danger' onClick={this.subHandler}>-</button>
            </div>
        )
    }

}
export default App