import { Box, Button, Card, Grid } from '@mui/material'
import IncomeList from 'components/IncomeList/IncomeList'
import { Income } from 'core/domain'
import { IncomeCategory } from 'enums'
import { MainLayout } from 'layouts'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const Incomes = () => {
  const router = useRouter()
  const incomes: Income[] = [
    {
      _id: '1',
      category: IncomeCategory.SALARY,
      value: 10000,
      comment: '',
      date: Date.now().toLocaleString(),
      title: 'Зарплата',
    },
    {
      _id: '2',
      category: IncomeCategory.SALARY,
      value: 20000,
      comment: '',
      date: Date.now().toLocaleString(),
      title: 'Зарплата',
    },
    {
      _id: '3',
      category: IncomeCategory.SALARY,
      value: 30000,
      comment: '',
      date: Date.now().toLocaleString(),
      title: 'Зарплата',
    },
  ]

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Доход</h1>
              <Button onClick={() => router.push('/')}>Главная</Button>
            </Grid>
          </Box>
          <IncomeList incomes={incomes} />
        </Card>
      </Grid>
    </MainLayout>
  )
}

export default Incomes
