import { BudgetEnumType, BudgetType} from './types'

const initialStateBudget: BudgetType = {
    arrayBudget: []
}

function reducerBudget(state = initialStateBudget, action: any) {
    switch(action.type) {
        case BudgetEnumType.GET_BUDGET:
            return {
                arrayBudget: action.payload,
            }
        default:
            return state
    }
}

export default reducerBudget