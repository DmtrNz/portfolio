import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';

type TestimonyPropsType ={
    satisfaction: string;
    numberOfClients: string;
    numberOfProjects: string;
}

export const Statistics = (props: TestimonyPropsType) => {
    return (
        <FlexWrapper   justify={"center"} align={"center"} >
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
    li{
        list-style-type: none;
    }
`

