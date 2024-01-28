import React from 'react'
import employees from './data'
class Employee extends React.Component{
    constructor(props){
        super(props);
        this.employees = employees
    }
    render(){
        return<div>
            <h2>Employee Data</h2>
            <div className="container">
                <div className="row">
                    <div className="col-10">
                        <table className="table">
                            <thead>
                                <tr>
                                <th> Id</th>
                                <th> Name</th>
                                <th> Email</th>
                                <th> Gender</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.employees.map((emp) => {
                                        return<tr key={emp.id}>
                                            <td>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Employee