import { AppBar, Box, Toolbar } from '@mui/material'
import { useSession } from 'next-auth/client'
import { FC } from 'react'
import { LogoSection } from './LogoSection'
import { ProfileSection } from './ProfileSection'

export const Header: FC = () => {
  const [session] = useSession()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'linear-gradient(-90deg, #819ffd, #9b63f8)', color: '#fff' }}>
        <Toolbar>
          <LogoSection />

          {session?.user && <ProfileSection />}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
