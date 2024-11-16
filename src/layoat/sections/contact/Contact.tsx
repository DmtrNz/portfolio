import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Connect } from './Connect';
import { Form } from './Form';


export const Contact = () => {
    return (
        <StyledContact>
            <FlexWrapper>
                <FlexWrapper direction={"column"}>
                    <h2>Let's Connect</h2>
                    <FlexWrapper justify={"space-evenly"} wrap={"wrap"}>
                        <ContactBox>
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
                        </ContactBox>
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
const ContactBox = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`