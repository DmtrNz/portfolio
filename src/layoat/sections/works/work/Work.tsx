import styled from 'styled-components'; 
import { Icon } from '../../../../components/ icon/Icon';
import { StyledWork } from './StyledWork';


type WorkPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    title: string;
    backgroundColor: string;
    color?: string;
}

export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork backgroundColor={props.backgroundColor} color={props.color}>
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
            <h3>{props.title}</h3>
        </StyledWork>
    )
}