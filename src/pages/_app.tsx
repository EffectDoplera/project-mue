import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import theme from 'theme'
import { Provider as AuthProvider } from 'next-auth/client'

// import '../../scripts/wdyr'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  /*
   * TODO: Использовать паттерн getLayout для согласования состояния страницы при изменении различных layout'ов
   *  https://nextjs.org/docs/basic-features/layouts#per-page-layouts
   */
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider session={pageProps.session}>
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
