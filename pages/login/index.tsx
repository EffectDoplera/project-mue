import { Box, Grid, Paper, TextField, Typography, Button } from '@mui/material'
import { useAuth } from 'context/auth/authContext'
import { useFormik } from 'formik'
import { AuthLayout } from 'layouts'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { PageRoutes } from 'router'

interface IFormFields {
  email: string
  password: string
}

const Login: NextPage = () => {
  const router = useRouter()
  const { login } = useAuth()

  const signIn = async ({ email, password }: IFormFields) => {
    await login(email, password)
    router.push(PageRoutes.MAIN)
  }

  const formik = useFormik<IFormFields>({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: signIn,
  })

  return (
    <AuthLayout>
      <Grid container justifyContent="center" direction="column" alignItems="center" spacing={2}>
        <Grid item xs>
          <Box width="400px">
            <Paper component="form" onSubmit={formik.handleSubmit}>
              <Grid container alignItems="center" spacing={2} direction="column">
                <Grid item xs>
                  <Typography>Sign in to Project Mue</Typography>
                </Grid>
                <Grid container item xs spacing={2} direction="column">
                  <Grid item xs>
                    <TextField
                      label="Email address"
                      size="small"
                      id="email"
                      value={formik.values.email}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      onChange={formik.handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Password"
                      type="password"
                      size="small"
                      id="password"
                      value={formik.values.password}
                      error={formik.touched.password && Boolean(formik.errors.password)}
                      onChange={formik.handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs>
                    <Button fullWidth variant="contained" type="submit" color="success">
                      Sign in
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </AuthLayout>
  )
}

export default Login