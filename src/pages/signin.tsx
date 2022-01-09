import { Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { AuthLayout } from 'layouts'
import { NextPage } from 'next'
import Link from 'next/link'
import { PageRoutes } from 'router'

interface IFormFields {
  email: string
  password: string
}

const SignIn: NextPage = () => {
  const formik = useFormik<IFormFields>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
  })

  return (
    <AuthLayout>
      <Stack spacing={3} minWidth="400px">
        <Paper component="form" onSubmit={formik.handleSubmit}>
          <Stack spacing={3} p={2} alignItems="center">
            <Typography>Sign in to Project Mue</Typography>
            <TextField
              autoComplete="username"
              label="Email address"
              size="small"
              id="email"
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              onChange={formik.handleChange}
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              size="small"
              id="password"
              autoComplete="current-password"
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onChange={formik.handleChange}
              fullWidth
            />
            <Button fullWidth variant="contained" type="submit" color="success">
              Sign in
            </Button>
          </Stack>
        </Paper>

        <Paper sx={{ p: 2 }}>
          <Typography variant={'body2'} noWrap>
            New to {process.env.NEXT_PUBLIC_APP_NAME}? <Link href={PageRoutes.SIGN_UP}>Create an account.</Link>
          </Typography>
        </Paper>
      </Stack>
    </AuthLayout>
  )
}

export default SignIn
