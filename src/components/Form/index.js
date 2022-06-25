import StyledInput from "../StyledInput"
import StyledTextArea from "../StyledTextArea"
import StyledButton from "../StyledButton"

import { Grid } from "@mui/material"
import styled from "@emotion/styled"

import theme from "../../theme"

const Wrapper = styled.form`
    width: 100%;
`

export default function Form({onSubmit}) {    
    return (
        <Wrapper onSubmit={onSubmit}>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label="Name"
                        placeholder="Enter your name"
                        type="text"
                        id="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <StyledInput
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        id="femail"
                    />
                </Grid>
                <Grid item xs={12}>
                    <StyledTextArea 
                        label="Message"
                        placeholder="Hello, nice to meet you! I need a developer to create a landing page for my company, please let me know how soon you can get in touch so we can discuss our project."
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