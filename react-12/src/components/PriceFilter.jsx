// PriceFilter.js
import React, { useState } from 'react';

const PriceFilter = ({ items, onFilterChange }) => {
  const initialPriceRange = [0, 100]; // Set your initial price range here
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setPriceRange([0, value]);
  };

  const handleFilterChange = () => {
    onFilterChange(priceRange);
  };

  const handleClearFilter = () => {
    setPriceRange(initialPriceRange);
    onFilterChange(initialPriceRange); // Optionally, you can trigger onFilterChange with the initial values
  };

  // Find the minimum and maximum product prices
  const minProductPrice = Math.min(...items.map((product) => product.price));
  const maxProductPrice = Math.max(...items.map((product) => product.price));

  return (
    <div>
      <h2>Price Filter</h2>
      <input
        type="range"
        min={15}
        max={maxProductPrice}
        value={priceRange[1]}
        onChange={handleSliderChange}
      />
      <p>
        Price Range: ${minProductPrice} - ${priceRange[1]}
      </p>
      <p>
        Minimum Product Price: ${minProductPrice}
      </p>
      <p>
        Maximum Product Price: ${maxProductPrice}
      </p>
      <button onClick={handleFilterChange}>Apply Filter</button>
      <button onClick={handleClearFilter}>Clear Filter</button>
    </div>
  );
};

export default PriceFilter;
