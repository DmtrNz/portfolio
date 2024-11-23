import styled from 'styled-components'; 
import { Icon } from '../../../../components/ icon/Icon';
import { StyledWork } from './StyledWork';
import { theme } from '../../../../styles/Theme';


type WorkPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    title: string;
    backgroundColor: string;
    color?: string;
}

export const Work = (props: WorkPropsType) => {
    const formattedTitle = props.title.replace(" Designer", "<br />Designer");
    return (
        <StyledWork backgroundColor={props.backgroundColor} color={props.color}>
            <Icon iconId={props.iconId} width={props.width} height={props.height} />
            <h3 dangerouslySetInnerHTML={{ __html: formattedTitle }}></h3>
        </StyledWork>
    )
}
