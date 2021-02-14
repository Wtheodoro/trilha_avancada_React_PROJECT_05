export enum BeerEnumType {
    GET_BEERS = '@GET_BEERS'
}

export interface BeerItemType {
    description: string
    id: number
    image: string
    price: string
    title: string
}

export interface BeersType {
    arrayBeers: BeerItemType[]
}