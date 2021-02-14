import reducerCategories from '../categories/reducer'
import  { CartItemEnumType, CartItemType } from './types'

const initialStateCart: CartItemType = {
    cartItens: []
    // cartItens: [{
    //     description: '',
    //     id: 0,
    //     image: '',
    //     price: '',
    //     title: '',
    //     amount: 0
    // }]
}

function reducerCartItem(state = initialStateCart, action: any) {
    switch(action.type) {
        case CartItemEnumType.SET_ITEM:
            return {
                ...state,
                cartItens: action.payload,
            }
        default:
            return state
    }
}

export default reducerCartItem