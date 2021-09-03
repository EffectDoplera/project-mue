import { useState } from 'react'
import {
  BlurOn,
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from '@material-ui/icons'
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
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { useRouter } from 'next/dist/client/router'
import { ROUTES } from 'router'

export default function Navbar() {
  const theme = useTheme()
  const router = useRouter()
  const [open, setOpen] = useState(false)

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
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Project Mue
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <div>
          <IconButton onClick={handleDrawerClose}>
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
      </Drawer>
    </div>
  )
}
