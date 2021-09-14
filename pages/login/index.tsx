import { Button, Grid, Paper, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { AuthLayout } from 'layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageRoutes } from 'router'
import { useAuth } from 'src/hooks'

interface IFormFields {
  email: string
  password: string
}

const Login: NextPage = () => {
  const router = useRouter()
  const { signIn } = useAuth()

  const signInHandler = async (userData: IFormFields) => {
    await signIn(userData)
    router.push(PageRoutes.MAIN)
  }

  const formik = useFormik<IFormFields>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: signInHandler,
  })

  return (
    <AuthLayout>
      <Grid container item xs justifyContent="center" direction="column" alignItems="center" spacing={2}>
        <Paper component="form" onSubmit={formik.handleSubmit}>
          <Stack spacing={3} p={2} width="400px" alignItems="center">
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
      </Grid>
    </AuthLayout>
  )
}

export default Login
