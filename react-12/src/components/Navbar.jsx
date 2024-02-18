import {Link,BrowserRouter,Switch} from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = ({setShow}) => {
    return (
        <div>
            <BrowserRouter>
            <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
            <Link to='/index' className='navbar-brand' onClick={() => setShow(true)}>Logo</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to='/index' className='nav-link'>Products</Link></li>
                    <li><Link to='/index' className='nav-link icon' onClick={() => setShow(false)}><FaCartShopping/></Link></li>
                    <div className='counter'>1</div>
                </ul>
            </div>
        </nav>
        <Switch>
            {/* <Route path='/index' component={Produc}/> */}
        </Switch>
        </BrowserRouter>
        </div>
        
    )
}
export default Navbar