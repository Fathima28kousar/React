import styles from "./Cart.module.css";
import Button from "../home/button/Button";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
// import {useState} from 'react'

const Cart = ({ cart, setCart,handleChange }) => {
  const removeFromCart = (thingId) => {
    const updatedCart = cart.filter((thing) => thing.id !== thingId && thing.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Grouping cart items by id
  const groupedCart = cart.reduce((acc, thing) => {
    if (acc[thing.id]) {
      acc[thing.id].quantity += thing.quantity;
    } else {
      acc[thing.id] = { ...thing };
    }
    return acc;
  }, {});

  

  return (
    <div className={styles.container}>
      {Object.values(groupedCart).length === 0 ? (
        <>
          <div className={styles.empty}>
            <h1>Your Cart is Empty</h1>
            <Link to="/everything">
              <Button text="CONTINUE SHOPPING..." />
            </Link>
          </div>
        </>
      ) : (
        <table>
  <thead>
    <tr>
      <th>Image</th>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {Object.values(groupedCart).map((thing) => (
      <tr key={thing.id} className={styles.cart}>
        <td>
          <div>
            <img src={thing.image1} alt="" />
          </div>
        </td>
        <td>
            <h4>{thing.name}</h4>
        </td>
        <td>{thing.price}</td>
        <td>
          <div>
          <button onClick={() => handleChange(thing, 1)}>+</button>
          <p>{thing.quantity}</p>
          <button onClick={() => handleChange(thing, -1)}>-</button>
          </div>
          
          </td>
        {/* <td> <input type='number' value={thing.quantity} max='100' min='1'/> </td> */}
        <td>{thing.price * thing.quantity}</td>
        <td>
          <FaTrash onClick={() => removeFromCart(thing.id)} />
        </td>
      </tr>
    ))}
  </tbody>
</table>

      )}

      {Object.values(groupedCart).length !== 0 && (
        <div>
          <Button onClick={() => setCart([])} text="CLEAR CART" />
          <Button text="CHECKOUT" />
        </div>
      )}
    </div>
  );
};

export default Cart;
