// CartIcon.js
import React from 'react';
import { connect } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const CartIcon = ({ cartQuantity }) => (
    <div className="cart-icon">
      <FaShoppingCart size={30} />
      <span className="cart-counter">{cartQuantity}</span>
    </div>
  );
  
  const mapStateToProps = (state) => ({
    cartQuantity: state.cart.reduce((total, item) => total + item.quantity, 0),
  });
  
  export default connect(mapStateToProps)(CartIcon);
  