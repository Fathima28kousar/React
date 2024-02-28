import styles from "./Cart.module.css";
import Button from "../home/button/Button";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const Cart = ({ cart, setCart}) => {
  const removeFromCart = (thingId) => {
    const updatedCart = cart.filter((thing) => thing.id !== thingId);
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
    <div>
      {Object.values(groupedCart).length === 0 ? (
        <>
          <div>
            <h1>Your Cart is Empty</h1>
            <Link to="/everything">
              <Button text="CONTINUE SHOPPING..." />
            </Link>
          </div>
        </>
      ) : (
        Object.values(groupedCart).map((thing) => {
          return (
            <div key={thing.id} className={styles.cart}>
              <p>{thing.price}</p>
              <img src={thing.image1} alt="" />
              <h1>{thing.name}</h1>
              <p>
                {thing.description.length > 40
                  ? `${thing.description.substring(0, 40)}...`
                  : thing.description}
              </p>
              <FaTrash onClick={() => removeFromCart(thing.id)} />
              <p>{thing.quantity}</p>
            </div>
          );
        })
      )}

      {Object.values(groupedCart).length !== 0 && (
        <div>
          <Button onClick={() => setCart("")} text="CLEAR CART" />
          <Button text="CHECKOUT" />
        </div>
      )}
    </div>
  );
};

export default Cart;
