import { FooterSection, Container, First, Second, Third, Buttons, Button, Links } from "./Footer.styles";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillMail } from 'react-icons/ai';
import {BsFillChatLeftTextFill} from 'react-icons/bs';
import {IoMdCall} from 'react-icons/io';
import { BiLogoPinterest } from 'react-icons/bi'
import { MdMeetingRoom } from 'react-icons/md'

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
                    <Links>
                        <h2>About</h2>


                    </Links>

                    <Links>
                    </Links>

                </Second>

                <Third>

                </Third>
            </Container>
        </FooterSection>
    );
}
 
export default Footer;