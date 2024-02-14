// Cart.js
import React from 'react';
import { connect } from 'react-redux';
import CartIcon from './CartIcon';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  console.log('cart component is rendering', cart);

  return (
    <div>
     <h2>Shopping Cart</h2>
      <CartIcon />
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span className="product-name">
              {item.name} - ${item.price}
              {item.quantity > 1 && (
                <span className="product-quantity">({item.quantity})</span>
              )}
            </span>
            <div className="quantity-controls">
            <button className="quantity-icon" onClick={() => decreaseQuantity(item.id)}>-</button>
            <span className="product-quantity">{item.quantity}</span>
            <button className="quantity-icon" onClick={() => increaseQuantity(item.id)}>+</button>

            </div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { removeFromCart, increaseQuantity, decreaseQuantity })(Cart);
