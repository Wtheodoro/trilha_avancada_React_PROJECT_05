export enum BudgetEnumType {
    GET_BUDGET = '@GET_BUDGET'
}

export interface BudgetItemType {
    itemPrice: Number
}

export interface BudgetType {
    arrayBudget: BudgetItemType[]
}

export interface BudgetItemState {
    budgetItem: BudgetType
}