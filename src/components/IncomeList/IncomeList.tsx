import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Income } from 'core/domain'
import React, { FC } from 'react'
import IncomeItem from 'components/IncomeList/IncomeItem'

interface IIncomeListProps {
  incomes: Income[]
}

const IncomeList: FC<IIncomeListProps> = ({ incomes }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {incomes.map((income) => (
            <IncomeItem income={income} key={income._id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default IncomeList
