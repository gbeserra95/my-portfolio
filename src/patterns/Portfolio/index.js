import ProjectCard from "../../components/ProjectCard"
import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    padding-top: 160px;

    ${props => props.theme.breakpoints.down('md')} {
        padding: 64px 0;
    }
`

export default function Portfolio() {
    return (
        <Wrapper id="portfolio">
            <Container maxWidth="xl">
                <Typography variant="h3" color="primary">Portfolio</Typography>
                <ProjectCard />
            </Container>
        </Wrapper>
    )
}