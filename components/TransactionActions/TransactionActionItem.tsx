import { Stack, Typography } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { TransactionsType } from 'enums'
import { FC } from 'react'

interface TransactionActionItemProps {
  type: TransactionsType
}

export const TransactionActionItem: FC<TransactionActionItemProps> = ({ type }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ControlPointIcon />
      <Typography>{`Внести ${type}`}</Typography>
    </Stack>
  )
}
