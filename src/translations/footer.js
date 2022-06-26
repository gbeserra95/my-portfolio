import { Typography } from "@mui/material"

export const footer = [
    {
        locale: "pt-BR",
        title: "Entre em contato!",
        resume: "Currículo",
        copy: 
            <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                &copy; 2022 - Desenvolvido por Gabriel Beserra
            </Typography>   
    },
    {
        locale: "en",
        title: "Say hello!",
        resume: "Resume",
        copy: 
            <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                &copy; 2022 - Designed and built by Gabriel Beserra
            </Typography>  
    }
]