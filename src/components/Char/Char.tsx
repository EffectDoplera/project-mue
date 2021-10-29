import { useTabContext } from '@mui/lab'
import { Paper } from '@mui/material'
import { CategoryType } from 'core/enums'
import { useAppSelector } from 'hooks'
import React from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'
import { selectSquashedByCategoryExpensesForChar } from 'store/expenseSlice'
import { selectSquashedByCategoryIncomesForChar } from 'store/incomeSlice'

export const Char = () => {
  const tabCtx = useTabContext()
  const transactions = useAppSelector(
    tabCtx?.value === CategoryType.INCOME
      ? selectSquashedByCategoryIncomesForChar
      : selectSquashedByCategoryExpensesForChar,
  )

  return transactions.length < 3 ? (
    <Paper variant="outlined" style={{ width: 300, backgroundColor: 'yellowgreen', textAlign: 'center' }}>
      {`There are too few categories to display the expense graph. Enter a few more ${3 - transactions.length}`}
    </Paper>
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={transactions}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="transactionName" />
        <PolarRadiusAxis />
        <Radar name="Expense" dataKey="A" stroke="#556cd6" fill="#556cd6" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
