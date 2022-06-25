import Image from "next/image"

import { Container, Grid, Typography, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    width: 100%;
    background-color: ${props => props.theme.palette.bg.light};

    ${props => props.theme.breakpoints.down('md')} {
        padding: 64px 0 0 0;
    }
`

const Content = styled.div`
    height: 100vh;
    justify-content: center;
    display: flex;
    flex-direction: column;

    ${props => props.theme.breakpoints.down('md')} {
        height: 100%;
    }
`

const ImageWrapper = styled.div`
    margin: auto 0;
    position: relative;
    width: 630px;
    height: 578px;

    ${props => props.theme.breakpoints.down('lg')} {
        width: 420px;
        height: 386px;
    }

    ${props => props.theme.breakpoints.down('md')} {
        margin-bottom: 48px;
    }
`

export default function About() {
    return (
        <Wrapper id="about">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
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
                            <Typography variant="p" color={theme => theme.palette.text.dark} marginBottom={{xs: "0", sm:"0", md: "0", lg:"16px"}}>
                                In this website, you can see some of the projects I have been working so far.
                            </Typography>
                        </Content>
                    </Grid>
                    <Grid item container xs={12} sm={12} md={6} lg={6} justifyContent={{xs: "center", sm: "center", md: "center", lg: "flex-end"}} alignItems={"center"} paddingBottom={{xs: "6", sm:"6", md: "6", lg: "0"}}>
                        <ImageWrapper>
                            <Image
                                src="/assets/stacks.png"
                                layout="fill"
                                objectFit="contain"
                                alt="Programing languages Gabriel Beserra works with: Next, React, Node, JavaScript and C sharp"
                            />
                        </ImageWrapper>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}