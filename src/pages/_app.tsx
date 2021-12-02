import { CacheProvider, EmotionCache } from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from 'store/store'
import theme from 'themes/theme'
import { Provider as AuthProvider } from 'next-auth/client'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'lib/apollo'
import createEmotionCache from 'themes/createEmotionCache'

// import '../../scripts/wdyr'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps, emotionCache = clientSideEmotionCache }) => {
  const apolloClient = useApollo()
  /*
   * TODO: Использовать паттерн getLayout для согласования состояния страницы при изменении различных layout'ов
   *  https://nextjs.org/docs/basic-features/layouts#per-page-layouts
   */
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <AuthProvider session={pageProps.session}>
        <ApolloProvider client={apolloClient}>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </Provider>
        </ApolloProvider>
      </AuthProvider>
    </CacheProvider>
  )
}

export default MyApp
