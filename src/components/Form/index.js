import StyledInput from "../StyledInput"
import StyledTextArea from "../StyledTextArea"
import StyledButton from "../StyledButton"

import { Grid } from "@mui/material"
import styled from "@emotion/styled"

import theme from "../../theme"

const Wrapper = styled.form`
    width: 100%;
`

export default function Form({name, email, message, onSubmit}) {    
    return (
        <Wrapper onSubmit={onSubmit}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label={name.nameLabel}
                        placeholder={name.namePlaceholder}
                        type="text"
                        id="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label={email.emailLabel}
                        placeholder={email.emailPlaceholder}
                        type="email"
                        id="femail"
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextArea 
                        label={message.messageLabel}
                        placeholder={message.messagePlaceholder}
                        id="fmessage"
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