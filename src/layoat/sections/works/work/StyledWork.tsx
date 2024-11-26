import styled from 'styled-components'; 
import { theme } from '../../../../styles/Theme';

type SyledWorkPropsType = {
    backgroundColor?: string;
    color?: string;
}

export const StyledWork = styled.div<SyledWorkPropsType>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    background-color: ${props => props.backgroundColor || "yellow"};
    color: ${props => props.color || "white"};
    height: 220px;
    width: 210px;
    /* width: 100%; */
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }

    h3 {
        font-size: 20px;
        font-weight: bold;
        margin: 5px 0;
    }

    @media ${theme.media.mobile} {
        justify-content: flex-end;
        align-items: flex-start;
        width: 90%;
    }
`