import React from "react";
import styled from 'styled-components';
import { Container } from "../../styles/Container";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { MobileMenu } from "./mobileMenu/MobileMenu";

const items = ["Home", "About", "Sevices"]

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <HeaderMenu menuItems={items} />
                <MobileMenu menuItems={items}/>
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

