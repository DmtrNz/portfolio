import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

const items = ["Home", "About", "Sevices"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper  justify={"space-between"} align={"center"}>
                    <Logo />
                    <HeaderMenu menuItems={items} />
                    <a href="">Contact Me</a>
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
    z-index: 99999;
`