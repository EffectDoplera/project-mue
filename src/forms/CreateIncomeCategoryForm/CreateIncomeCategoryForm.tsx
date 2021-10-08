import { Button, Stack, TextField, Typography } from '@mui/material'
import { IncomeCategoryService } from 'src/data/services'
import { useFormik } from 'formik'
import { memo, FC } from 'react'
import { FORM_TITLE, INITIAL_VALUES } from 'src/forms/CreateIncomeCategoryForm/CreateIncomeCategoryFormConfig'

interface CreateIncomeCategoryFormProps {}

const CreateIncomeCategoryForm: FC<CreateIncomeCategoryFormProps> = ({}) => {
  const createIncomeCategoryHandler = async (values: any) => await IncomeCategoryService.create(values.name)

  const formik = useFormik({
    initialValues: INITIAL_VALUES,
    onSubmit: createIncomeCategoryHandler,
  })

  return (
    <Stack p={2} spacing={2} component="form" onSubmit={formik.handleSubmit} width={600} alignItems="center">
      <Typography variant="h3">{FORM_TITLE}</Typography>

      <TextField
        label="Name"
        id="name"
        name="name"
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        onChange={formik.handleChange}
        fullWidth
      />

      <Button type="submit" fullWidth color="primary" variant="contained">
        Send
      </Button>
    </Stack>
  )
}

export default memo(CreateIncomeCategoryForm)
