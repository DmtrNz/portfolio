import React from "react";
import styled, { css } from 'styled-components';
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";


export const MobileMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMobileMenu>
            <Logo />
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>

            <MobileMenuPopup isOpen={false}>
                <FlexWrapper justify={"space-between"} align={"center"} >
                    <ul>
                        {props.menuItems.map((item: string, index: number) => {
                            return <ListItem key={index}>
                                <Link href="">
                                    {item}
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                    <Mask>
                                        <span>{item}</span>
                                    </Mask>
                                </Link>
                            </ListItem>
                        })}
                        <StyledContactMe href="#">Contact Me</StyledContactMe>
                    </ul>
                </FlexWrapper>
            </MobileMenuPopup>
        </StyledMobileMenu>
    )
}

const StyledMobileMenu = styled.nav`
    display: none;

    @media ${theme.media.tablet} {
        display: block;
    }
`

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
    background-color: #2D3540;
    display: none;

    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}

    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        align-items: center;
        flex-direction:  column;
        /* color: transparent; */
    }
`

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 3;
    color: white;

    span{
        display: block;
        width: 36px;    
        height: 2px;
        background-color: ${theme.colors.font};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{isOpen: boolean}>`
            background-color: rgba(255,255,255,0);
        `}

        &::before{
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after{
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.font};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{isOpen: boolean}>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`

const Link = styled.a`
    color: rgba(103, 108, 219, 0.2);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px; 
    text-align: center;
`

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow-y: hidden;
    color: ${theme.colors.font}; 

    &+& {
        top: 50%;
        span{
            display: inline-block;
            transform:  translateY(-50%);
        }
    }
`

const ListItem = styled.li`
    position: relative;

    &::before{
        content: "";
        display: inline-block;
        height: 2px;
        background-color: ${theme.colors.accent};

        position: absolute;
        top: 50%;
        left: -5px;
        right: -5px;
        z-index: 1;

        transform: scale(0);
    }

    &:hover{
        &::before{
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: ${theme.colors.accent} 
            
            &+${Mask} {
                transform: skewX(12deg) translateX(-5px)
            } 
        }
    }
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