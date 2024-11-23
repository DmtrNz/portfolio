import styled from 'styled-components';
import { Icon } from "../../../components/ icon/Icon";
import { theme } from '../../../styles/Theme';

type SkillPropsType ={
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledSkill> 
    )
}

const StyledSkill = styled.div`
    width: 210px;
    padding: 40px;
    display: flex;
    justify-content: center;
    opacity: 0.5;
    
    &:hover{
        color: ${theme.colors.accent};
        transform: scale(1.3) translateY(-10px);
        transition: 0.75s;
        opacity: 1;
    }
`