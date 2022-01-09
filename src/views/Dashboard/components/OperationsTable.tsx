import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { MainCard } from 'components/MainCard'
import { WithEmptyPlaceHolder } from 'hoc/withEmptyPlaceHolder'
import { NexusGenObjects } from 'types'
import { FC } from 'react'

interface OperationsTableProps {
  operations: NexusGenObjects['Operation'][]
}

export const OperationsTable: FC<OperationsTableProps> = ({ operations }) => (
  <TableContainer component={MainCard}>
    <WithEmptyPlaceHolder dataSource={operations}>
      <Table sx={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Commentary</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {operations.map(({ title, date, id, amount, commentary }) => (
            <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {date}
              </TableCell>
              <TableCell align="right">{title}</TableCell>
              <TableCell align="right">{amount}</TableCell>
              <TableCell align="right">{'CATEGORY'}</TableCell>
              <TableCell align="right">{commentary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </WithEmptyPlaceHolder>
  </TableContainer>
)
