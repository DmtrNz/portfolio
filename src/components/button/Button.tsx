import React from "react";
import styled from 'styled-components';
import iconsSprite from "../../assets/images/icons-sprite.svg";
import { StyledButton } from "./StyledButton";
import { Icon } from "../ icon/Icon";


type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
}

export const Button = (props: IconPropsType) => {
    return (
        <StyledButton>
            <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox}/>
        </StyledButton>
    )
}