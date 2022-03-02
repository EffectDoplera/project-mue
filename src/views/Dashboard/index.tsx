import { gql, useQuery } from '@apollo/client'
import { Grid } from '@mui/material'
import { FC } from 'react'
import {
  ExpenseCard,
  ExpenseModal,
  OperationPieChar,
  OperationsTable,
  PopularCategories,
  TotalIncomeCard,
} from './components'

const GET_ALL_OPERATIONS = gql`
  query Dashboard {
    operations {
      id
      title
      type
      amount
      currency
      date
      commentary
      category
    }
    sumAllOperations
  }
`

export const Dashboard: FC = () => {
  const { data, loading } = useQuery(GET_ALL_OPERATIONS)

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Grid container spacing={3}>
      <Grid item container xs={12} justifyContent={'flex-end'}>
        <Grid item>
          <ExpenseModal />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <ExpenseCard isLoading amount={data.sumAllOperations} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <OperationPieChar />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={3}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeCard operationsSum={data.sumAllOperations} isLoading />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeCard operationsSum={data.sumAllOperations} isLoading />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={8}
            sx={(theme) => ({
              [theme.breakpoints.down('md')]: {
                display: 'none',
              },
            })}
          >
            <OperationsTable operations={data.operations} />
          </Grid>
          <Grid item xs={12} md={4}>
            <PopularCategories operations={data.operations} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
