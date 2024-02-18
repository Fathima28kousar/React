// App.js
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Import your CSS file

const App = () => {
  return (
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
  );
};

export default App;