import { grey } from '@mui/material/colors'
import { createTheme, ThemeOptions } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary']
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary']
  }
}

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// })

export const theme = () => {
  const themeOptions: ThemeOptions = {
    direction: 'ltr',
    palette: {
      primary: {
        light: '#e3f2fd',
        main: '#2196f3',
        dark: '#1e88e5',
        200: '#90caf9',
        800: '#1565c0',
      },
      secondary: {
        light: '#ede7f6',
        main: '#673ab7',
        dark: '#5e35b1',
        200: '#b39ddb',
        800: '#4527a0',
      },
      success: {
        light: '#b9f6ca',
        main: '#00e676',
        dark: '#00c853',
        200: '#69f0ae',
      },
      error: {
        light: '#ef9a9a',
        main: '#f44336',
        dark: '#c62828',
      },
      warning: {
        light: '#fff8e1',
        main: '#ffe57f',
        dark: '#ffc107',
      },
      text: {
        primary: '#bdc8f0',
        secondary: '#8492c4',
      },
    },
    typography: {
      h6: {
        fontWeight: 500,
        color: grey['900'],
        fontSize: '0.75rem',
      },
      h5: {
        fontSize: '0.875rem',
        color: grey['900'],
        fontWeight: 500,
      },
      h4: {
        fontSize: '1rem',
        color: grey['900'],
        fontWeight: 600,
      },
      h3: {
        fontSize: '1.25rem',
        color: grey['900'],
        fontWeight: 600,
      },
      h2: {
        fontSize: '1.5rem',
        color: grey['900'],
        fontWeight: 700,
      },
      h1: {
        fontSize: '2.125rem',
        color: grey['900'],
        fontWeight: 700,
      },
      subtitle1: {
        fontSize: '0.875rem',
        fontWeight: 500,
        color: grey['900'],
      },
      subtitle2: {
        fontSize: '0.75rem',
        fontWeight: 400,
        color: grey['500'],
      },
      caption: {
        fontSize: '0.75rem',
        color: grey['500'],
        fontWeight: 400,
      },
      body1: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: '1.334em',
      },
      body2: {
        letterSpacing: '0em',
        fontWeight: 400,
        lineHeight: '1.5em',
        color: grey['700'],
      },
      button: {
        textTransform: 'capitalize',
      },
    },
  }

  return createTheme()
}

export default theme()
