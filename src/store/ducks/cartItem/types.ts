export enum CartItemEnumType {
    SET_ITEM = '@SET_ITEM',
    DELETE_ITEM = '@DELETE_ITEM'
}

export interface EachCartItemType {
    description: string
    id: number
    image: string
    price: string
    title: string
    amount: number
}

export interface CartItemType {
    cartItens: EachCartItemType[]
}

export interface CarteItemState {
    cartItem: CartItemType
}