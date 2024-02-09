// reducer.js
import { ADD_TO_CART,REMOVE_CART } from "../constants";

const initialState = {
    cardData: []  // Initialize cardData as an array
};

export default function cardItems(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [...state.cardData, action.data]
            };
            case REMOVE_CART:
                return {
                    ...state,
                    cardData: state.cardData.slice(0, -1)
                };
        default:
            return state;
    }
}
