// import React, {useState} from 'react'
// import Navbar from './components/Navbar'
// import Amazon from './components/Amazon'
// import Cart from './components/Cart'
// import {Switch,Route,BrowserRouter} from 'react-router-dom'
// import Hello from './components/Hello'


// const App =() => {
//     // const [show,setShow] = useState(true)
//     const [cart,setCart] = useState([])
//     const [cartLength, setCartLength] = useState(0)

//     const handleClick = (item) => {
//         setCart((prevCart) => [...prevCart, {...item, amount: 1}]);
//     }

//     const handleChange = (item,d) => {
//         setCart((prevCart) => {
//             const updatedCart = prevCart.map((cartItem) => {
//                 if(cartItem.id === item.id) {
//                     const updatedAmount = cartItem.amount + d;
//                     cartItem.amount = updatedAmount > 0 ? updatedAmount : 1;
//                 }
//                 return cartItem
//             })
//             return updatedCart
//         })
//     }

//     return (
//         <div>
//             <Navbar size={cart.length}/> 
//           {/* {show ? ( */}
//             <Amazon handleClick={handleClick} cart={cart} />
//           {/* ) : ( */}
//             <Cart cart={cart} setCart={setCart} handleChange={handleChange} setCartLength={setCartLength} />
//           {/* )} */}
//         </div>
//     )
   
// }

// export default App


// App.js
import React, { useState } from 'react';
import items from './components/data';
import ProductList from './components/ProductList';
import PriceFilter from './components/PriceFilter';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(items);

  const handleFilterChange = (priceRange) => {
    const filtered = items.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <PriceFilter items={items} onFilterChange={handleFilterChange} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default App;

