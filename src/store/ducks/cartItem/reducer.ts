import reducerCategories from '../categories/reducer'
import  { CartItemEnumType, CartItemType } from './types'

const initialStateCart: CartItemType = {
    cartItens: []
}

function reducerCartItem(state = initialStateCart, action: any) {
    switch(action.type) {
        case CartItemEnumType.SET_ITEM:
            return {
                ...state,
                cartItens: action.payload,
            }
        case CartItemEnumType.DELETE_ITEM:
            return {
                cartItens: []
            }
        default:
            return state
    }
}

export default reducerCartItem