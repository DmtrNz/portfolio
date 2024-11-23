import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from './Skill';
import { Container } from '../../../styles/Container';


export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper justify={"space-evenly"} wrap={"wrap"} >
                    <Skill iconId={"figma"}
                        width={"100px"}
                        height={"100px"}/>
                    <Skill iconId={"html5"}
                        width={"100px"}
                        height={"100px"} />
                    <Skill iconId={"css3"}
                        width={"100px"}
                        height={"100px"} />
                    <Skill iconId={"sass"}
                        width={"100px"}
                        height={"100px"} />
                    <Skill iconId={"reacts"}
                        width={"100px"}
                        height={"100px"} />
                    <Skill iconId={"styledComponents"}
                        width={"100px"}
                        height={"100px"} />
                </FlexWrapper>
            </Container>
        </StyledSkills>
    )
}

const StyledSkills = styled.section`
    
`