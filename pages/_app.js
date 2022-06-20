import { MenuProvider } from "../src/contexts/menu"
import { ThemeProvider } from '@mui/system'
import theme from '../src/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <MenuProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MenuProvider>
  )
}

export default MyApp
