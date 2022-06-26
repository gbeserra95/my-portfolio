import { Typography } from "@mui/material"

export const home = [
    {
        locale: "pt-BR",
        title: 
            <>
                <Typography 
                    variant="h1"
                    color={theme => theme.palette.text.light}
                    marginTop={{xs: '0', sm: '8px', md: '0'}}
                    marginBottom={{xs: '0', sm: '0', md: '0'}}
                    fontSize={{xs: '48px', sm: '84px', md: "128px"}}
                    lineHeight={{xs: '72px', sm: '96px', md: '128px'}}
                >
                    Desenvolvedor
                </Typography>
                <Typography 
                    variant="h1"
                    color={theme => theme.palette.text.light}
                    marginTop={{xs: '0', sm: '0'}}
                >
                    Frontend.
                </Typography>
        
            </>,
        explore: "Explore"
    },
    {
        locale: "en",
        title: <Typography variant="h1" color={theme => theme.palette.text.light}>Frontend<br />Developer.</Typography>,
        explore: "Explore"
    }
]