import React from 'react'
class Salary extends React.Component{
    state = {
        salary: 5000
    }
    updateSalaryHandler = (value) => {
        this.setState({
            salary:value
        })
       
    }
    render(){
        return<div>
            <h3>Salary Component</h3>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Employee Salary:{this.state.salary}</h3>
            <button onClick={this.updateSalaryHandler.bind(this,10000)}>Hike 5k</button>
            <button  onClick={this.updateSalaryHandler.bind(this,15000)}>Hike 10k</button>
            <button  onClick={this.updateSalaryHandler.bind(this,1)}> Hike 1</button>
            
        </div>
    }
}
export default Salary