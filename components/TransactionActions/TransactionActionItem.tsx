import { Box, Grid, Typography } from '@mui/material'
import ControlPointIcon from '@mui/icons-material/ControlPoint'

import React from 'react'

export const TransactionActionItem = () => {
  return (
    <Box p={1}>
      <Grid container>
        <Grid item xs={1} container justifyContent="center" alignItems="center">
          <ControlPointIcon />
        </Grid>
        <Grid item xs={11}>
          <Typography>Внести расход</Typography>
        </Grid>
      </Grid>
    </Box>
  )
}
