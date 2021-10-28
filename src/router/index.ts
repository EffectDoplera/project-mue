import SvgIcon from '@mui/material/SvgIcon'
import { Dashboard, Person, CreditCard } from '@mui/icons-material'

export enum PageRoutes {
  MAIN = '/',
  LOGIN = '/login',
  SIGN_UP = '/signup',
}

type RoutePage = {
  href: PageRoutes
  text: string
  icon?: typeof SvgIcon
}

export const ROUTES: RoutePage[] = [
  {
    href: PageRoutes.MAIN,
    text: 'Dashboard',
    icon: Dashboard,
  },
  {
    href: PageRoutes.LOGIN,
    text: 'Login',
    icon: Person,
  },
]
