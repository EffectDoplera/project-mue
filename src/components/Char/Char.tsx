import { Paper } from '@mui/material'
import { useAppSelector } from 'hooks'
import { selectSquashedByCategoryIncomesForChar } from 'modules/Income/incomeSlice'
import React from 'react'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

export const Char = () => {
  const incomes = useAppSelector(selectSquashedByCategoryIncomesForChar)

  return incomes.length < 3 ? (
    <Paper variant="outlined" style={{ width: 300, backgroundColor: 'yellowgreen', textAlign: 'center' }}>
      {`There are too few categories to display the expense graph. Enter a few more ${3 - incomes.length}`}
    </Paper>
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={incomes}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="transactionName" />
        <PolarRadiusAxis />
        <Radar name="Expense" dataKey="A" stroke="#556cd6" fill="#556cd6" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
