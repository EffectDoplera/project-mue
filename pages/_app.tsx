import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { FC } from 'react'
import { wrapper } from 'src/store/store'
import theme from '../theme'

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
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp)
