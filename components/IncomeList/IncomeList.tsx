import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { FC } from 'react'
import { IIncome } from 'types'
import IncomeItem from './IncomeItem'

interface IIncomeListProps {
  incomes: IIncome[]
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
