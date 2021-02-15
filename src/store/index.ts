import { combineReducers, createStore } from 'redux'
import reducerCategories from './ducks/categories/reducer'
import reducerCartItem from './ducks/cartItem/reducer'
import reducerBudget from './ducks/budget/reducer'

const createRootReducer = () => combineReducers({
    categories: reducerCategories,
    cartItem: reducerCartItem,
    budgetItem: reducerBudget
})

const store = createStore(createRootReducer())

export { store }