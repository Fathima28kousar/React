// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Provider store={store}>
      <div className="app-container">
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
};

export default App;
