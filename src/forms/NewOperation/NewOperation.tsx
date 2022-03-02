import { useMutation, useQuery } from '@apollo/client'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { Autocomplete, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { Currency, OperationType } from 'core/enums'
import { useFormik } from 'formik'
import { INITIAL_VALUES_EXPENSE } from 'forms/NewOperation/NewOperation.config'
import { CREATE_OPERATION } from 'graphql/mutations'
import { QUERY_ALL_OPERATION_CATEGORIES, QUERY_ALL_OPERATIONS } from 'graphql/querys'
import { FC } from 'react'
import { NexusGenObjects } from 'types'
import { CreateTransactionSchema } from 'utils/validation'

interface CreateTransactionFormProps {
  onFinish: () => void
}

export const NewOperation: FC<CreateTransactionFormProps> = ({ onFinish }) => {
  const [createOperation] = useMutation(CREATE_OPERATION, {
    refetchQueries: [
      {
        query: QUERY_ALL_OPERATIONS,
      },
    ],
  })
  const { data, loading } = useQuery(QUERY_ALL_OPERATION_CATEGORIES)

  const formik = useFormik({
    initialValues: INITIAL_VALUES_EXPENSE,
    validationSchema: CreateTransactionSchema,
    onSubmit: async ({ amount, title, category, date }) => {
      await createOperation({
        variables: {
          amount,
          category,
          currency: Currency.RUB,
          title,
          type: OperationType.EXPENSE,
          date,
        },
      }).catch((e) => console.log(e))
      onFinish()
    },
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
      <Typography variant="h3">{'New Expense'}</Typography>

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
        id="amount"
        name="amount"
        type="number"
        value={formik.values.amount}
        onChange={formik.handleChange}
        error={formik.touched.amount && Boolean(formik.errors.amount)}
        helperText={formik.errors.amount ?? ' '}
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
        id="category"
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={loading ? [] : (data?.allCategories as NexusGenObjects['OperationCategory'][])}
        loading={loading}
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
        id="commentary"
        name="commentary"
        value={formik.values.commentary}
        error={formik.touched.commentary && Boolean(formik.errors.commentary)}
        onChange={formik.handleChange}
        helperText={formik.errors.commentary ?? ' '}
        fullWidth
      />

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}
