import DashedArrow from "../../components/DashedArrow"

import { Container } from "@mui/system"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    height: 100vh;
    width: 100vw;
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
    padding-bottom: 16px;

    h1 {
        font-size: 128px;
        line-height: 128px;
        font-weight: 400;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.palette.text.light};
        margin-left: -8px;

        ${props => props.theme.breakpoints.down('md')} {
            font-size: 96px;
            line-height: 96px;
            margin: 8px 0;
            margin-left: -4px;
            
        }

        ${props => props.theme.breakpoints.down('sm')} {
            font-size: 64px;
            line-height: 64px;
            margin-left: -4px;
        }
    }

    h3 {
        font-size: 24px;
        font-weight: 500;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.palette.primary.main};

        ${props => props.theme.breakpoints.down('md')} {
            font-size: 20px;
        }

        ${props => props.theme.breakpoints.down('sm')} {
            font-size: 16px;
        }
    }
`

export default function Cover() {
    return (
        <Wrapper id="home">
            <Container maxWidth="xl">
                <SubContainer>
                    <Content>
                        <h3>Gabriel Beserra</h3>
                        <h1>Frontend<br />Developer.</h1>
                        <DashedArrow>Explore</DashedArrow>
                    </Content>
                </SubContainer>
            </Container>
        </Wrapper>
    )
}