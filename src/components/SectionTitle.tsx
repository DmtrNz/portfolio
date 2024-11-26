import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const SectionTitle = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 36, Fmin: 30})};
    text-align: center;
    /* font-family: "Poppins", sans-serif; */
    /* font-weight: bold; */
    /* font-size: 36px;
    letter-spacing: 3px; */
    margin-bottom: 80px;

    @media ${theme.media.mobile}{
            margin-bottom: 40px;
        }

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
        bottom: -16px;

        @media ${theme.media.mobile}{
            bottom: -10px;
        }
    }
`