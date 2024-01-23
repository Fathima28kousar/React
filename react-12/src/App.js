import React from 'react'
import User from './User'
import Product from './Product'
class App extends React.Component{

    render(){
        return(
            <div>
                <h1>App component!</h1>
                <User/>
                <Product/>
            </div>
        )
    }
}
export default App