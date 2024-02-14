// reducers.js
const initialState = {
    products: [
      { id: 1, name: 'Product 1', price: 20 },
      { id: 2, name: 'Product 2', price: 30 },
      { id: 3, name: 'Product 3', price: 25 },
    ],
    cart: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingProduct = state.cart.find((item) => item.id === action.payload.id);
        if (existingProduct) {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          };
        } else {
          const newProduct = { ...action.payload, quantity: 1 };
          return {
            ...state,
            cart: [...state.cart, newProduct],
          };
        }
        
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
        ),
      };
     
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

  
      default:
        return state;
    }
  };
  
  export default rootReducer;