import { Card, Grid, Chip, TableRow, TableCell, Button, ButtonGroup, IconButton } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons'
import React, { FC } from 'react'
import { IIncome } from '../../types/income'

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
          <IconButton>
            <Edit color="action" />
          </IconButton>
          <IconButton>
            <Delete color="error" />
          </IconButton>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  )
}

export default IncomeItem
