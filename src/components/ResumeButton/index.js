import { Button } from "@mui/material"
import styled from "@emotion/styled"

const StyledButton = styled(Button)`
    font-size: 20px;
    font-weight: 300;
    font-family: 'Kanit', sans-serif;
    text-transform: none;
    border: ${props => `2px solid ${props.theme.palette.primary.main}`};
    background-color: transparent;
    color: ${props => props.theme.palette.text.light};
    border-radius: 8px;
    padding: 4px 14px;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme.palette.primary.main};
    }
`

export default function ResumeButton({ children, ...otherProps}) {
    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    )
}