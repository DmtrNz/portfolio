import React from "react";
import styled from 'styled-components';

export const Menu = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                </ul>
            </nav>
            <a href="">Contact Me</a>
        </div>
    )
}

const StyledMenu = styled.nav`
    
`