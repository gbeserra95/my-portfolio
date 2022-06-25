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

    a {
        transition: 0.4s;
        text-decoration: none;

        &:hover {
            color: ${props => props.theme.palette.primary.main};
        }
    }

    ${props => props.theme.breakpoints.down('md')} {
        height: 100%;
        padding: 64px 0;
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
    gap: 32px;
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

export default function About() {
    return (
        <Wrapper id="contact">
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={10}>
                        <Content>
                            <Typography variant="h3" color="primary" margin={0}>Say hello!</Typography>
                            <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                <a href='mailto:gabriel.fernandesb@gmail.com'>gabriel.fernandesb@gmail.com</a>
                            </Typography>
                            <StyledButton
                                style={{width: '112px'}}    
                            >
                                Resume
                            </StyledButton>
                        </Content>
                    </Grid>
                    <Grid item xs={2}>
                        <Sections>
                            <li>
                                <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                    <a href='#home'>Home</a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                    <a href='#about'>About</a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                    <a href='#portfolio'>Portfolio</a>
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                    <a href='#contact'>Contact</a>
                                </Typography>
                            </li>
                        </Sections>
                    </Grid>
                    <Grid item xs={12}>
                        <Separator />
                        <Bottom>
                            <Typography variant="p" color={theme => theme.palette.text.light} margin={0}>
                                &copy; 2022 - Designed and built by Gabriel Beserra
                            </Typography>
                            <SocialContainer>
                                <li>
                                    <a 
                                        href="https://github.com/gbeserra95"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                        aria-label="Github profile"
                                    >
                                        <GitHubIcon fontSize='inherit'/>
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://www.linkedin.com/in/-gabrielbeserra/"
                                        target={"_blank"}
                                        rel={"noreferrer"}
                                        aria-label="LinkedIn profile"
                                    >
                                        <LinkedInIcon fontSize='inherit'/>
                                    </a>
                                </li>
                            </SocialContainer>
                        </Bottom>
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}