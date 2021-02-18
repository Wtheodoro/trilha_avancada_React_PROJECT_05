import { action } from 'typesafe-actions'
import { CategoriesEnumType, CategoriesType } from './types'

export const getCategories = (payload: CategoriesType) => action(CategoriesEnumType.GET_CATEGORIES, payload)

export const deleteCategories = () => action(CategoriesEnumType.DELETE_CATEGORIES)