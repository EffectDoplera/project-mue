import { Typography, Paper } from '@mui/material'
import { teal } from '@mui/material/colors'
import { useTransactionSelector } from 'hooks'
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer } from 'recharts'

const MESSAGE = 'There are too few categories to display the expense graph. Enter a few more '
const COLOR = teal[200]

export const Char = () => {
  const { squashedByCategoryForCharTransaction } = useTransactionSelector()

  return squashedByCategoryForCharTransaction.length < 3 ? (
    <Paper elevation={4} sx={{ bgcolor: COLOR, p: 1 }}>
      <Typography>{`${MESSAGE} ${3 - squashedByCategoryForCharTransaction.length}`}</Typography>
    </Paper>
  ) : (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={squashedByCategoryForCharTransaction}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis dataKey="transactionName" />
        <PolarRadiusAxis />
        <Radar name="Expense" dataKey="A" stroke="#556cd6" fill="#556cd6" fillOpacity={0.8} />
      </RadarChart>
    </ResponsiveContainer>
  )
}
