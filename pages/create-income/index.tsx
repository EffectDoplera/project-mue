import { Paper, Stack } from '@mui/material'
import { MainLayout } from 'src/layouts'
import { NextPage } from 'next'
import { FC } from 'react'
import { CreateIncomeForm } from 'src/forms/CreateIncomeForm'

const CreateIncome: FC<NextPage> = () => {
  return (
    <MainLayout>
      <Stack alignItems="center" justifyContent="center" direction="column" gap={2}>
        <Paper>
          <CreateIncomeForm />
        </Paper>
      </Stack>
    </MainLayout>
  )
}

export default CreateIncome
