import { combineReducers, createStore } from 'redux'
import reducerCategories from './ducks/categories/reducer'
import reducerCartItem from './ducks/cartItem/reducer'

const createRootReducer = () => combineReducers({
    categories: reducerCategories,
    cartItem: reducerCartItem
})

const store = createStore(createRootReducer())

export { store }