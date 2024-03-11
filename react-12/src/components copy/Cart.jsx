import React ,{useState,useEffect} from 'react'

const Cart = ({ cart, setCart, handleChange, setCartLength }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    handlePrice(updatedCart);
  };

  const handlePrice = (cart) => {
    let ans = 0;
    if (cart) {
      cart.forEach((item) => {
        const validAmount = typeof item.amount === 'number' ? item.amount : 0;
        ans += validAmount * item.price;
      });
    }
    setPrice(Math.ceil(ans));
  };

  useEffect(() => {
    handlePrice(cart);
  }, [cart]);

  const handleQuantityChange = (item, quantity) => {
    handleChange(item, quantity);

    const updatedCart = cart ? [...cart] : [];
    const cartSize = updatedCart.reduce((total, cartItem) => total + cartItem.amount, 0);
    setCart(updatedCart);
    setCartLength(cartSize);
  };


  return (
    <div className='container mt-5'>
      {cart.map((item) => (
        <div className='row border-bottom pb-2 align-items-center' key={item.id}>
          <div className='col-md-4'>
            <img src={item.image} alt='' width={'100px'} />
          </div>
          <div className="col-md-4">
            <p className="font-weight-bold">{item.title}</p>
          </div>
          <div className="col-md-2">
          <button className="btn btn-outline-primary" onClick={() => handleQuantityChange(item, 1)}> +</button>
          <button className="btn btn-light mx-2">{item.amount}</button>
          <button className="btn btn-outline-primary" onClick={() => handleQuantityChange(item, -1)}> -</button>
          </div>

          <div className='col-md-2'>
            <span className='bg-light p-2 rounded'>{item.price}</span>
            <button className='btn btn-danger ml-2' onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}

      <div className="row mt-4">
        <span className="col-md-6 h2 text-primary font-weight-bold">
          Total Price of your Cart
        </span>
        <span className="col-md-6 h2 text-success font-weight-bold">
          Rs - {price}
        </span>
      </div>
    </div>
  )
}

export default Cart
