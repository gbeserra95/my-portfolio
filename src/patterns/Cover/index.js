import { useRouter } from "next/router"
import { home } from "../../translations/home"

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
    const { locale } = useRouter()

    return (
        <Wrapper id="home">
            <Container maxWidth="xl">
                <SubContainer>
                    {home
                        .filter(item => item.locale === locale)
                        .map(content => 
                            <Content key={"cover-" + locale}>
                                <Typography variant="h4" color="primary">Gabriel Beserra</Typography>
                                {content.title}
                                <DashedArrow><Typography variant="h4" color="primary">{content.explore}</Typography></DashedArrow>
                            </Content>
                        )
                    }
                </SubContainer>
            </Container>
        </Wrapper>
    )
}