import {ActionTypes} from '../constants/action-types'
const initialState = {
    products:[
    {
        id:1,
        title: 'dipesh',
        category:'programmer'
    }
]
}
export const productReducer = (state=initialState,{type,payload}) =>{ //action={type,payload}
    switch(type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }

}