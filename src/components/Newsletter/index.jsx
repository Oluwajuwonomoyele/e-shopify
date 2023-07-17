import { NewsletterSection, Wrapper, Title, Desc, InputContainer, Input, Button } from "./Newsletter.styles";
import { MdSend } from 'react-icons/md';

const Newsletter = () => {
    return (  
        <NewsletterSection>
            <Wrapper>
                <Title>Newsletter</Title>
                <Desc>Get timely updates from your favorite products.</Desc>
                <InputContainer>
                    <Input placeholder="Your email" type="text" />
                    <Button>
                        <MdSend size={25} />
                    </Button>
                </InputContainer>
            </Wrapper>
        </NewsletterSection>
    );
}
 
export default Newsletter;