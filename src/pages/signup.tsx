import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { AuthLayout } from 'layouts'
import { NextPage } from 'next'
import Link from 'next/link'
import { PageRoutes } from 'router'
import { SignUpSchema } from 'utils/validation'

interface IFormFields {
  email: string
  password: string
  confirmPassword: string
}

const Signup: NextPage = () => {
  const formik = useFormik<IFormFields>({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async () => ({}),
  })

  return (
    <AuthLayout>
      <Stack spacing={3} minWidth="400px">
        <Paper component="form" onSubmit={formik.handleSubmit}>
          <Stack spacing={2} p={2} alignItems="center">
            <Typography>{"Welcome to Project Mue. Let's begin the adventure"}</Typography>
            <Stack minWidth="400px" spacing={1}>
              <TextField
                autoComplete="username"
                label="Email address"
                size="small"
                id="email"
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.errors.email ?? ' '}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                size="small"
                id="password"
                value={formik.values.password}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.errors.password ?? ' '}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
              <TextField
                label="Confirm password"
                type="password"
                size="small"
                id="confirmPassword"
                value={formik.values.confirmPassword}
                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                helperText={formik.errors.confirmPassword ?? ' '}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                fullWidth
              />
            </Stack>
            <Button fullWidth variant="contained" type="submit" color="success">
              Sign up
            </Button>
          </Stack>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant={'body2'} noWrap>
            Already have an account? <Link href={PageRoutes.LOGIN}>{'Sign in ->'}</Link>
          </Typography>
        </Paper>
      </Stack>
    </AuthLayout>
  )
}

export default Signup
