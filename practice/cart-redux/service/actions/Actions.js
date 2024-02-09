import {ADD_TO_CART} from '../constants'
import {REMOVE_CART} from '../constants'

export const addToCart = (data) =>{
    // console.warn('action',data)
    return{
        type:ADD_TO_CART,
        data:data,
    }
}

export const removeCart = () =>{
    console.warn('action')
    return{
        type:REMOVE_CART,
    }
}