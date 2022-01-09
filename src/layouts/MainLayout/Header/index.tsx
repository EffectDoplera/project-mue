import { AppBar, Toolbar } from '@mui/material'
import { useSession } from 'next-auth/client'
import { FC } from 'react'
import { LogoSection } from './LogoSection'
import { ProfileSection } from './ProfileSection'

export const Header: FC = () => {
  const [session] = useSession()

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: 'black', p: 1 }} elevation={0}>
      <Toolbar>
        <LogoSection />

        {session?.user && <ProfileSection />}
      </Toolbar>
    </AppBar>
  )
}
