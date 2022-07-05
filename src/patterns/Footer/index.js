import React, { useContext } from "react"
import { useRouter } from "next/router"
import { footer } from "../../translations/footer"
import { navigation } from "../../translations/navigation"

import { SectionContext } from "../../contexts/section"

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import StyledButton from '../../components/StyledButton'

import { Container, Grid, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.footer`
    min-height: 50vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.theme.breakpoints.down('md')} {
        height: 100%;
        padding: 64px 0;
    }
`

const StyledAnchor = styled.a`
    transition: 0.4s;
    text-decoration: none;

    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    margin-bottom: 32px;
`

const Sections = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    align-items: flex-end;
    list-style: none;
    padding: 0;

    ${props => props.theme.breakpoints.down('sm')} {
        display: none;
    }

    li {
        color: ${props => props.theme.palette.text.light};
        transition: 0.4s;
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.palette.primary.main};
        }
    }
`

const Separator = styled.div`
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.palette.primary.main};
    list-style: none;
    margin-bottom: 16px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const SocialContainer = styled.ul`
    display: flex;
    gap: 24px;
    list-style: none;
    height: 24px;
    color: ${props => props.theme.palette.text.light};
    padding: 0;

    a {
        font-size: 24px;
        transition: 0.4s;

        &:hover {
            color: ${props => props.theme.palette.primary.main};
        }
    }
`

export default function Footer() {
    const { locale } = useRouter()
    const { 
            footerRef,
            homeEntry,
            aboutEntry,
            portfolioEntry,
            contactEntry
    } = useContext(SectionContext)

    function handleScrollIntoSection(entry) {
        entry.target.scrollIntoView()
    }

    return (
        <Wrapper ref={footerRef}>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={10}>
                        {React.Children.toArray(
                            footer
                                .filter(item => item.locale === locale)
                                .map(content => 
                                    <Content key={"footer-" + locale}>
                                        <Typography variant="h3" color="primary" margin={0}>{content.title}</Typography>
                                        <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                            <StyledAnchor href='mailto:gabriel.fernandesb@gmail.com'>gabriel.fernandesb@gmail.com</StyledAnchor>
                                        </Typography>
                                        <StyledButton
                                            style={{width: '112px'}}    
                                            href={locale === "pt-BR" ? "assets/resumes/cvGabrielBeserraPT.pdf" : "assets/resumes/cvGabrielBeserraEN.pdf"}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {content.resume}
                                        </StyledButton>
                                    </Content>
                        ))}
                    </Grid>
                    <Grid item xs={2}>
                        {navigation
                            .filter(item => item.locale === locale)
                            .map(content =>
                                <Sections key={"bottom-nav-1- + locale"}>
                                    <li>
                                        <Typography 
                                            variant="p" 
                                            color="inherit" 
                                            margin={0}
                                            onClick={() => handleScrollIntoSection(homeEntry)}
                                        >
                                            {content.home}
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography 
                                            variant="p" 
                                            color="inherit" 
                                            margin={0}
                                            onClick={() => handleScrollIntoSection(aboutEntry)}
                                        >
                                            {content.about}
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography 
                                            variant="p" 
                                            color="inherit" 
                                            margin={0}
                                            onClick={() => handleScrollIntoSection(portfolioEntry)}    
                                        >
                                            {content.portfolio}
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography 
                                            variant="p"
                                            color="inherit"
                                            margin={0}
                                            onClick={() => handleScrollIntoSection(contactEntry)}    
                                        >
                                            {content.contact}
                                        </Typography>
                                    </li>
                                </Sections>
                        )}
                    </Grid>
                    <Grid item xs={12}>
                        <Separator />
                        <Bottom>
                            {React.Children.toArray(footer
                                .filter(item => item.locale === locale)
                                .map(content =>
                                    <>
                                        {content.copy}
                                    </> 
                                )
                            )}
                            <SocialContainer>
                                <li>
                                    <StyledAnchor 
                                        href="https://github.com/gbeserra95"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                        aria-label="Github profile"
                                    >
                                        <GitHubIcon fontSize='inherit'/>
                                    </StyledAnchor>
                                </li>
                                <li>
                                    <StyledAnchor 
                                        href="https://www.linkedin.com/in/-gabrielbeserra/"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                        aria-label="LinkedIn profile"
                                    >
                                        <LinkedInIcon fontSize='inherit'/>
                                    </StyledAnchor>
                                </li>
                            </SocialContainer>
                        </Bottom>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}