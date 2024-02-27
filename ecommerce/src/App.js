import Navbar from './components//navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css'
import {Switch,Route} from 'react-router-dom'
import Home from './components/home/Home'
import Contact from './components/contact/Contact'
import Cart from './components/cart/Cart'
import About from './components/about/About'
import Product from './components/products/product/Product'
import Everything from './components/everything/Everything'
import Groceries from './components/groceries/Groceries'
import ProductDetail from './components/products/productDetail/ProductDetail'


const App = () => {
  return (
    <div>
      <Navbar/>
      
        <Switch>
            <Route path="/index" component={Home}/>
            <Route path="/about"  component={About}/>
            <Route path="/contact"   component={Contact}/>
            <Route path="/cart"  component={Cart}/>
            <Route path="/product" component={Product}/>
            <Route path="/everything" exact component={Everything}/>
            <Route path="/Groceries" component={Groceries}/>
            <Route path="/productDetail/:id" component={ProductDetail} />
        </Switch>
        <Footer/>
    </div>
  )
}

export default App
