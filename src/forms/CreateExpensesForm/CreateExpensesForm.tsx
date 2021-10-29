import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Autocomplete, Button, Stack, TextField, Typography, InputAdornment } from '@mui/material'
import { CreateExpenseDto } from 'core/domain'
import { useFormik } from 'formik'
import { INITIAL_VALUES } from './CreateExpense.config'
import { useAppDispatch, useAppSelector } from 'hooks'
import { createForCurrentUser, selectExpenseCategories } from 'store/expenseSlice'
import { FC } from 'react'

const CreateExpenseForm: FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const dispatch = useAppDispatch()

  const expenseCategories = useAppSelector(selectExpenseCategories)

  const createExpenseHandler = async (values: CreateExpenseDto) => {
    dispatch(createForCurrentUser(values))
    onFinish()
  }

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: createExpenseHandler,
  })

  return (
    <Stack
      p={2}
      spacing={2}
      component="form"
      onSubmit={formik.handleSubmit}
      width={{ xs: 300, sm: 500 }}
      alignItems="center"
    >
      <Typography variant="h3">New Expense</Typography>

      <TextField
        label="Title"
        id="title"
        name="title"
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        onChange={formik.handleChange}
        fullWidth
      />

      <TextField
        label="Amount"
        id="value"
        name="value"
        type="number"
        value={formik.values.value}
        onChange={formik.handleChange}
        error={formik.touched.value && Boolean(formik.errors.value)}
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">₽</InputAdornment>,
        }}
      />

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
        options={expenseCategories}
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

      <TextField
        label="Comment"
        id="comment"
        name="comment"
        value={formik.values.comment}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        onChange={formik.handleChange}
        fullWidth
      />

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}

export default CreateExpenseForm
