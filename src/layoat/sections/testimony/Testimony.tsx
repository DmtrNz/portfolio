import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from "./../../../assets/images/client.webp";
import { Icon } from '../../../components/ icon/Icon';
import { Statistics } from './Statistics';
import { Container } from '../../../styles/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const StyledFlexMobileWrapper = styled(FlexWrapper)`
    @media ${theme.media.tablet}{
        flex-direction: column;
    }
`;

export const Testimony = () => {
    return ( 
        <StyledTestimony>
            <Container>
                <StyledFlexMobileWrapper gap={"25px"}>
                    <Photo src={photo} />
                    <FlexWrapper direction={"column"} justify={"center"}>
                        <FlexWrapper direction={"column"} justify={"center"} margin={"0 0 20px 0px"} >
                            <Icon iconId={"quotes"} />
                            <StyledReview>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent </StyledReview>
                            <FlexWrapper margin={"0"} order={"5"}>
                                <FlexWrapper>
                                    <button>
                                        <Icon iconId={"arrowLeft"} />
                                    </button>
                                    <button>
                                        <Icon iconId={"arrowRight"} />
                                    </button>
                                </FlexWrapper>
                            </FlexWrapper>
                        </FlexWrapper>
                    </FlexWrapper >
                    <Statistics satisfaction={"100%"} numberOfClients={"+0"} numberOfProjects={"1.5"} />
                </StyledFlexMobileWrapper>
            </Container>
        </StyledTestimony>
    )
}

const StyledTestimony = styled.section`
    button{
        color: rgba(103, 109, 219, 0.5);
    }
    button:hover{
        color: ${theme.colors.accent};
        transform: scale(1.025) translateY(-0.5px);
        transition: 0.55s;
    }
`

const Photo = styled.img`
    max-width: 40%;
    max-height: 743px;
    object-fit: cover;
    margin-bottom: 60px;

    @media ${theme.media.tablet}{
        max-width: 100%;
        max-height: 373px;
        order: -2;
    }
`

const StyledReview = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 18px;
    line-height: 180%;
    text-align: justify;
    margin: auto;
    width: 100%;

    @media ${theme.media.tablet}{
        order: 5;
        margin: 0 auto;
    }
`