import React from "react";
import styled from 'styled-components';
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../styles/Container";
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/ icon/Icon";
import { font } from "../../../styles/Common";

const StyledFlexMobileWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile}{
        flex-direction: column-reverse;
        justify-content: flex-end;
        /* align-items: center; */
        // flex-wrap: wrap;
    }
`;

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <StyledFlexMobileWrapper align={"center"} justify={"space-between"} direction={"row"}>
                    <div>
                        <SmallText>Hello!</SmallText>
                        <SmallText>I'm Nazarov Dmitry</SmallText>
                        <MainTitle>I am a <strong>Frontend</strong> <strong>developer</strong> based in Belarus <strong>with 2+ years of experience</strong> who loves creating React applications using TypeScript.</MainTitle>
                        <FlexWrapper wrap={"wrap"} >
                            <LinkMe href="#" target=".blank">
                                <Icon iconId={"email"} width={"20px"} height={"20px"}/>
                                <span>Email me</span>
                            </LinkMe>
                            <LinkMe href="#" target=".blank">
                                <Icon iconId={"download"} width={"20px"} height={"20px"}/>
                                <span>Download CV</span>
                            </LinkMe>
                        </FlexWrapper>
                    </div>
                    <Photo src={photo} alt="Nazarov Dmitry" />
                </StyledFlexMobileWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh; 
    background-color: #fff5e7;
    display:  flex; 
    padding-top: 0px;
`

const LinkMe = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;

    span{
        padding: 0 0 0 10px;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
        margin-right: 18px;

        @media ${theme.media.mobile}{
            font-size: 14px;
    }
    }

    &:hover{
        color: ${theme.colors.accent};
        background-image: linear-gradient(to right, ${theme.colors.font}, ${theme.colors.accent});
        background-clip: text;
        transition: 0.5s;
        transform: scale(1.05) translateY(-0.5px);
    }

    &:last-child{
        text-decoration: underline;
    }
`

const Photo = styled.img`
    max-width: 50%;
    max-height: 743px;
    object-fit: cover;

    @media ${theme.media.mobile}{
        max-width: 100vw;
        height: 450px;
        object-fit: cover;
    }
`

const MainTitle = styled.h1`
    text-align: justify;
    font-weight: 400;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.05em;
    margin: 10px  0 50px;

    strong{
        position: relative;
        color: ${theme.colors.font};
        font-weight: 400;
        z-index: 0;

        &:nth-of-type(1)::before {
            position: absolute;
            bottom: 0;
            content: "";
            display: inline-block;
            width: 100%;
            height: 10px;
            background-color: ${theme.colors.accent};
            z-index: -1;
        }
    }
`

const SmallText = styled.h2`
    ${font({family: "'Playfair Display', sans-serif", weight: 700, Fmax: 90, Fmin: 50})};

    &:nth-of-type(2) {
        position: relative;
        width: 190%;

        @media ${theme.media.mobile}{
            width: 86vw;
        }
    }
`
