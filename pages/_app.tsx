import { FC } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import { AppProps } from 'next/app'
import { AuthProvider } from '../context/auth/authContext'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  /*
   * TODO: Использовать паттерн getLayout для согласования состояния страницы при изменении различных layout'ов
   *  https://nextjs.org/docs/basic-features/layouts#per-page-layouts
   */
  return (
    <>
      <Head>
        <title>Project Mue</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}

export default MyApp
