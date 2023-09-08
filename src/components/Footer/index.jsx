import { FooterSection, Container, First, Second, Third, Buttons, Button, Links, Left, Right, SocialContainer, Cr, Acknowledgment } from "./Footer.styles";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillMail, AiOutlineFacebook, AiOutlineLinkedin } from 'react-icons/ai';
import {BsFillChatLeftTextFill} from 'react-icons/bs';
import {IoMdCall} from 'react-icons/io';
import { FaPinterestP } from 'react-icons/fa';

const Footer = () => {
    return (  
        <FooterSection>
            <Container>   
                <First>
                    <h2>support</h2>
                    <p>We'd love to engage some good old fashioned conversation. Availble 7 days, 9am-5pm VI</p>
                    <Buttons>
                        <Button><BsFillChatLeftTextFill /><span>Start a Chat</span></Button>
                        <Button><IoMdCall /><span>Call Us</span></Button>
                        <Button><AiFillMail /><span>Email us</span></Button>
                    </Buttons>
                </First>

                <Second>
                    <Left>
                        <h2>About</h2>

                        <Links>
                            <p>my account</p>
                            <p>shop</p>
                            <p>privacy policy</p>
                            <p>downloads</p>
                            
                        </Links>
                    </Left>

                    <Right>
                        <h2>Help</h2>

                        <Links>
                            <p>order status</p>
                            <p>shipping &amp; delivery</p>
                            <p>track order</p>
                            <p>FAQs</p>
                        </Links>
                    </Right>
                </Second>

                <Third>
                    <h2>the common club</h2>
                    <p>With each purchase, you’ll earn a credit you can use to save on your next shirt, chinos, denim, or outerwear. Look out for special offers to earn extra points.</p>
                    <button>log in</button>
                </Third>

                <SocialContainer>
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                    <AiOutlineFacebook />
                    <FaPinterestP />
                    <AiOutlineLinkedin />
                </SocialContainer>

                <Cr>
                    &copy; 2023, Trendy Inc.
                </Cr>
            </Container>
            <Acknowledgment>Designed and Developed by <a href="#">Olutomisin Oluwajuwon</a></Acknowledgment>
        </FooterSection>
    );
}
 
export default Footer;