import React from "react";
import styled from 'styled-components';
import { Icon } from "../ icon/Icon";
import { theme } from "../../styles/Theme";

export const Logo = () => {
    return (
        <StyledLogo>
            <Icon iconId={'mylogo'} width={"73px"} height={"45px"} viewBox={"0 0 73 45"}/>
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    &:hover{
            transition: 0.5s;
            transform: scale(1.15);
    }
`

