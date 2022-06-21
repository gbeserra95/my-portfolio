import { useContext } from "react"
import { MenuContext } from "../../contexts/menu"

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import ResumeButton from "../../components/ResumeButton"

import { Container, useMediaQuery } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    z-index: 1;
`

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 112px;
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

const ListContainer = styled.ul`
    display: flex;
    align-items: center;
    gap: 64px;
    list-style: none;
`

const ListItem = styled.li`
    font-size: 20px;
    font-weight: ${props => props.active ? "500" : "400"};
    border-bottom: ${props => props.active ? `3px solid ${props.theme.palette.primary.main}` : 'none'};
    padding-bottom: 10px;
    color: ${props => props.theme.palette.text.light};
    transition: 0.4s;
    cursor: pointer;

    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`

const MenuButton = styled(MenuIcon)`
    cursor: pointer;
    color: ${props => props.theme.palette.primary.main};
    transition: 0.4s;

    &:hover {
        filter: brightness(1.2);
    }
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
    color: ${props => props.theme.palette.primary.main};
    transition: 0.4s;

    &:hover {
        filter: brightness(1.2);
    }
`

const Overflow = styled.div`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    top: 0;
    right: ${props => props.show ? "0" : "-100%"};
    transition: 0.4s ease-in-out;

    div {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 112px;
        top: 0;
        left: 0;
        padding-right: 16px;
    }

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        list-style: none;
        font-size: 20px;
        gap: 32px;
        height: 100%;
        color: ${props => props.theme.palette.text.light};
        padding: 0;
    }

    li {
        padding-bottom: 10px;
        border-bottom: ${props => props.active ? `3px solid ${props.theme.palette.primary.main}` : 'none'};
        transition: 0.4s;
        cursor: pointer;

        &:hover {
            color: ${props => props.theme.palette.primary.main};
        }
    }
`

export default function Navbar() {
    const { isOpen, setIsOpen } = useContext(MenuContext)
    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))

    return(
        <Wrapper>
            <Container maxWidth="xl">
                <Navigation>
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
                    {lowerThanMd ? 
                        <MenuButton 
                            onClick={() => setIsOpen(true)}
                        />
                    :
                        <ListContainer>
                            <ListItem active>Home</ListItem>
                            <ListItem>About</ListItem>
                            <ListItem>Portfolio</ListItem>
                            <ListItem>Contact</ListItem>
                            <ListItem><ResumeButton>Resume</ResumeButton></ListItem>
                        </ListContainer>
                    }
                </Navigation>
            </Container>
            <Overflow show={isOpen}>
                <div>
                    <CloseButton 
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li><ResumeButton>Resume</ResumeButton></li>
                </ul>

            </Overflow>
        </Wrapper>
    )
}