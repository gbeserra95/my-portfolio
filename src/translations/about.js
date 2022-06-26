import { Typography } from "@mui/material"

export const about = [
    {
        locale: "pt-BR",
        title: "Sobre mim",
        description: 
            <>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    Oi, pessoal! Meu nome é <span>Gabriel Beserra</span> e eu construo websites.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    Sou um Desenvolvedor Frontend autodidata e apaixonado por programação, tenho um pouco mais de 6 meses de experiência na construção de aplicações web modernas com <span>React</span> e <span>Next.js</span>. Sou formado em Engenharia de Controle e Automação e trabalhei mais de 2 anos como Analista Industrial quando decidi iniciar minha carreira como Dev.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    Estou sempre estudando, criando e fazendo manutenções em sites para clientes. Todos os dias eu tento melhorar minhas habilidades de programação para me tornar um desenvolvedor Full Stack experiente.<br/>
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    Seja bem vindo ao meu portfólio de projetos e fique a vontade para conhecer um pouco do que tenho feito até o momento.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark} marginBottom={0}>
                    Até mais! 👋
                </Typography>
            </>
    },
    {
        locale: "en",
        title: "About me",
        description: 
            <>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                Hi, everyone! My name is <span>Gabriel Beserra</span> and I build websites.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    I am a self-learning and passionate Frontend Developer with over 6 months of experience building modern web applications with <span>React</span> and <span>Next.js</span>. I have a bachelor degree in Automation Engineering and worked over 2 years as Industrial Analyst when I decided to start my career as a freelance.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    I am always studying, creating and maintaining websites for customers. I attempt to improve my programming skills every day to become an experienced Full Stack developer.</Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark}>
                    Welcome to my personal portfolio and feel free to know a little bit more about my work so far.
                </Typography>
                <Typography variant="p" color={theme => theme.palette.text.dark} marginBottom={0}>
                    Cheers! 👋
                </Typography>
            </>
    }
]