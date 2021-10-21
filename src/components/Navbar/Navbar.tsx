import {
  BlurOn,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from '@mui/icons-material'
import {
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useAuth } from 'hooks'
import { useRouter } from 'next/dist/client/router'
import { useState } from 'react'
import { ROUTES } from 'router'

export default function Navbar() {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const { logout } = useAuth()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const navigateTo = (href: string) => () => router.push(href)

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" size="large">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {process.env.NEXT_PUBLIC_APP_NAME}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose} size="large">
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {ROUTES.map(({ text, href, icon }) => {
            const Icon = icon ?? BlurOn
            return (
              <ListItem button key={href} onClick={navigateTo(href)}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          })}
          <Divider />
          <ListItem button onClick={logout}>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary={'logout'} />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
