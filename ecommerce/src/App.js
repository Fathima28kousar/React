import Navbar from './components//navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import About from './components/about/About'

const App = () => {
  return (
    <div>
      <Navbar/>
      
      <Switch>
            <Route path="/index" component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/contact"   component={Contact}/>
            <Route path="/cart"  component={Cart}/>

        </Switch>
        <Footer/>
    </div>
  )
}

export default App
