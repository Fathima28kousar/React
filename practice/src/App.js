import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addToCart,removeFromCart} from './actions'

function App(){
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const handleAddToCart = (item) =>{
        dispatch(addToCart(item))
    }

    const handleRemoveFromCart = (itemId) =>{
        dispatch(removeFromCart(itemId))
    }
    return <div>
        <h1>Shopping cart</h1>
        <ul>
            {cart.map(item =>(
                <li key={item.id}>{item.name} - 
                <button onClick={() => handleRemoveFromCart(item.id)}>remove</button></li>
            ))}
        </ul>
        <button onClick={()=> handleAddToCart({id:1,name:'Item1'})}>Add item1 to Cart</button>
        <button onClick={()=> handleAddToCart({id:2,name:'Item2'})}>Add item2 to Cart</button>
    </div>
}

export default App