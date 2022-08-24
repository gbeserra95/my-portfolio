import { Typography } from '@mui/material';

export const about = [
	{
		locale: 'pt-BR',
		title: 'Sobre mim',
		description: (
			<>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Oi, pessoal! Meu nome é <span>Gabriel Beserra</span> e eu
					construo websites.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Sou um Desenvolvedor autodidata e apaixonado por
					programação. Tenho um pouco mais 1 ano de experiência na
					construção de aplicações web modernas com <span>React</span>
					, <span>Next.js</span> e <span>.NET</span>. Sou formado em
					Engenharia de Controle e Automação e trabalhei por mais de 2
					anos como Analista Industrial quando decidi seguir minha
					carreira como Dev.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Estou sempre estudando, criando e fazendo manutenções em
					sites para clientes. Todos os dias eu tento melhorar minhas
					habilidades de programação para me tornar um desenvolvedor
					Full Stack experiente.
					<br />
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Seja bem vindo ao meu portfólio de projetos e fique a
					vontade para conhecer um pouco do que tenho feito até o
					momento.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
					marginBottom={0}
				>
					Até mais! 👋
				</Typography>
			</>
		),
	},
	{
		locale: 'en',
		title: 'About me',
		description: (
			<>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Hi, everyone! My name is <span>Gabriel Beserra</span> and I
					build websites.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					I am a self-learning and passionate Developer with over 1
					year of experience building modern web applications with{' '}
					<span>React</span>, <span>Next.js</span> and{' '}
					<span>.NET</span>. I have a bachelor degree in Automation
					Engineering and worked over 2 years as Industrial Analyst
					when I decided to pursue my career as a Dev.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					I am always studying, creating and maintaining websites for
					customers. I attempt to improve my programming skills every
					day to become an experienced Full Stack Developer.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
				>
					Welcome to my personal portfolio and feel free to know a
					little bit more about my work.
				</Typography>
				<Typography
					variant='p'
					color={(theme) => theme.palette.text.dark}
					marginBottom={0}
				>
					Cheers! 👋
				</Typography>
			</>
		),
	},
];
