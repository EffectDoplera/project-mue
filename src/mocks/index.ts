import { Expense, Income } from 'core/domain'
import { ExpenseCategory, IncomeCategory } from 'core/enums'

export const incomeCategories: IncomeCategory[] = [IncomeCategory.SALARY, IncomeCategory.ADVANCE, IncomeCategory.OTHER]
export const expenseCategories: ExpenseCategory[] = [
  ExpenseCategory.CASH,
  ExpenseCategory.SPORT,
  ExpenseCategory.TRANSPORT,
  ExpenseCategory.HOUSE_RENT,
  ExpenseCategory.CLOTHES,
  ExpenseCategory.VOCATION,
]

export const income: Income[] = [
  {
    category: IncomeCategory.SALARY,
    value: 30000,
    _id: '1',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
  {
    category: IncomeCategory.SPORT_COMPENSATION,
    value: 1000,
    _id: '2',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
]

export const expense: Expense[] = [
  {
    category: ExpenseCategory.CASH,
    value: 3000,
    _id: '1',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
  {
    category: ExpenseCategory.VOCATION,
    value: 5000,
    _id: '2',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
  {
    category: ExpenseCategory.UTILITIES,
    value: 500,
    _id: '3',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
]
