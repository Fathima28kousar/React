import React from 'react'
class Student extends React.Component{
    componentWillUnmount(){
        alert("Student component is removed")
    }
    render(){
        return(
            <div>
                <h1>Student component</h1>
            </div>
        )
    }
}
export default Student