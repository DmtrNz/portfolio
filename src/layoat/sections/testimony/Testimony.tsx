import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from "./../../../assets/images/client.webp";
import { Icon } from '../../../components/ icon/Icon';
import { Statistics } from './Statistics';


export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper>
                <Photo src={photo}/>
                <FlexWrapper>
                    <FlexWrapper direction={"column"}>
                        <Icon iconId={"quotes"}/> 
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent </p>
                        <FlexWrapper> 
                            <button>back</button>
                            <button>forward</button>
                        </FlexWrapper>
                    </FlexWrapper>
                </FlexWrapper> 
                <Statistics satisfaction={"100%"} numberOfClients={"+0"} numberOfProjects={"1.5"} />
            </FlexWrapper>
        </StyledTestimony>
    )
}

const StyledTestimony  = styled.section`
    background-color: #7d7d7d;
    color: white;
`
const Photo = styled.img`
    max-width: 50%;
    max-height: 743px;
    object-fit: cover;
`