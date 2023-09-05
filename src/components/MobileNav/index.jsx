import { MobileNavSection, Container, Buttons, Button, MenuList, ListItem } from "./MobileNav.styles";
import {AiFillHome} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {BiCurrentLocation} from 'react-icons/bi';
import {MdOutlineStorefront} from 'react-icons/md';

const MobileNav = () => {
  return (
    <MobileNavSection>
        <Container>
            <MenuList>
                <ListItem><AiFillHome /> <span>Home</span></ListItem>
                <ListItem><BsTelephoneFill /> <span>Contact Us</span></ListItem>
                <ListItem><BiCurrentLocation /> <span>Track Order</span></ListItem>
                <ListItem><MdOutlineStorefront /> <span>Stores</span></ListItem>
            </MenuList>
            <Buttons>
                <Button>Login</Button>
                <Button>Signup</Button>
            </Buttons>
        </Container>
    </MobileNavSection>
  )
}

export default MobileNav
