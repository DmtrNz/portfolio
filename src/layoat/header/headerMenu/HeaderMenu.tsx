import React from "react";
import styled from 'styled-components';
import { theme } from "../../../styles/Theme";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Logo } from "../../../components/logo/Logo";


export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledHeaderMenu>
            <FlexWrapper justify={"space-between"} align={"center"}>
                <Logo />
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
                </ul>
                <StyledContactMe href="">Contact Me</StyledContactMe>
            </FlexWrapper>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        justify-content: space-between;
        gap: 30px;
        justify-content: center;
        color: transparent;
    }

    @media ${theme.media.tablet} {
        display: none;
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