import React from "react";
import { Link, BrowserRouter, Switch } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";


const Navbar = ({ setShow, size, updatedAmount }) => {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
          <Link to="/" className="navbar-brand" onClick={() => setShow(true)}>
            Logo
          </Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
              <li>
                <Link to="/" className="nav-link" onClick={() => setShow(true)}>Products</Link>
              </li>
              <li>
                <Link to="/cart" className="nav-link icon" onClick={() => setShow(false)}>
                  <FaCartShopping />
                </Link>
              </li>
              <div className="counter">{size}</div>
            </ul>
          </div>
        </nav>
        <Switch>
            
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
