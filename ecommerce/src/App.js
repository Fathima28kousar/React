import Navbar from './components//navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import About from './components/about/About'
import Products from './components/products/Products'
import Productlist from './components/products/Productlist'
import items from './components/products/data'

const App = () => {
  return (
    <div>
      <Navbar/>
      
        <Switch>
            <Route path="/index" component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/contact"   component={Contact}/>
            <Route path="/cart"  component={Cart}/>
            <Route path="/products" component={Products}/>
        </Switch>
        <Footer/>
        <Productlist items={items}/>
    </div>
  )
}

export default App
