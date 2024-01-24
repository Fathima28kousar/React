import React from 'react'
class App extends React.Component {
    state =  {
        uname:'',
        email:'',
        password: ''
    }

    emailHandler = (evt) => {
        this.setState({
            email: evt.target.value
        })
    }

    passwordHandler = (evt) => {
        this.setState({
            password:evt.target.value
        })
    }


    render(){
        return(
            <div className='mt-5'>
                <pre>{JSON.stringify(this.state)}</pre>
                <form>
                    <label>Email Id:</label>
                    <input type='text' onChange={this.emailHandler}/> <br/>
                    <label>Password</label>
                    <input type='password' onChange={this.passwordHandler}/> <br/>
                    <input type='submit' value='login'/>
                </form>
            </div>
        )
    }
}
export default App