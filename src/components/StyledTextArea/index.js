import styled from "@emotion/styled"

const Wrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.palette.primary.main};
    transition: 0.4s;

    &:hover {
        border-bottom: 3px solid ${props => props.theme.palette.primary.main}; 
    }
`

const Label = styled.label`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    font-family: 'Kanit';
    font-weight: 500;
    font-size: 12px;
    color: ${props => props.theme.palette.primary.main};
    border-bottom: 2px solid ${props => props.theme.palette.primary.main};  
`

const TextArea = styled.textarea`
    font-family: 'Kanit';
    font-weight: 300;
    font-size: 18px;
    color: ${props => props.theme.palette.text.dark};
    border: none;
    resize: none;
    width: 100%;

    &::placeholder {
        color: '#a9a9a9';
    }

    &:focus {
        outline: none;
    }
`

export default function StyledTextArea({label, name, placeholder, id}) {
    return (
        <Label>{label}
            <TextArea 
                placeholder={placeholder}
                id={id}
                name={name}
                rows="6"
                required
            />
        </Label>
    )
}