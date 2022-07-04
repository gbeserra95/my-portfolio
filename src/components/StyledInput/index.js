import styled from "@emotion/styled"

const Label = styled.label`
    font-family: 'Kanit';
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.palette.primary.main};
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.palette.primary.main};
`

const Input = styled.input`
    font-family: 'Kanit';
    font-weight: 300;
    font-size: 18px;
    color: ${props => props.theme.palette.text.dark};
    border: none;

    &::placeholder {
        color: '#a9a9a9';
    }

    &:focus {
        outline: none;
    }
`

export default function StyledInput({label, name, placeholder, type, id}) {
    return (
        <Label>
            {label}
            <Input 
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                required
            />
        </Label>
    )
}