import {BrowserRouter,Link,Switch,Route} from 'react-router-dom'
import {FaCartShopping} from 'react-icons/fa6'
// import Hello from './Hello'
import Cart from './Cart'
import Amazon from './Amazon'

const Navbar = ({setShow,size}) => {
  return (
    <div>
      <BrowserRouter>
      <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
        <Link to='/index' className='navbar-brand' >Logo</Link>
        <div className='ml-auto'>
            <ul className='navbar-nav'>
                <li><Link to='/index' className='nav-link' >Products</Link></li>
                <li><Link to='/cart' className='nav-link' ><FaCartShopping/></Link></li>
                <div className="counter">{size}</div>
            </ul>
        </div>
      </nav>
      <Switch>
            <Route path="/index" component={Amazon}/>
            <Route path="/Cart" component={Cart}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Navbar
