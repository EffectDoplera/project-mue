import { Grid, Paper } from '@mui/material'
import { memo, FC } from 'react'

interface ThreeMontBarsProps {}

const ThreeMonthBars: FC<ThreeMontBarsProps> = ({}) => (
  <Grid container spacing={3}>
    <Grid item>
      <Paper variant="outlined" sx={{ width: 50, height: 50, backgroundColor: 'black' }} />
    </Grid>
    <Grid item>
      <Paper variant="outlined" sx={{ width: 50, height: 50, backgroundColor: 'black' }} />
    </Grid>
    <Grid item>
      <Paper variant="outlined" sx={{ width: 50, height: 50, backgroundColor: 'black' }} />
    </Grid>
  </Grid>
)

export default memo(ThreeMonthBars)
