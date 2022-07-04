import { useRouter } from "next/router"
import { navigation } from "../../translations/navigation"

import { useState, useEffect, useContext } from "react"
import { SectionContext } from "../../contexts/section"
import { MenuContext } from "../../contexts/menu"

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageSelector from "../../components/LanguageSelector"
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import StyledButton from "../../components/StyledButton"

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
    box-shadow: ${props => props.shadow ? `0px 0px 5px ${props.theme.palette.primary.main}` : 'none'};
    transition: 0.4s;
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
`

const Anchor = styled.a`
    font-size: 24px;
    line-height: 24px;
    transition: 0.4s;

    &:hover {
        color: ${props => props.theme.palette.primary.main};
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
    transition: color 0.4s;
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
    box-sizing: border-box;
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.dark};
    top: 0;
    right: ${props => props.show ? "0" : "-100%"};
    transition: 0.4s ease-in-out;
    box-shadow: ${props => `inset 0px 0px 5px ${props.theme.palette.primary.main}`};

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
        padding: 0;
    }
`

const SmallListItem = styled.li`
    padding-bottom: 10px;
    transition: 0.4s;
    cursor: pointer;
    color : ${props => props.active ? props.theme.palette.primary.main : props.theme.palette.text.light};

    &:hover {
        color: ${props => props.theme.palette.primary.main};
    }
`

export default function Navbar() {
    const { locale } = useRouter()
    const { isOpen, setIsOpen } = useContext(MenuContext)
    const [shadowNavbar, setShadowNavbar] = useState(false)
    
    const {
        homeRefInView,
        homeEntry,
        aboutRefInView,
        aboutEntry,
        portfolioRefInView,
        portfolioEntry,
        contactRefInView,
        contactEntry,
        footerRefInView
    } = useContext(SectionContext)

    const lowerThanMd = useMediaQuery(theme => theme.breakpoints.down('md'))

    function handleScrollIntoSection(entry) {
        entry.target.scrollIntoView()

        if(lowerThanMd) {
            setIsOpen(false)
        }
    }

    useEffect(() => {
        function stickyNavbar() {
            if (window.scrollY > 0) {
                setShadowNavbar(true)
            } else {
                setShadowNavbar(false)
            }
        }   

        window.addEventListener('scroll', stickyNavbar)

        return () => {
            window.removeEventListener('scroll', stickyNavbar)    
        }
    }, [])

    return(
        <Wrapper shadow={shadowNavbar ? 1 : 0}>
            <Container maxWidth="xl">
                <Navigation>
                    <SocialContainer>
                        <li>
                            <Anchor 
                                href="https://github.com/gbeserra95"
                                target={"_blank"}
                                rel={"noreferrer"}
                                aria-label="Github profile"
                            >
                                <GitHubIcon fontSize='inherit'/>
                            </Anchor>
                        </li>
                        <li>
                            <Anchor 
                                href="https://www.linkedin.com/in/-gabrielbeserra/"
                                target={"_blank"}
                                rel={"noreferrer"}
                                aria-label="LinkedIn profile"
                            >
                                <LinkedInIcon fontSize='inherit'/>
                            </Anchor>
                        </li>
                        <li>
                            <LanguageSelector />
                        </li>
                    </SocialContainer>
                    {lowerThanMd ? 
                        <MenuButton 
                            onClick={() => setIsOpen(true)}
                        />
                    :
                        navigation
                            .filter(item => item.locale === locale)
                            .map(content => 
                                <ListContainer key={"navbar-1-" + locale}>
                                    <ListItem 
                                        active={homeRefInView ? 1 : 0} 
                                        onClick={() => handleScrollIntoSection(homeEntry)}
                                    >
                                        {content.home}
                                    </ListItem>
                                    <ListItem 
                                        active={aboutRefInView ? 1 : 0} 
                                        onClick={() => handleScrollIntoSection(aboutEntry)}
                                    >
                                        {content.about}
                                    </ListItem>
                                    <ListItem 
                                        active={portfolioRefInView ? 1 : 0} 
                                        onClick={() => handleScrollIntoSection(portfolioEntry)}
                                    >
                                        {content.portfolio}
                                    </ListItem>
                                    <ListItem 
                                        active={contactRefInView || footerRefInView ? 1 : 0} 
                                        onClick={() => handleScrollIntoSection(contactEntry)}
                                    >
                                        {content.contact}
                                    </ListItem>
                                    <ListItem>
                                        <StyledButton 
                                            style={{width: '118px'}}
                                            href={locale === "pt-BR" ? "assets/resumes/cvGabrielBeserraPT.pdf" : "assets/resumes/cvGabrielBeserraEN.pdf"}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {content.resume}
                                        </StyledButton>
                                    </ListItem>
                                </ListContainer>    
                            )
                    }
                </Navigation>
            </Container>
            <Overflow show={isOpen}>
                <div>
                    <CloseButton 
                        onClick={() => setIsOpen(false)}
                    />
                </div>
                {navigation
                    .filter(item => item.locale === locale)
                    .map(content => 
                        <ul key={"navbar-2-" + locale}>
                            <SmallListItem 
                                active={homeRefInView ? 1 : 0} 
                                onClick={() => handleScrollIntoSection(homeEntry)}
                            >
                                {content.home}
                            </SmallListItem>
                            <SmallListItem 
                                active={aboutRefInView ? 1 : 0} 
                                onClick={() => handleScrollIntoSection(aboutEntry)}
                            >
                                {content.about}
                            </SmallListItem>
                            <SmallListItem 
                                active={portfolioRefInView ? 1 : 0} 
                                onClick={() => handleScrollIntoSection(portfolioEntry)}
                            >
                                {content.portfolio}
                            </SmallListItem>
                            <SmallListItem 
                                active={contactRefInView || footerRefInView ? 1 : 0} 
                                onClick={() => handleScrollIntoSection(contactEntry)}
                            >
                                {content.contact}
                            </SmallListItem>
                            <SmallListItem onClick={() => setIsOpen(false)}>
                                <StyledButton 
                                    color="secondary" 
                                    style={{width: '118px'}}
                                    href={locale === "pt-BR" ? "assets/resumes/cvGabrielBeserraPT.pdf" : "assets/resumes/cvGabrielBeserraEN.pdf"}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {content.resume}
                                </StyledButton>
                            </SmallListItem>
                        </ul>
                )}
            </Overflow>
        </Wrapper>
    )
}