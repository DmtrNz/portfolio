import React from "react";
import styled from 'styled-components';

export const Footer = () => {
    return (
        <StyledFooter>
            <small>Created by <span>Nazarov</span> | All Reserved</small>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 122px 0 122px;
    color: white;
    span{
        font-weight: bold;
    }
`