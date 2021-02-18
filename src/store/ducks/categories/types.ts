export enum CategoriesEnumType {
    GET_CATEGORIES = '@GET_CATEGORIES',
    DELETE_CATEGORIES = '@DELETE_CATEGORIES'
}

export interface CategoriesItemType {
    category: string
}

export interface CategoriesType {
    arrayCategories: CategoriesItemType[]
}

export interface CategoriesState {
    categories: CategoriesType
}