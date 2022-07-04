import { useRouter } from "next/router"
import { useRef } from "react"
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

import StyledInput from "../StyledInput"
import StyledTextArea from "../StyledTextArea"
import StyledButton from "../StyledButton"

import { Grid } from "@mui/material"
import styled from "@emotion/styled"

const Wrapper = styled.form`
    width: 100%;
`

export default function Form({name, email, message}) {    
    const { locale } = useRouter() 
    const formRef = useRef(null)

    const sendEmail = (e) => {
        e.preventDefault()
  
        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, formRef.current, process.env.NEXT_PUBLIC_KEY)
            .then(() => toast.success(locale === "pt-BR" ? 'Mensagem enviada com sucesso!' : 'Message sent successfully!'))
            .catch(() => toast.error(locale === "pt-BR" ? 'Não foi possível enviar a mensagem!' : 'Unable to send message!'))
            .finally(() => e.target.reset())       
    }

    return (
        <Wrapper ref={formRef} onSubmit={sendEmail}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label={name.nameLabel}
                        placeholder={name.namePlaceholder}
                        type="text"
                        id="fname"
                        name="user_name"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label={email.emailLabel}
                        placeholder={email.emailPlaceholder}
                        type="email"
                        id="femail"
                        name="user_email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextArea 
                        label={message.messageLabel}
                        placeholder={message.messagePlaceholder}
                        id="fmessage"
                        name="user_message"
                    />
                </Grid>
                <Grid item xs={12} container justifyContent={"center"}>
                    <StyledButton 
                        type="submit"
                        style={{
                            width: '160px'
                        }}
                    >
                        Send
                    </StyledButton>
                </Grid>
            </Grid>
        </Wrapper>
    )
}