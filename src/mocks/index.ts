import { CostCategory, IncomeCategory } from 'src/enums'

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

export const expense = [
  {
    category: CostCategory.CASH,
    value: 3000,
    currency: 'рублей',
  },
  {
    category: CostCategory.VOCATION,
    value: 5000,
    currency: 'рублей',
  },
  {
    category: CostCategory.UTILITIES,
    value: 500,
    currency: 'рублей',
  },
]
