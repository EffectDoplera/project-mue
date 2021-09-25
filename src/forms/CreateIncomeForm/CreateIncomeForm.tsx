import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Button, MenuItem, Stack, TextField, Typography } from '@mui/material'
import { CreateIncomeDto } from 'core/domain/income'
import { format } from 'date-fns'
import { IncomeCategory } from 'enums'
import { useFormik } from 'formik'
import { memo, FC } from 'react'
import { INITIAL_VALUES } from 'src/forms/CreateIncomeForm/CreateIncomeFormConfig'
import { useAppDispatch } from 'src/hooks'
import { createIncome } from 'src/modules/Income/incomeSlice'

interface CreateIncomeFormProps {
  categories: {
    value: IncomeCategory
    label: IncomeCategory
  }[]
  currencies: {
    value: string
    label: string
  }[]
}

const CreateIncomeForm: FC<CreateIncomeFormProps> = ({ categories, currencies }) => {
  const dispatch = useAppDispatch()

  const createIncomeHandler = (values: CreateIncomeDto) => dispatch(createIncome(values))

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

      <TextField
        select
        label="Category"
        id="category"
        name="category"
        value={formik.values.category}
        onChange={formik.handleChange}
        error={formik.touched.category && Boolean(formik.errors.category)}
        fullWidth
      >
        {categories.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}

export default memo(CreateIncomeForm)
