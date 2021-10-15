import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Autocomplete, Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { CreateIncomeDto } from 'core/domain/income'
import { useFormik } from 'formik'
import { useRouter } from 'next/dist/client/router'
import { FC, memo } from 'react'
import { PageRoutes } from 'router'
import { INITIAL_VALUES } from 'forms/CreateIncomeForm/CreateIncomeFormConfig'
import { useAppDispatch, useAppSelector } from 'hooks'
import { currencies } from 'mocks'
import { createIncomeByUserId, selectIncomeOptions } from 'modules/Income/incomeSlice'

const CreateIncomeForm: FC = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const incomeCategories = useAppSelector(selectIncomeOptions)

  const createIncomeHandler = async (values: CreateIncomeDto) => {
    dispatch(createIncomeByUserId(values))
    await router.push(PageRoutes.FINANCIAL_ANALYSIS)
  }

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: createIncomeHandler,
  })

  return (
    <Stack p={2} spacing={2} component="form" onSubmit={formik.handleSubmit} width={600} alignItems="center">
      <Typography variant="h3">New Income</Typography>

      <TextField
        label="Name"
        id="name"
        name="name"
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        onChange={formik.handleChange}
        fullWidth
      />

      <TextField
        label="Amount"
        id="value"
        name="value"
        value={formik.values.value}
        onChange={formik.handleChange}
        error={formik.touched.value && Boolean(formik.errors.value)}
        fullWidth
      />

      <TextField
        select
        label="Currency"
        id="currency"
        name="currency"
        value={formik.values.currency}
        onChange={formik.handleChange}
        error={formik.touched.currency && Boolean(formik.errors.currency)}
        fullWidth
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="When"
          value={formik.values.date}
          onChange={formik.handleChange}
          renderInput={(params) => <TextField fullWidth {...params} />}
        />
      </LocalizationProvider>

      <Autocomplete
        disablePortal
        id="category"
        options={incomeCategories}
        fullWidth
        renderInput={(params) => (
          <TextField
            {...params}
            label="Category"
            name="category"
            onSelect={formik.handleChange}
            value={formik.values.category}
            error={formik.touched.category && Boolean(formik.errors.category)}
          />
        )}
      />

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}

export default memo(CreateIncomeForm)
