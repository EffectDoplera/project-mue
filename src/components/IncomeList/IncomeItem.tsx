import { ButtonGroup, Chip, IconButton, TableCell, TableRow } from '@mui/material'
import { Delete, Edit } from '@mui/icons-material'
import React, { FC } from 'react'
import { IIncome } from 'src/types'

interface IncomeItemProps {
  income: IIncome
}

const IncomeItem: FC<IncomeItemProps> = ({ income }) => {
  return (
    <TableRow>
      <TableCell>
        <Chip label={income.category} color="primary" />
      </TableCell>
      <TableCell>{income.value}</TableCell>
      <TableCell>{income.currency}</TableCell>
      <TableCell>{income.comment}</TableCell>
      <TableCell>
        <ButtonGroup disableElevation>
          <IconButton size="large">
            <Edit color="action" />
          </IconButton>
          <IconButton size="large">
            <Delete color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  )
}

export default IncomeItem
