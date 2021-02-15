import { action } from 'typesafe-actions'
import { BudgetEnumType, BudgetType} from './types'

export const getBudget = (payload: BudgetType) => action(BudgetEnumType.GET_BUDGET, payload)