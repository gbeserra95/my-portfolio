import styled from "@emotion/styled"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        filter: brightness(1.2);
    }
    
`

const LineWrapper = styled.div`
    position: relative;
    display: flex;
    width: 18px;
    margin: 8px auto;
    height: 30vh;
    justify-content: center;

    &::after {
        box-sizing: border-box;
        content: " ";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: transparent;
        height: 18px;
        width: 18px;
        transform: rotate(45deg);
        border-right : ${props => `3px solid ${props.theme.palette.primary.main}`};
        border-bottom : ${props => `3px solid ${props.theme.palette.primary.main}`};
    }
`

const Line = styled.div`
    width: 3px;
    height: 100%;
    background: ${props => `repeating-linear-gradient(
        0deg, 
        transparent, 
        transparent 10px, 
        ${props.theme.palette.primary.main} 10px, 
        ${props.theme.palette.primary.main} 20px)`
    };
`

export default function DashedArrow({ children }) {
    return (
        <Wrapper>
            <h3>{children}</h3>
            <LineWrapper>
                <Line />
            </LineWrapper>
        </Wrapper>
    )
}