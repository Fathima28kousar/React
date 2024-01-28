import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import User from './User'
import Home from './Hooks/Counter'
const App =() => {

    return(
        <div>
            <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/userapi' component={User}/>  
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App