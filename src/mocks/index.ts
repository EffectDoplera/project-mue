import { Expense } from 'core/domain'
import { CostCategory, IncomeCategory } from 'enums'

export const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'RUB',
    label: 'RUB',
  },
]

export const incomeCategories = [IncomeCategory.SALARY, IncomeCategory.ADVANCE, IncomeCategory.OTHER]

export const income = [
  {
    category: IncomeCategory.SALARY,
    value: 30000,
    currency: 'рублей',
  },
  {
    category: IncomeCategory.SPORT_COMPENSATION,
    value: 1000,
    currency: 'рублей',
  },
]

export const expense: Expense[] = [
  {
    category: CostCategory.CASH,
    value: 3000,
    _id: '1',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
  {
    category: CostCategory.VOCATION,
    value: 5000,
    _id: '2',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
  {
    category: CostCategory.UTILITIES,
    value: 500,
    _id: '3',
    comment: '',
    title: 'Наличные',
    date: Date.now().toLocaleString(),
  },
]
