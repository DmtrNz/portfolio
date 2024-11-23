import styled from 'styled-components';

type StyledButtonPropsType = {
    color?: string;
    backgroundColor?: string;
    border?: string;
    margin?: string;
    padding?: string;
}

export const StyledButton = styled.button<StyledButtonPropsType>`
    background-color: ${props=> props.backgroundColor || "green"};
    color: ${props=> props.color || "red"};
    border: ${props=> props.border || "solid 2px red"};
    margin: ${props=> props.margin || "0"};
    padding: ${props=> props.margin || "0"};;
`
