import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './website/Home'
import Contact from './website/Contact'
import Services from './website/Services'
import About from './website/About'
import Message from './Hooks/Message'
import Counter from './Hooks/Counter'
import Product from './Hooks/Product'
class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path='/index' component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/services' component={Services} />
                    <Route path='/about' component={About} />
                    <Route path='/message' component={Message}/>
                    <Route path='/counter' component={Counter}/>
                    <Route path='/product' component={Product}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
export default App