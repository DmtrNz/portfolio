import React from "react";
import styled from 'styled-components';
import photo from "./../../../assets/images/photo.webp";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"} direction={"row"}>
                <div>
                    <span>Hello! I’m Nazarov Dmitry</span>
                    <MainTitle>I’am a frontend developer based in Belarus who loves creating React applications using TypeScript.</MainTitle>
                    <a href="#" target=".blank">Email me</a>
                    <a href="#" target=".blank">Dowmload CV</a>
                </div>
                <div>
                    <Photo src={photo} alt="Nazarov Dmitry" />
                </div>
            </FlexWrapper>
        </StyledMain>
    )
}

const StyledMain = styled.div`
    background-color:  #fff5e7;
`;

const Photo = styled.img`
    max-width: 50%;
    max-height: 743px;
    object-fit: cover;
`
const MainTitle = styled.h1`
    font-size: 1.2rem;
`

