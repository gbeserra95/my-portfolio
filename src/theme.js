import { createTheme } from '@mui/material/styles';

let theme = createTheme({
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
    },
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
        typography: {
            h1: {
                fontSize: '128px',
                lineHeight: '128px',
                marginLeft: '-8px',
                fontWeight: '400',
                margin: '0',
                padding: '0',
                fontFamily: 'Kanit',

                [theme.breakpoints.down('md')]: {
                    fontSize: '96px',
                    lineHeight: '96px',
                    margin: '8px 0',
                    marginLeft: '-4px',
                },

                [theme.breakpoints.down('sm')]: {
                    fontSize: '64px',
                    lineHeight: '64px',
                    marginLeft: '-4px'
                }
            },
            h2: {
                fontSize: '36px',
                fontWeight: '500',
                margin: '0',
                padding: '0',
                fontFamily: 'Kanit',
            },
            h3: {
                fontSize: '32px',
                fontWeight: '500',
                margin: '0',
                padding: '0',
                fontFamily: 'Kanit',
            },
            h4: {
                fontSize: '24px',
                fontWeight: '500',
                margin: '0',
                padding: '0',
                fontFamily: 'Kanit',
            },
            p: {
                fontSize: '20px',
                fontWeight: '300',
                margin: '8px 0',
                padding: '0',
                fontFamily: 'Kanit',
                span: {
                    color: theme.palette.highlight.main,
                    fontWeight: 600
                }
            }
        }
    }
)

export default theme