import { CostCategory } from '@/enums/category'
import { SvgIconTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'
import { BeachAccess, Commute, CreditCard, FitnessCenter, Home, Lens, Loyalty, Power } from '@material-ui/icons'

type IconElement = OverridableComponent<SvgIconTypeMap<{}, 'svg'>>

const TRANSACTION_ICONS: Record<CostCategory, IconElement> = {
  [CostCategory.CASH]: CreditCard,
  [CostCategory.UTILITIES]: Power,
  [CostCategory.HOUSE_RENT]: Home,
  [CostCategory.CLOTHES]: Lens,
  [CostCategory.SELF_CARE]: Loyalty,
  [CostCategory.SPORT]: FitnessCenter,
  [CostCategory.TRANSPORT]: Commute,
  [CostCategory.VOCATION]: BeachAccess,
}

const TRANSACTION_ICONS_MAP: Map<CostCategory, IconElement> = new Map<CostCategory, IconElement>([
  [CostCategory.CASH, CreditCard],
  [CostCategory.UTILITIES, Power],
  [CostCategory.HOUSE_RENT, Home],
  [CostCategory.CLOTHES, Lens],
  [CostCategory.SELF_CARE, Loyalty],
  [CostCategory.SPORT, FitnessCenter],
  [CostCategory.TRANSPORT, Commute],
  [CostCategory.VOCATION, BeachAccess],
])

export const getTransactionIcon = (category: CostCategory): IconElement =>
  TRANSACTION_ICONS_MAP.get(category) ?? CreditCard
