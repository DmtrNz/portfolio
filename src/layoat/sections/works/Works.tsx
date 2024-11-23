import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { Container } from '../../../styles/Container';
import { theme } from '../../../styles/Theme';

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <FlexWrapper align={"center"}>
                    <StyledExpirience><span>2 +</span><br/>Years Experience Working</StyledExpirience>
                    <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"} direction={"column"}>
                        <SectionTitle>Developer and Designer, specialized in Frontend and UI/UX</SectionTitle>
                        <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"} direction={"row"}>
                            <Work iconId={"computer"} title={"Front End Developer"} backgroundColor={"#676CDB"} />
                            <Work iconId={"uiUx"} title={"UI/UX Designer"} backgroundColor={"#C4C4C4"} color={"black"} />
                            <Work iconId={"thunder"} title={"Branding Designer"} backgroundColor={"#C4C4C4"} color={"black"} />
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper>
            </Container >
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    
`

const StyledExpirience = styled.span`
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;
    
    span{
        font-weight: 700;
        font-size: 100px;
        line-height: 120%;
        color: ${theme.colors.accent};
    }
`
