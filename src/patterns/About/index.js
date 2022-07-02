import { useRouter } from "next/router"
import { about } from "../../translations/about"

import { useContext } from "react"
import { SectionContext } from "../../contexts/section"

import Image from "next/image"

import { Container, Grid, Typography, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    width: 100%;
    background-color: ${props => props.theme.palette.bg.light};

    ${props => props.theme.breakpoints.down('md')} {
        padding: 160px 0 0 0;
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
    const { locale } = useRouter()
    const { aboutRef } = useContext(SectionContext)

    return (
        <Wrapper ref={aboutRef}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6}>  
                        {about
                            .filter(item => item.locale === locale)
                            .map(content => 
                                <Content key={"about-" + locale}>
                                    <Typography variant="h3" color="primary">
                                        {content.title}
                                    </Typography>
                                    {content.description}
                                </Content>
                            )
                        }
                    </Grid>
                    <Grid item container xs={12} sm={12} md={6} lg={6} justifyContent={{xs: "center", sm: "center", md: "center", lg: "flex-end"}} alignItems={"center"} paddingBottom={{xs: "6", sm:"6", md: "6", lg: "0"}}>
                        <ImageWrapper>
                            <Image
                                src="/assets/images/stacks.png"
                                layout="fill"
                                objectFit="contain"
                                alt={locale === "en" ? 
                                        "Pictures containing highlighted words of the following stacks: Next, React, Node, JavaScript and C sharp" :
                                        "Imagem com palavras em destaques das seguintes stacks: Next, React, Node, Javascript e C sharp."
                                }
                            />
                        </ImageWrapper>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}