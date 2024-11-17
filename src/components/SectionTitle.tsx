import styled from 'styled-components';
import { theme } from '../styles/Theme';

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 3px;
    margin-bottom: 80px;

    position: relative;

    &::before{
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: -10px;
    }
`