import { Grid } from '@mui/material'
import React, { FC } from 'react'
import { IncomeCard, TotalIncomeCard } from './components'

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = ({}) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Grid container spacing={3} paddingTop={3}>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <IncomeCard isLoading />
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          <IncomeCard isLoading />
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <TotalIncomeCard isLoading />
            </Grid>
            <Grid item sm={6} xs={12} md={6} lg={12}>
              <TotalIncomeCard isLoading />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <IncomeCard isLoading />
        </Grid>
        <Grid item xs={12} md={4}>
          <IncomeCard isLoading />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)
