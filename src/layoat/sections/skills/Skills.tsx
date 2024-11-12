import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import {SectionTitle} from "../../../components/SectionTitle";
import { Skill } from './Skill';
import {Icon} from "../../../components/ icon/Icon";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
                <Skill iconId={"figma"} 
                        width={"100px"} 
                        height={"100px"}/>
                <Skill iconId={"html5"} 
                        width={"100px"} 
                        height={"100px"}/>
                <Skill iconId={"css3"} 
                        width={"100px"} 
                        height={"100px"}/>
                <Skill iconId={"sass"} 
                        width={"100px"} 
                        height={"100px"}/>
                <Skill iconId={"reacts"} 
                        width={"100px"} 
                        height={"100px"}/>
            </FlexWrapper>
        </StyledSkills>
    )
}

const StyledSkills = styled.div`
    background-color: pink;
    min-height: 100vh;
`