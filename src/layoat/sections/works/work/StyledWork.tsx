import styled from 'styled-components'; 

type SyledWorkPropsType = {
    backgroundColor?: string;
    color?: string;
}

export const StyledWork = styled.div<SyledWorkPropsType>`
    background-color: ${props=> props.backgroundColor || "yellow"};
    color: ${props=> props.color || "white"};
`