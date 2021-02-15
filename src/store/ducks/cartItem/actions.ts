import { action } from 'typesafe-actions'
import  { CartItemEnumType, EachCartItemType } from './types'

export const setCartItem = (payload: EachCartItemType[]) => action(CartItemEnumType.SET_ITEM, payload)

export const deleteCartItem = () => action(CartItemEnumType.DELETE_ITEM)