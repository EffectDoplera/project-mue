import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Autocomplete, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { CreateTransactionDto } from 'core/domain'
import { CategoryType } from 'core/enums'
import { useFormik } from 'formik'
import { useAppDispatch, useTransactionSelector } from 'hooks'
import { FC } from 'react'
import { capitalizeFirstChar } from 'utils/helpers'
import { CreateTransactionSchema } from 'utils/validation'
import { INITIAL_VALUES_EXPENSE, INITIAL_VALUES_INCOMES } from './CreateTransaction.config'

interface CreateTransactionFormProps {
  onFinish: () => void
}

const CreateTransactionForm: FC<CreateTransactionFormProps> = ({ onFinish }) => {
  const dispatch = useAppDispatch()

  const { transactionOptions: expenseCategories, createForCurrentUser, transactionType } = useTransactionSelector()

  const CreateTransactionHandler = async (values: CreateTransactionDto) => {
    dispatch(createForCurrentUser(values))
    onFinish()
  }

  const getFormTitle = () => `New ${capitalizeFirstChar(transactionType)}`

  const getInitialValues = () =>
    transactionType === CategoryType.INCOME ? INITIAL_VALUES_INCOMES : INITIAL_VALUES_EXPENSE

  const formik = useFormik({
    initialValues: getInitialValues(),
    validationSchema: CreateTransactionSchema,
    onSubmit: CreateTransactionHandler,
  })

  return (
    <Stack
      p={2}
      spacing={1}
      component="form"
      onSubmit={formik.handleSubmit}
      width={{ xs: 300, sm: 500 }}
      alignItems="center"
    >
      <Typography variant="h3">{getFormTitle()}</Typography>

      <TextField
        label="Title"
        id="title"
        name="title"
        value={formik.values.title}
        error={formik.touched.title && Boolean(formik.errors.title)}
        helperText={formik.errors.title ?? ' '}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
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
        helperText={formik.errors.value ?? ' '}
        onBlur={formik.handleBlur}
        fullWidth
        required
        InputProps={{
          startAdornment: <InputAdornment position="start">₽</InputAdornment>,
        }}
      />

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="When"
          value={formik.values.date}
          onChange={formik.handleChange}
          renderInput={(params) => <TextField fullWidth required helperText={formik.errors.date ?? ' '} {...params} />}
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
            helperText={formik.errors.category ?? ' '}
            onBlur={formik.handleBlur}
            required
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
        helperText={formik.errors.comment ?? ' '}
        fullWidth
      />

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}

export default CreateTransactionForm
