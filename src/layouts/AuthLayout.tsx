import { FC } from 'react'
import { CircularProgress, Container } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'
import { useAppSelector } from 'hooks'
import { selectIsLoading } from 'store/globalSlice'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  container: {
    paddingTop: '30vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const AuthLayout: FC = ({ children }) => {
  const styles = useStyles()
  const isLoading = useAppSelector(selectIsLoading)

  return (
    <>
      <div className={styles.root}>
        <Container className={styles.container}>{isLoading ? <CircularProgress disableShrink /> : children}</Container>
      </div>
    </>
  )
}

export default AuthLayout
