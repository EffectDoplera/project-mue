import { Logout } from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  ListItemIcon,
} from '@mui/material'
import { signOut, useSession } from 'next-auth/client'
import { MouseEvent, useState } from 'react'
import Image from 'next/image'
import { getFirstCharWithUpperCase } from 'utils/helpers'

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [session] = useSession()

  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Typography>

          {session?.user && (
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <IconButton size="small" sx={{ ml: 2 }} onClick={handleMenu}>
                <Avatar sx={{ width: 32, height: 32 }}>
                  {session.user?.image ? (
                    <Image src={session.user?.image} width={32} height={32} layout={'fixed'} alt={'Your photo'} />
                  ) : session.user?.name ? (
                    getFirstCharWithUpperCase(session.user?.name)
                  ) : (
                    getFirstCharWithUpperCase(session.user?.email || 'P')
                  )}
                </Avatar>
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 5,
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
              >
                <MenuItem onClick={() => console.log('NAVIGATE TO PROFILE')}>
                  <Stack>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                      {`Signed in as`}
                    </Typography>
                    <Typography component="div" sx={{ flexGrow: 1 }}>
                      {session.user.name ?? session.user.email}
                    </Typography>
                  </Stack>
                </MenuItem>

                <Divider />

                <MenuItem onClick={() => console.log('NAVIGATE TO PROFILE')}>
                  <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <Avatar sx={{ width: 24, height: 24 }} />
                    <Typography>Profile</Typography>
                  </Stack>
                </MenuItem>

                <Divider />
                <MenuItem onClick={() => signOut()}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Sign Out
                </MenuItem>
              </Menu>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
