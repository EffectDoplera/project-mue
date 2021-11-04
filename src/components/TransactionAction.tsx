import ControlPointIcon from '@mui/icons-material/ControlPoint'
import { Stack, Typography } from '@mui/material'
import { CategoryType } from 'core/enums'
import { FC } from 'react'

interface TransactionActionItemProps {
  type: CategoryType
}

export const TransactionAction: FC<TransactionActionItemProps> = ({ type }) => {
  return (
    <Stack direction="row" spacing={1}>
      <ControlPointIcon />
      <Typography>{`Add ${type}`}</Typography>
    </Stack>
  )
}
