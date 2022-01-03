import { Grid, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MainCard } from 'components/MainCard'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'

const data2 = [
  { name: 'Group A', value: 400, color: '#0088FE' },
  { name: 'Group B', value: 300, color: '#00C49F' },
  { name: 'Group C', value: 300, color: '#FFBB28' },
  { name: 'Group D', value: 200, color: '#FF8042' },
]

const CardWrapper = styled(MainCard)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}))

export const OperationPieChar = () => {
  const theme = useTheme()

  return (
    <CardWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography variant="subtitle2">Total Growth</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5">$2,324.00</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ResponsiveContainer minHeight={180} width="100%" height="100%">
            <PieChart>
              <Pie data={data2} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" label>
                {data2.map(({ name, color }) => (
                  <Cell key={name} fill={color} name={name} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </CardWrapper>
  )
}
