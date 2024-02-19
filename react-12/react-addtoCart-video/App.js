import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Amazon from "./components/Amazon";
import Cart from "./components/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  const handleClick = (item) => {
    setCart((prevCart) => [...prevCart, { ...item, amount: 1 }]);
  };

  const handleChange = (item, d) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const updatedAmount = cartItem.amount + d;
          cartItem.amount = updatedAmount > 0 ? updatedAmount : 1;
        }
        return cartItem;
      });

      return updatedCart;
    });
  };

  return (
    <div className="app-container">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? ( <Amazon handleclick={handleClick} cart={cart} />) 
      : 
      (<Cart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
          setCartLength={setCartLength}
          // cartLength={cartLength}
        />
      )}
    </div>
  );
};

export default App;
