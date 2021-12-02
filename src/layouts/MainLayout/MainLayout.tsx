import { styled } from '@mui/material/styles'
import { MainCard } from 'components/ui/MainCard'
import { FC } from 'react'

import { Header } from './Header'

const Main = styled('main')(({ theme }) => ({
  backgroundColor: 'rgb(227, 242, 253)',
  minHeight: 'calc(100vh - 88px)',
  flexGrow: 1,
  padding: '20px',
  margin: '0px 20px 20px 20px',
  borderRadius: '12px',
  transition: 'margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
}))

export const MainLayout: FC = ({ children }) => (
  <>
    <Header />
    <Main>{children}</Main>
  </>
)
