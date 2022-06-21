import Image from "next/image"
import DashedArrow from "../../components/DashedArrow"

import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.light};
`

const SubContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100%;
`

const Content = styled.div`
    width: 50%;
    height: 100%;
    justify-content: flex-end;
    display: flex;
    flex-direction: column;
    padding-bottom: 16px;
`

const ImageWrapper = styled.div`
    margin: auto 0;
    position: relative;
    width: 630px;
    height: 578px;
`

export default function About() {
    return (
        <Wrapper id="about">
            <Container maxWidth="xl">
                <SubContainer>
                    <Content>
                        <Typography variant="h3" color="primary">About me</Typography>
                        <Typography variant="p" color={theme => theme.palette.text.dark}>
                            Hi, everyone! My name is <span>Gabriel Beserra</span> and I build websites.
                        </Typography>
                        <Typography variant="p" color={theme => theme.palette.text.dark}>
                            I am a self-learning and passionate Frontend Developer with some experience building modern web applications with <span>React</span> and <span>Next.js</span>. I have a bachelor degree in Automation Engineering and worked over 2 years as Industrial Analyst when I decided to quit my job to start my own business as a freelance. 
                        </Typography>
                        <Typography variant="p" color={theme => theme.palette.text.dark}>
                            I am always studying and trying to improve my programming skills to become an experienced Full Stack developer.
                        </Typography>
                        <Typography variant="p" color={theme => theme.palette.text.dark} marginBottom="16px">
                            In this website, you can see some of the projects I have been working so far.
                        </Typography>
                        <DashedArrow><Typography variant="h4" color="primary" textAlign={"center"}>Check out<br />my work!</Typography></DashedArrow>
                    </Content>
                    <ImageWrapper>
                        <Image
                            src="/assets/stacks.png"
                            layout="fill"
                            objectFit="contain"
                            alt="Programing languages Gabriel Beserra works with: Next, React, Node, JavaScript and C sharp"
                        />
                    </ImageWrapper>
                </SubContainer>
            </Container>
        </Wrapper>
    )
}