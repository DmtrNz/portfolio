import React from "react";
import styled from 'styled-components';
import { theme } from "../../../styles/Theme";


export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <div>
            <StyledHeaderMenu>
                <ul>
                    {props.menuItems.map((item: string, index:  number) => {
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
            </StyledHeaderMenu> 
        </div>
    )
}

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
        justify-content: center;
        color: transparent;
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