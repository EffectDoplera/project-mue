import { useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Transactions } from 'components'
import Loader from 'components/Loader'
import { MainCard } from 'components/MainCard'
import { QUERY_ALL_OPERATIONS_BY_CATEGORY } from 'graphql/querys'
import { NexusGenObjects } from 'types'
import { FC } from 'react'

interface PopularCategoriesProps {
  operations: NexusGenObjects['Operation'][]
}

const CardWrapper = styled(MainCard)(() => ({}))

export const PopularCategories: FC<PopularCategoriesProps> = ({ operations }) => {
  const { data, loading } = useQuery(QUERY_ALL_OPERATIONS_BY_CATEGORY)

  if (loading) {
    return <Loader />
  }

  return (
    <CardWrapper title={'Popular Categories'}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Transactions transactions={data.sumAllOperationsByCategory} />
        </Grid>
      </Grid>
    </CardWrapper>
  )
}
