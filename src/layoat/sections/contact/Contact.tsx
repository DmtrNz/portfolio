import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Connect } from './Connect';
import { Form } from './Form';
import { Container } from '../../../styles/Container';
import { theme } from '../../../styles/Theme';

const StyledFlexMobileWrapper = styled(FlexWrapper)`
    @media ${theme.media.mobile}{
        flex-direction: column-reverse;
    }
`;

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <StyledFlexMobileWrapper  justify={"space-between"} wrap={"wrap"}>
                    <FlexWrapper direction={"column"} margin={"0 30px 0 0"}>
                        <StyledTitleContactBox>
                            <SectionTitleContact>Let's <br></br> Connect</SectionTitleContact>
                            <img src="" alt="" />
                        </StyledTitleContactBox>
                        <FlexWrapper justify={"flex-start"} wrap={"wrap"}>
                            <ConnectBox>
                                <Connect iconId={"telegram"}
                                    width={"25px"}
                                    height={"25px"} />
                                <Connect iconId={"vk"}
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
                </StyledFlexMobileWrapper>
            </Container>
        </StyledContact> 
    )
}

const StyledContact = styled.section` 
    
`
const ConnectBox = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 50px;
`
const StyledTitleContactBox = styled.div`
    margin: 0 0 30px 0;
`

const SectionTitleContact = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    letter-spacing: 3px;
    font-weight: 700;
    font-size: 90px;
    line-height: 120%;
`