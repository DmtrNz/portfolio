import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Connect } from './Connect';
import { Form } from './Form';
import { SectionTitle } from '../../../components/SectionTitle';


export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper>
                <FlexWrapper direction={"column"}>
                <SectionTitle>Let's Connect</SectionTitle>
                    <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
                        <ConnectBox>
                            <Connect iconId={"dribble"}
                                width={"25px"}
                                height={"25px"} />
                            <Connect iconId={"upwork"}
                                width={"25px"}
                                height={"25px"} />
                            <Connect iconId={"youtube"}
                                width={"25px"}
                                height={"25px"} />
                            <Connect iconId={"linkedin"}
                                width={"25px"}
                                height={"25px"} />
                            <Connect iconId={"gitHub"}
                                width={"25px"}
                                height={"25px"} />
                        </ConnectBox>
                    </FlexWrapper>
                </FlexWrapper>
                <Form />
            </FlexWrapper>
        </StyledContact>
    )
}

const StyledContact = styled.section`
    background-color: green;
`
const ConnectBox = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`