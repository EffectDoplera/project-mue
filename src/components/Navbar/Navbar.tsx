import { useAuth } from 'hooks'
import { useState } from 'react'
import {
  BlurOn,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@mui/icons-material'
import {
  Drawer,
  CssBaseline,
  Typography,
  IconButton,
  AppBar,
  Divider,
  Toolbar,
  ListItemIcon,
  ListItemText,
  ListItem,
  List,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/dist/client/router'
import { PageRoutes, ROUTES } from 'router'
import Link from 'next/link'

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
    <div>
      <CssBaseline />
      <AppBar position="fixed">
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
        </List>
        <Divider />
        <IconButton onClick={logout}>
          <BlurOn />
        </IconButton>
      </Drawer>
    </div>
  )
}
