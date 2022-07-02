import { useRouter } from "next/router"
import { contact } from "../../translations/contact"

import { useContext } from "react"
import { SectionContext } from "../../contexts/section"

import Form from "../../components/Form"

import { Container, Typography } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.palette.bg.light};
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => props.theme.breakpoints.down('md')} {
        height: 100%;
        padding: 64px 0;
    }
`

const Content = styled.div`
    display: flex;
    width: min(100%, 704px);
    flex-direction: column;
    align-items: center;
    margin: auto;
`

export default function About() {
    const { locale } = useRouter()
    const { contactRef } = useContext(SectionContext)

    return (
        <Wrapper ref={contactRef}>
            <Container maxWidth="xl">
                {contact
                    .filter(item => item.locale === locale)
                    .map(content => 
                        <Content key={"contact-" + locale}>
                            <Typography variant="h2" color="primary" marginBottom={"32px"}>
                                {content.title}
                            </Typography>
                            <Typography variant="h3" color={theme => theme.palette.text.dark} textAlign="center">
                                {content.description}
                            </Typography>
                            <Form 
                                name={{
                                    nameLabel: content.nameLabel,
                                    namePlaceholder: content.namePlaceholder
                                }}
                                email={{
                                    emailLabel: content.emailLabel,
                                    emailPlaceholder: content.emailPlaceholder
                                }}
                                message={{
                                    messageLabel: content.messageLabel,
                                    messagePlaceholder: content.messagePlaceholder
                                }}
                            />
                        </Content>
                    )
                }

            </Container>
        </Wrapper>
    )
}