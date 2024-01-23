import React from 'react'
import Axios from 'axios'

class User extends React.Component {
    state = {
      users:[]
    }
    getUserDataHandler = () =>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) =>{
            console.log(response)
            console.log(response.data)
            console.log(response.data[0].name)
            console.log(response.data[0].id)
            console.log(response.data[0].username)
            this.setState({users:response.data})
        })
        .catch((error) =>{})
    }
    render(){
        const {users} = this.state
        return(<div>
            <h1>User component!</h1>
            <button onClick={this.getUserDataHandler}>Click</button>
            <pre>{JSON.stringify(this.state)}</pre>
            {users.length > 0 && (
                    <div>
                        <h2>User Details:</h2>
                        {users.map((user) => (
                            <div key={user.id}>
                                <p>Name: {user.name}</p>
                                <p>ID: {user.id}</p>
                                <p>Username: {user.username}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                )}
            
        </div>)
    }
  }
  
  export default User