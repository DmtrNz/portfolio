import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import { FlexWrapper } from '../../../components/FlexWrapper';
import {Work} from './work/Work';

export const Works = () => {
    return (
        <StyledWorks>
            <span><span>2+</span>Years Experience Working</span>
            <FlexWrapper  justify={"center"} wrap={"wrap"} gap={"10px"}  direction={"column"}>
                <SectionTitle>Developer and Designer, specialized in Frontend and UI/UX</SectionTitle>
                <FlexWrapper justify={"center"} wrap={"wrap"} gap={"10px"}>
                    <Work iconId={"computer"} title={"Front End Developer"}  backgroundColor={"#676CDB"} />
                    <Work iconId={"uiUx"} title={"UI/UX Designer"}  backgroundColor={"#C4C4C4"} color={"black"}/>
                    <Work iconId={"thunder"} title={"Branding Designer"} backgroundColor={"#C4C4C4"} color={"black"}/>
                </FlexWrapper>
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks  = styled.section`
    background-color: #419cc9;
`
