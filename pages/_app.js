import { MenuProvider } from "../src/contexts/menu"
import { SectionProvider } from "../src/contexts/section"
import { ThemeProvider } from '@mui/system'
import { Toaster } from 'react-hot-toast';
import theme from '../src/theme'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SectionProvider>
      <MenuProvider>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Toaster position="bottom-center" reverseOrder={false} />
        </ThemeProvider>
      </MenuProvider>
    </SectionProvider>
  )
}

export default MyApp
