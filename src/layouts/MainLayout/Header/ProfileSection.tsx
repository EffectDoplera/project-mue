import { Logout, Settings } from '@mui/icons-material'
import { Avatar, Chip, Divider, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material'
import { signOut, useSession } from 'next-auth/client'
import Image from 'next/image'
import { FC, useCallback, useRef, useState } from 'react'
import { getFirstCharWithUpperCase } from 'utils/helpers'

export const ProfileSection: FC = () => {
  const theme = useTheme()
  const [session] = useSession()

  const [open, setOpen] = useState(false)

  /**
   * anchorRef is used on different componets and specifying one type leads to other components throwing an error
   * */
  const anchorRef = useRef(null)

  const handleLogout = useCallback(async () => {
    await signOut()
  }, [])

  const handleToProfile = useCallback(async () => {
    console.log('NAVIGATE TO PROFILE')
  }, [])

  const handleToSettings = useCallback(async () => {
    console.log('NAVIGATE TO SETTINGS')
  }, [])

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  return (
    <>
      <Chip
        sx={{
          height: '48px',
          alignItems: 'center',
          borderRadius: '27px',
          transition: 'all .2s ease-in-out',
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.light,
          '&[aria-controls="menu-list-grow"], &:hover': {
            borderColor: theme.palette.primary.main,
            background: `${theme.palette.primary.main}!important`,
            color: theme.palette.primary.light,
            '& svg': {
              stroke: theme.palette.primary.light,
            },
          },
          '& .MuiChip-label': {
            lineHeight: 0,
          },
        }}
        icon={
          <Avatar sx={{ width: 32, height: 32 }} ref={anchorRef} color="inherit">
            {session?.user?.image ? (
              <Image src={session?.user?.image} width={32} height={32} layout={'fixed'} alt={'Your photo'} />
            ) : session?.user?.name ? (
              getFirstCharWithUpperCase(session?.user?.name)
            ) : (
              getFirstCharWithUpperCase(session?.user?.email || 'P')
            )}
          </Avatar>
        }
        label={<Settings stroke={'1.5'} color={'primary'} fontSize={'medium'} />}
        variant="outlined"
        ref={anchorRef}
        onClick={handleToggle}
        color="primary"
      />

      {open && (
        <Stack direction="row" alignItems="center" gap={1}>
          <Menu
            id="menu-appbar"
            anchorEl={anchorRef.current}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleToggle}
            onClick={handleToggle}
            onBackdropClick={handleToggle}
            PaperProps={{
              elevation: 16,
              sx: {
                overflow: 'visible',
                mt: 6,
              },
            }}
          >
            <MenuItem onClick={handleToProfile}>
              <Stack>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                  Signed in as
                </Typography>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                  {session?.user?.name ?? session?.user?.email}
                </Typography>
              </Stack>
            </MenuItem>

            <Divider />

            <MenuItem onClick={handleToProfile}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Avatar sx={{ width: 24, height: 24 }} />
                <Typography>Profile</Typography>
              </Stack>
            </MenuItem>

            <Divider />
            <MenuItem onClick={handleToSettings}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Settings fontSize="small" />
                <Typography>Account Settings</Typography>
              </Stack>
            </MenuItem>

            <MenuItem onClick={handleLogout}>
              <Stack direction={'row'} alignItems={'center'} gap={1}>
                <Logout fontSize="small" />
                <Typography>Sign Out</Typography>
              </Stack>
            </MenuItem>
          </Menu>
        </Stack>
      )}
    </>
  )
}
