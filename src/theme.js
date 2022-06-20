import { createTheme } from '@mui/material/styles';

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1420,
            xl: 1640,
        },
    }
})

theme = createTheme(theme, 
    {
        palette: {
            primary: {
                main: '#2081C3'
            },
            secondary: {
                main: '#23967F'
            },
            highlight: {
                main: '#AF42AE'
            },
            text: {
                dark: '#0d1117',
                light: '#FFFEFD'
            },
            bg: {
                dark: '#0d1117',
                light: '#FFFEFD'
            }
        }
    }
)

export default theme