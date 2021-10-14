import SvgIcon from '@mui/material/SvgIcon'
import { Dashboard, Person, CreditCard } from '@mui/icons-material'

export enum PageRoutes {
  MAIN = '/',
  LOGIN = '/login',
  SIGN_UP = '/signup',
  FINANCIAL_ANALYSIS = '/financial-analysis',
}

type RoutePage = {
  href: PageRoutes
  text: string
  icon?: typeof SvgIcon
}

export const ROUTES: RoutePage[] = [
  {
    href: PageRoutes.MAIN,
    text: 'Главная',
    icon: Dashboard,
  },
  {
    href: PageRoutes.LOGIN,
    text: 'Логин',
    icon: Person,
  },
  {
    href: PageRoutes.FINANCIAL_ANALYSIS,
    text: 'Анализ финансов',
    icon: CreditCard,
  },
]
