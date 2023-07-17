import { FooterSection, Wrapper, Left, Right, Center, Logo, Desc, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from "./Footer.styles";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillPhone, AiFillMail } from 'react-icons/ai';
import { BiLogoPinterest } from 'react-icons/bi'
import { MdMeetingRoom } from 'react-icons/md'

const Footer = () => {
    return (  
        <FooterSection>
            <Wrapper>   
                <Left>
                    <Logo>E-Shopify.</Logo>
                    <Desc>There are many variations of passages of Lorem ipsum available, but the majority have suffered altercation in some form, by injected humour, or randomised words which don't look even slightly believable.</Desc>
                    <SocialContainer>
                        <SocialIcon>
                            <AiFillFacebook size={25} color='3B5999' />
                        </SocialIcon>
                        <SocialIcon>
                            <AiOutlineInstagram size={25} color='E4405F' />
                        </SocialIcon>
                        <SocialIcon>
                            <AiOutlineTwitter size={25} color='55ACEE' />
                        </SocialIcon>
                        <SocialIcon>
                            <BiLogoPinterest size={25} color='E60023' />
                        </SocialIcon>
                    </SocialContainer>
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Men Fashion</ListItem>
                        <ListItem>Women Fashion</ListItem>
                        <ListItem>Accessories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contact</Title>
                    <ContactItem>
                       <MdMeetingRoom /> 523 Cremsworth Av, East Calford 29471
                    </ContactItem>
                    <ContactItem>
                       <AiFillPhone /> +1 234 5678
                    </ContactItem>
                    <ContactItem>
                        <AiFillMail /> contact@juwon.dev
                    </ContactItem>
                    <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' alt='Payment Options' />
                </Right>
            </Wrapper>
        </FooterSection>
    );
}
 
export default Footer;