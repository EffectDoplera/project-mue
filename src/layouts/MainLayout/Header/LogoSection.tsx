import { Typography } from '@mui/material'
import { FC } from 'react'

export const LogoSection: FC = () => (
  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    {process.env.NEXT_PUBLIC_APP_NAME}
  </Typography>
)
