import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from "../../../styles/Theme";
import { Icon } from "../../../components/ icon/Icon";
import { font } from '../../../styles/Common';

export const Form = () => {
    return (
        <Styledform action="">
            <FlexWrapper direction={"column"}>
                <label htmlFor=""></label>
                Your name:<input type="text" />
                Your email  address:<input type="text" />
                Tell about the project:<textarea name="" id=""></textarea>
                <button>
                    <span>Send</span>
                    <Icon iconId={"arrowRight"} />
                </button>
            </FlexWrapper>
        </Styledform>
    )
}

const Styledform = styled.form`
    font-family: "Poppins", sans-serif;
    font-weight: medium;
    font-size: 30px;
    line-height: 120%;
    margin-bottom: 50px;
    @media ${theme.media.mobile}{
        ${font({Fmax: 30, Fmin: 20})};
    }

    input{
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
        padding: 10px 0;
        margin-bottom: 20px;
        color: ${theme.colors.font};
        font-size: 20px;

        &:focus {
            outline: none;
            color: ${theme.colors.font};
            border-bottom: 2px solid ${theme.colors.accent};
        }
    }

    textarea{
        background-color: transparent;
        border: none;
        border-bottom: 1px solid white;
        font-size: 20px;
        padding: 10px 0 0;
        margin-bottom: 20px;
        resize: none;
        color: ${theme.colors.font};

        &:focus {
            outline: none;
            border-bottom: 2px solid ${theme.colors.accent};
        }
    }

    button{
        display: flex;
        width: fit-content;
        justify-content: flex-start;
        gap: 30px;
        color: rgba(103, 109, 219, 0.45);
        font-size: 30px;

        span{
            font-weight: 500;
            padding-top: 2px;
        }
    }

    button:hover{
        color: ${theme.colors.accent};
        background-image: linear-gradient(to right, ${theme.colors.font}, ${theme.colors.accent});
        background-clip: text;
        transform: scale(1.025) translateY(-0.5px);
        /* transition: 0.1s; */
    }
`