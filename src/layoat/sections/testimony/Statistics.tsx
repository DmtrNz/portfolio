import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { theme } from '../../../styles/Theme';

type TestimonyPropsType ={
    satisfaction: string;
    numberOfClients: string;
    numberOfProjects: string;
}

export const Statistics = (props: TestimonyPropsType) => {
    return (
        <FlexWrapper>
            <StyledStatistics>
                <li>
                    <h4>Satisfaction Clients</h4>
                    <span>{props.satisfaction}</span>
                </li>
                <li>
                    <h4>Clients On Worldwide</h4>
                    <span>{props.numberOfClients}</span>
                </li>
                <li>
                    <h4>Projects Done</h4>
                    <span>{props.numberOfProjects}</span>
                </li>
            </StyledStatistics>
        </FlexWrapper>
    )
}

const StyledStatistics = styled.ul`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    h4{
        font-family: "Playfair Display", sans-serif;
        font-size: 30px;
        font-weight: bold; 
        line-height: 120%;
    }

    span{
        font-family: "Playfair Display", sans-serif;
        font-size: 50px;
        font-weight: bold; 
        line-height: 120%;
        color: ${theme.colors.accent};
    }
`

