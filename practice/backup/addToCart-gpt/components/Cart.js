import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartIcon from './CartIcon';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

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
              <button className="quantity-icon" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
              <span className="product-quantity">{item.quantity}</span>
              <button className="quantity-icon" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            </div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
