import { stat } from 'fs'
import { BeerEnumType, BeersType } from './types'

const initialStateBeers: BeersType = {
    arrayBeers: []
}

function reducerBeers(state = initialStateBeers, action: any) {
    switch(action.type) {
        case BeerEnumType.GET_BEERS:
            return {
                arrayBeers: action.payload,
            }
        default:
            return state
    }
}

export default reducerBeers