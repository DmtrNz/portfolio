import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { theme } from "../../styles/Theme";

const items = ["Home", "About", "Sevices"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper  justify={"space-between"} align={"center"}>
                    <Logo />
                    <HeaderMenu menuItems={items} />
                    <StyledContactMe href="">Contact Me</StyledContactMe>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: rgba(31,31,32,0.0);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`

const StyledContactMe = styled.a`
        padding: 10px 20px;
        background-color: ${theme.colors.accent};
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;

        &:hover{
        color: ${theme.colors.accent};
        background-image: linear-gradient(to right, ${theme.colors.font}, ${theme.colors.accent});
        background-clip: text;
        transform: scale(1.3) translateY(-0.25px);
        transition: 1s;
    }
`

