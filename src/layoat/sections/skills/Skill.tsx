import styled from 'styled-components';
import { Icon } from "../../../components/ icon/Icon";

type SkillPropsType ={
    iconId: string;
    width?: string;
    height?: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
        </StyledSkill> 
    )
}

const StyledSkill = styled.div`
    width: 15%;
`