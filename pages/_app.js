import { MenuProvider } from "../src/contexts/menu"
import { SectionProvider } from "../src/contexts/section"
import { ThemeProvider } from '@mui/system'
import theme from '../src/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SectionProvider>
      <MenuProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MenuProvider>
    </SectionProvider>
  )
}

export default MyApp
