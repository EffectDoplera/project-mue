import { FC } from 'react'
import { Container } from '@mui/material'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    height: '100vh',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  container: {
    paddingTop: '30vh',
  },
})

const AuthLayout: FC = ({ children }) => {
  const styles = useStyles()

  return (
    <>
      <div className={styles.root}>
        <Container className={styles.container}>{children}</Container>
      </div>
    </>
  )
}

export default AuthLayout
