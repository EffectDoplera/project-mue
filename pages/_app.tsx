import { FC } from 'react'
import Head from 'next/head'
import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../theme'
import { AppProps } from 'next/app'
import { AuthProvider } from 'src/contexts/auth/authContext'
import { Provider } from 'react-redux'
import { store } from 'src/store/store'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

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
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StyledEngineProvider>
        </Provider>
      </AuthProvider>
    </>
  )
}

export default MyApp
