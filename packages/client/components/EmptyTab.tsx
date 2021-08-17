import React, { FC } from 'react'
import { Months, TransactionsType } from '../enums'
import { Box, Grid } from '@material-ui/core'

interface EmptyTabProps {
  month: Months
  transactionType: TransactionsType
}

const EmptyTab: FC<EmptyTabProps> = ({ month, transactionType }) => {
  return (
    <Grid container alignItems='center' justifyContent='center'>
      <Box p={3}>
        В {month} у вас не было {transactionType}
      </Box>
    </Grid>
  )
}

export default EmptyTab
