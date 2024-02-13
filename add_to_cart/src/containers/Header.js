import { Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';

const Header = () => {
  return (
    <div>
      <BrowserRouter>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
          <Link className='navbar-brand' to='/'>
            Fake shop
          </Link>
          <div className='ml-auto'>
            <ul className='navbar-nav'>
              <li><Link className='nav-link' to='/'>Products</Link></li>
              <li><Link className='nav-link' to='/product/:productId'>Details</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route  exact path='/' component={ProductListing} />
          <Route exact path='/product/:productId' component={ProductDetail} />
          <Route>404 not found</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Header;
