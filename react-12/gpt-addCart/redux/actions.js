// actions.js
// actions.js
export const addToCart = product => ({
    type: 'ADD_TO_CART',
    payload: { ...product, id: product.id /* assign a unique ID here */ },
  });
  
  
  export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    payload: productId,
  });
  export const increaseQuantity = (itemId) => {
    return {
      type: 'INCREASE_QUANTITY',
      payload: itemId,
    };
  };
  export const decreaseQuantity = (itemId) => {
    return {
      type: 'DECREASE_QUANTITY',
      payload: itemId,
    };
  };