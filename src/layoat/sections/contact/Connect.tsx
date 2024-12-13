import React from "react";
import styled from 'styled-components';
import { Icon } from "../../../components/ icon/Icon";
import { theme } from "../../../styles/Theme";

type ConnectPropsType ={
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Connect = (props: ConnectPropsType) => {
    return (
        <StyledSContact>
            <a>
                <Icon iconId={props.iconId} 
                    width={props.width} 
                    height={props.height}
                    viewBox={props.viewBox}/>
            </a>
        </StyledSContact> 
    )
}

const StyledSContact = styled.li`
    width: 30px;
    height: 30px;
    border-radius:  50%;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.accent};
    &+li{
        margin-left: 50px;
    }

    a{
        color: ${theme.colors.accent};
    }

    a:hover{
        color: ${theme.colors.font};
        transform: scale(1.1) translateY(-3px);
        transition: 0.25s;
    }
`