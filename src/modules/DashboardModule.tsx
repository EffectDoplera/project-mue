import { TabList, TabPanel } from '@mui/lab'
import { Grid, Paper, Stack, Tab } from '@mui/material'
import { Char, Expense, ExpensesModal, Income, IncomesModal, MoneyCard } from 'components'
import { CategoryType } from 'core/enums'
import { useAppDispatch, useAppSelector, useTransactionSelector } from 'hooks'
import { FC, memo, SyntheticEvent, useLayoutEffect, useState } from 'react'
import { selectIsLoading } from 'store/globalSlice'

interface DashboardModuleProps {
  changeTransactionContext: (event: SyntheticEvent, newValue: CategoryType) => void
}

const DashboardModule: FC<DashboardModuleProps> = ({ changeTransactionContext }) => {
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector(selectIsLoading)
  const { transactions, getAllTransactions, transactionCategories, getAllTransactionCategories, transactionType } =
    useTransactionSelector()

  useLayoutEffect(() => {
    if (!transactions.length && !isLoading) {
      dispatch(getAllTransactions())
    }

    if (!transactionCategories.length && !isLoading) {
      dispatch(getAllTransactionCategories())
    }
  }, [transactionType])

  const [isOpenTransactionModal, setIsOpenTransactionModal] = useState(false)

  return (
    <Grid container spacing={3} paddingTop={3}>
      <Grid item xs={12}>
        <MoneyCard />
      </Grid>

      <Grid item xs={12} md={8} lg={8}>
        <Paper
          sx={{
            width: '100%',
            minHeight: 400,
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Char />
        </Paper>
      </Grid>

      <Grid item xs={12} md={4} lg={4}>
        <Stack spacing={2}>
          <Paper>
            <TabList onChange={changeTransactionContext} centered variant="fullWidth">
              <Tab label={CategoryType.INCOME} value={CategoryType.INCOME} />
              <Tab label={CategoryType.EXPENSE} value={CategoryType.EXPENSE} />
            </TabList>
          </Paper>

          <Paper>
            <TabPanel value={CategoryType.INCOME}>
              <Income />
            </TabPanel>
            <TabPanel value={CategoryType.EXPENSE}>
              <Expense />
            </TabPanel>
          </Paper>

          <Paper>
            <TabPanel value={CategoryType.INCOME}>
              <IncomesModal open={isOpenTransactionModal} setOpen={setIsOpenTransactionModal} />
            </TabPanel>
            <TabPanel value={CategoryType.EXPENSE}>
              <ExpensesModal open={isOpenTransactionModal} setOpen={setIsOpenTransactionModal} />
            </TabPanel>
          </Paper>
        </Stack>
      </Grid>
    </Grid>
  )
}

export default memo(DashboardModule)
