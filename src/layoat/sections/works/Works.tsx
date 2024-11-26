import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Work } from './work/Work';
import { Container } from '../../../styles/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const StyledFlexMobileWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile}{
        flex-direction: column-reverse;
    }
`;

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <StyledFlexMobileWrapper align={"center"}>
                    <StyledExpirience>
                        <span>2 +</span>
                        <span>Years   Experience Working </span>
                    </StyledExpirience>
                    <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"} direction={"column"}>
                        <SectionTitle>Developer and Designer, specialized in Frontend and UI/UX</SectionTitle>
                        <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"} direction={"row"} >
                            <Work iconId={"computer"} title={"Front End Developer"} backgroundColor={"#676CDB"} />
                            <Work iconId={"uiUx"} title={"UI/UX Designer"} backgroundColor={"#C4C4C4"} color={"black"} />
                            <Work iconId={"thunder"} title={"Branding Designer"} backgroundColor={"#C4C4C4"} color={"black"} />
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledFlexMobileWrapper>
            </Container >
        </StyledWorks>
    )
}

const StyledWorks = styled.section`
    ${Container} {
        display: flex;
        align-items: center;
    }
`

const StyledExpirience = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Playfair Display", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 180%;

    @media ${theme.media.mobile}{
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        order: 0;
    }

    
    span:first-child{
        font-weight: 700;
        font-size: 90px;
        line-height: 120%;
        color: ${theme.colors.accent};
        margin-right: 50px;
        white-space: nowrap;
        flex-shrink: 2;
    }

    span:last-child{
        max-width: 190px;
        ${font({family: "'Playfair Display', sans-serif", lineHeight: 1.8, weight: 700, color: "${theme.colors.accent}", Fmax: 31, Fmin: 24})};
        
        @media ${theme.media.mobile} {
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
        }
    }
`
