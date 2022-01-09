import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Transactions } from 'components'
import { MainCard } from 'components/MainCard'
import { NexusGenObjects } from 'types'
import { FC } from 'react'

interface PopularCategoriesProps {
  operations: NexusGenObjects['Operation'][]
}

const CardWrapper = styled(MainCard)(() => ({}))

export const PopularCategories: FC<PopularCategoriesProps> = ({ operations }) => (
  <CardWrapper title={'Popular Categories'}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Transactions transactions={operations} />
      </Grid>
    </Grid>
  </CardWrapper>
)
