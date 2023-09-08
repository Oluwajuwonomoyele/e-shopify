import { NewsletterSection, Wrapper, Title, Desc, InputContainer, Input, Button } from "./Newsletter.styles";
import { MdSend } from 'react-icons/md';

const Newsletter = () => {
    return (  
        <NewsletterSection>
            <Wrapper>
                <Title>trendy</Title>
                <Desc>Sign up to receive 20% off your first purchase.</Desc>
                <InputContainer>
                    <Input placeholder="Your Email" type="email" aria-label="email" />
                    <Button>
                        <MdSend size={22} />
                    </Button>
                </InputContainer>
            </Wrapper>
        </NewsletterSection>
    );
}
 
export default Newsletter;