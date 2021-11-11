import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Stack, Typography } from '@mui/material'
import { OperationType } from 'core/enums'
import { FC } from 'react'

interface TransactionActionItemProps {
  type: OperationType
}

export const TransactionAction: FC<TransactionActionItemProps> = ({ type }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ControlPointIcon />
      <Typography>{`Add ${type}`}</Typography>
    </Stack>
  )
}
