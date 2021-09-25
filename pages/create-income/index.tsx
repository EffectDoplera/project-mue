import { Grid, Paper } from '@mui/material'
import { IncomeCategory } from 'enums'
import { MainLayout } from 'layouts'
import { CreateIncomeCategoryForm } from 'src/forms/CreateIncomeCategoryForm'
import { CreateIncomeForm } from 'src/forms/CreateIncomeForm'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'RUB',
    label: 'RUB',
  },
]

const categories = [
  {
    value: IncomeCategory.SALARY,
    label: IncomeCategory.SALARY,
  },
  {
    value: IncomeCategory.ADVANCE,
    label: IncomeCategory.ADVANCE,
  },
  {
    value: IncomeCategory.OTHER,
    label: IncomeCategory.OTHER,
  },
]

const CreateIncome = () => {
  return (
    <MainLayout>
      <Grid container alignItems="center" justifyContent="center" direction="column" gap={2}>
        <Paper>
          <CreateIncomeForm categories={categories} currencies={currencies} />
        </Paper>

        <Paper>
          <CreateIncomeCategoryForm />
        </Paper>
      </Grid>
    </MainLayout>
  )
}

export default CreateIncome
