import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = () => {
  const cartQuantity = useSelector(state =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <div className="cart-icon">
      <FaShoppingCart size={30} />
      <span className="cart-counter">{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
