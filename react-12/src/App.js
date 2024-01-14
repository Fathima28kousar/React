import React from 'react'
import Header from './Header'

class App extends React.Component{
    state = {
        loggedIn : false,
    }

   render(){

    const data = {
        welcome: '30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
        date: 'Oct 9, 2020',
    }
    let status;
    if (this.state.loggedIn) {
        status = <h3>Welcome to 30 Days Of React</h3>
    } else {
        status = <h3>Please Login</h3>
    }
    return<div>
        <Header data={data} />
        {status}
    </div>
   }
}
export default App