import { useRouter } from "next/router"
import { portfolio } from "../../translations/portfolio"

import { useContext } from "react"
import { SectionContext } from "../../contexts/section"

import { projects } from "../../data"

import ProjectCard from "../../components/ProjectCard"
import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    padding: 256px 0 96px 0;

    ${props => props.theme.breakpoints.down('md')} {
        padding: 160px 0 48px 0;
    }
`

export default function Portfolio() {
    const { locale } = useRouter()
    const { portfolioRef } = useContext(SectionContext)

    return (
        <Wrapper ref={portfolioRef}>
            <Container maxWidth="xl">
                {portfolio
                    .filter(item => item.locale === locale)
                    .map(content => 
                        <Typography variant="h3" color="primary" key={"portfolio-" + locale} marginBottom="48px">{content.title}</Typography>
                    )
                }
                {projects.filter(project => project.locale === locale)
                    .map(content =>
                        <ProjectCard 
                            title={content.title}
                            category={content.category}
                            description={content.description}
                            stacks={content.stacks}
                            github={content.github}
                            link={content.link}
                            preview={content.preview}
                        />
                    )
                }
            </Container>
        </Wrapper>
    )
}