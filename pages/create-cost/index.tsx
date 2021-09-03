import { MainLayout } from 'layouts'
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { useFormik } from 'formik'

interface IFormFields {
  name: string
  value: string
  date: string
  category: string
}

const CreateCost = () => {
  const formik = useFormik<IFormFields>({
    initialValues: {
      name: 'default',
      value: '1000',
      date: '2017-10-10',
      category: 'default',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <MainLayout>
      <Grid container alignItems="center" justifyContent="center" direction="column">
        <Paper>
          <Box p={4}>
            <Grid container alignItems="center" justifyContent="center" direction="column">
              <Grid item>
                <Typography variant="h3">New Consumption</Typography>
              </Grid>

              <Grid item>
                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Name"
                        id="name"
                        name="name"
                        value={formik.values.name}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        onChange={formik.handleChange}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Amount"
                        id="value"
                        name="value"
                        value={formik.values.value}
                        onChange={formik.handleChange}
                        error={formik.touched.value && Boolean(formik.errors.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="When"
                        id="date"
                        name="date"
                        value={formik.values.date}
                        onChange={formik.handleChange}
                        error={formik.touched.date && Boolean(formik.errors.date)}
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Category"
                        id="category"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        error={formik.touched.category && Boolean(formik.errors.category)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button type="submit" fullWidth color="primary" variant="contained">
                        Send
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Grid>
    </MainLayout>
  )
}

export default CreateCost
