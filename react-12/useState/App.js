import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/Home/About'
import Contact from './components/Home/Contact'

class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
              <Navbar/>
              <Switch>
                <Route path='/index' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact' component={Contact}/>
              </Switch>
            </BrowserRouter>
        )
    }
}
export default App