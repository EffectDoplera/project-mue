import { Stack, Typography } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { FC } from 'react'

interface TransactionActionItemProps {
  label: string
}

export const TransactionActionItem: FC<TransactionActionItemProps> = ({ label }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ControlPointIcon />
      <Typography>{label}</Typography>
    </Stack>
  )
}
