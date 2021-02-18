import { CategoriesEnumType, CategoriesType } from './types'

const initialStateCategories: CategoriesType = {
    arrayCategories: []
}

function reducerCategories(state = initialStateCategories, action: any) {
    switch(action.type) {
        case CategoriesEnumType.GET_CATEGORIES:
            return {
                arrayCategories: action.payload
            }
        case CategoriesEnumType.DELETE_CATEGORIES:
            return {
                arrayCategories: []
            }
        default:
             return state
    }
}

export default reducerCategories