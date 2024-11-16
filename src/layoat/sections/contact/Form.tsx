import React from "react";
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Form = () => {
    return (
        <form action="">
            <FlexWrapper direction={"column"}>
                <label htmlFor=""></label>
                Your name:<input type="text" />
                Your email  address:<input type="text" />
                Tell about the project:<textarea name="" id=""></textarea>
                <button>Send</button>
            </FlexWrapper>
        </form>
    )
}

