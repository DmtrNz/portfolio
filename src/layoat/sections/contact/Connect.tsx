import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Icon } from "../../../components/ icon/Icon";

type ConnectPropsType ={
    iconId: string;
    width?: string;
    height?: string;
}

export const Connect = (props: ConnectPropsType) => {
    return (
        <StyledSContact>
            <Icon iconId={props.iconId} width={props.width} height={props.height}/>
        </StyledSContact> 
    )
}

const StyledSContact = styled.li`
    list-style-type: none;

`