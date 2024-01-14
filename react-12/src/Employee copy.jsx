import React from 'react';
import Axios from 'axios';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
        console.log('first constructor');
    }

    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp) => {
                this.setState({
                    employees: resp.data
                });
            })
            .catch((err) => {
                console.log(err);
            });
        console.log('third did mount');
    }

    render() {
        console.log('second render method');
        return (
            <div>
                <pre>{JSON.stringify(this.state.employees)}</pre>
                <h2>Employee component</h2>
                {this.state.employees.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((emp) => (
                                <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <h2>No Data</h2>
                )}
            </div>
        );
    }
}

export default Employee;
