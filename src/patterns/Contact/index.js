import Form from "../../components/Form"

import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.light};
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.theme.breakpoints.down('md')} {
        height: 100%;
        padding: 64px 0;
    }
`

const Content = styled.div`
    display: flex;
    width: min(100%, 635px);
    flex-direction: column;
    align-items: center;
    margin: auto;
`

export default function About() {
    return (
        <Wrapper id="contact">
            <Container maxWidth="xl">
                <Content>
                    <Typography variant="h2" color="primary" marginBottom={"32px"}>Say hello!</Typography>
                    <Typography variant="h3" color={theme => theme.palette.text.dark}>If you have a question, proposal or just want to know me better please reach me out.</Typography>
                    <Form />
                </Content>
            </Container>
        </Wrapper>
    )
}