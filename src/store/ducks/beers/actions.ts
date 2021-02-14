import { action } from 'typesafe-actions'
import { BeerEnumType, BeersType } from './types'

export const getBeers = (payload: BeersType) => action(BeerEnumType.GET_BEERS, payload)