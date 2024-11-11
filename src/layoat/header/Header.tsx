import React from "react";
import styled from 'styled-components';
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <a href="">Contact Me</a> 
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    background-color: #d4ffd3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 122px 0 122px;
    a{
        text-decoration: none;
    }
`