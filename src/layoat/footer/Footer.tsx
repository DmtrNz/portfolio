import React from "react";
import styled from 'styled-components';
import { Container } from "../../styles/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={"center"}>
                    <small>Created by <span>Nazarov</span> | All Reserved!</small>
                </FlexWrapper>
            </Container>    
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
    background-color: ${theme.colors.secondaryBg};
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 180%;
    letter-spacing: 0.02em;
    text-align: center;
    color: rgba(255, 255, 255, 0.5);

    small{
        display: inline-block;
        padding: 15px 0;
        
        span {
            font-weight: bold;
            color: ${theme.colors.accent};
        }
    }
`