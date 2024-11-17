import styled from 'styled-components';
import { Icon } from "../../../components/ icon/Icon";
import { FlexWrapper } from '../../../components/FlexWrapper';

type SkillPropsType ={
    iconId: string;
    width?: string;
    height?: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"row"} justify={"center"} align={"center"} >
                <Icon iconId={props.iconId} width={props.width} height={props.height}/>
            </FlexWrapper>
        </StyledSkill> 
    )
}

const StyledSkill = styled.div`
    width: 210px;
    padding: 40px;
`