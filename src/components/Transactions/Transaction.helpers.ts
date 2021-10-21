import {
  ArrowBack,
  BeachAccess,
  Commute,
  CreditCard,
  FitnessCenter,
  Home,
  Lens,
  Loyalty,
  Power,
  AccountBalanceWallet,
} from '@mui/icons-material'
import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { CategoryName } from 'core/domain/_category'
import { ExpenseCategory, IncomeCategory } from 'core/enums'

type IconElement = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>

const TRANSACTION_ICONS_MAP: Map<CategoryName, IconElement> = new Map<CategoryName, IconElement>([
  [ExpenseCategory.CASH, CreditCard],
  [ExpenseCategory.UTILITIES, Power],
  [ExpenseCategory.HOUSE_RENT, Home],
  [ExpenseCategory.CLOTHES, Lens],
  [ExpenseCategory.SELF_CARE, Loyalty],
  [ExpenseCategory.SPORT, FitnessCenter],
  [ExpenseCategory.TRANSPORT, Commute],
  [ExpenseCategory.VOCATION, BeachAccess],
  [IncomeCategory.ADVANCE, CreditCard],
  [IncomeCategory.SALARY, AccountBalanceWallet],
  [IncomeCategory.SPORT_COMPENSATION, CreditCard],
  [IncomeCategory.OTHER, ArrowBack],
])

export const getTransactionIcon = (category: CategoryName): IconElement =>
  TRANSACTION_ICONS_MAP.get(category) ?? CreditCard
