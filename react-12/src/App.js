import './App.css'
import Navbar from './components/Navbar'
import Amazon from './components/Amazon';
import Cart from './components/Cart'
import {useState} from 'react'

const App = () => {
  const [show,setShow] = useState(true);
  const [cart,setCart] = useState([]);

  const handleClick = (item) => {
      if(cart.indexOf(item) !== -1) return
      setCart([...cart,item])
  }

  const handleChange = (item,d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d

    if(arr[ind].amount ===0 ) arr[ind].amount = 1;
    setCart([...arr])
  }

  return (
      <div className="app-container">
        <Navbar setShow={setShow} size={cart.length} />
        {show ? <Amazon handleclick={handleClick}/> : <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}
        
      </div>
  );
};

export default App;