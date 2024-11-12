import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import { FlexWrapper } from '../../../components/FlexWrapper';
// import {Work} from './work/Work';

const workItems = ["Front End Developer","UI/UX Designer","Branding Designer"]

export const Works = () => {
    return (
        <StyledWorks>
            <h3><span>2</span>Years Experience Working</h3>
            <SectionTitle>Developer and Designer, specialized in 
            Frontend and UI/UX</SectionTitle>
            <FlexWrapper>
                <Menu  menuItems={workItems}/>
                {/* <Work title={"Front End Developer"} text={"1"} />
                <Work title={"UI/UX Designer"} text={"2"} />
                <Work title={"Branding Designer"} text={"3"} > */}
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks  = styled.section`
    min-height: 100vh;
    background-color: #419cc9;
`
