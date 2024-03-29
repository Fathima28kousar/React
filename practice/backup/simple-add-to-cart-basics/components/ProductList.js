import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart ,} from '../redux/actions';
import { useState } from 'react';


const ProductList = () => {
  const products = useSelector((state) => state.products);
  const [searchQuery, setSearchQuery] = useState('');
//   console.log('rerendered',products)
  const dispatch = useDispatch();
  const maxProductPrice = useSelector((state) => state.maxProductPrice);
  const minProductPrice = Math.min(...products.map((product) => product.price));
  const [selectedProductPrice, setSelectedProductPrice] = useState(minProductPrice);

  const filteredProducts = products.filter((product) => {
    const matchesPrice = selectedProductPrice !== minProductPrice ? product.price <= selectedProductPrice : true;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPrice && matchesSearch;
  });


  const handleAddToCart = (product) => {
    // console.log(product)
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h2>Product List</h2>
      <p>Maximum Product Price: ${maxProductPrice}</p>
      <p>Minimum Product Price: ${minProductPrice}</p>
      <p>Selected Product Price: ${selectedProductPrice}</p>
      <input type='range' min={minProductPrice} max={maxProductPrice} value={selectedProductPrice}
      onChange={(e) => setSelectedProductPrice(parseFloat(e.target.value))}/>

<div>
        <label>Search Product:</label>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <ul>
      {filteredProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
