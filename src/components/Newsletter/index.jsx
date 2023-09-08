import { NewsletterSection, Wrapper, Title, Desc, InputContainer, Input, Button } from "./Newsletter.styles";
import { MdSend } from 'react-icons/md';

const Newsletter = () => {
    return (  
        <NewsletterSection>
            <Wrapper>
                <Title>Subscribe to Our Newsletters</Title>
                <Desc>To stay up-to-date with our new arrivals and coupon giveways.</Desc>
                <InputContainer>
                    <Input placeholder="Enter your email" type="email" aria-label="email" />
                    <Button>
                        <MdSend size={22} />
                    </Button>
                </InputContainer>
            </Wrapper>
        </NewsletterSection>
    );
}
 
export default Newsletter;