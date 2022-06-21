import DashedArrow from "../../components/DashedArrow"

import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
`

const SubContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
`

const Content = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 48px;
`

export default function Cover() {
    return (
        <Wrapper id="home">
            <Container maxWidth="xl">
                <SubContainer>
                    <Content>
                        <Typography variant="h4" color="primary">Gabriel Beserra</Typography>
                        <Typography variant="h1" color={theme => theme.palette.text.light}>Frontend<br />Developer.</Typography>
                        <DashedArrow><Typography variant="h4" color="primary">Explore</Typography></DashedArrow>
                    </Content>
                </SubContainer>
            </Container>
        </Wrapper>
    )
}