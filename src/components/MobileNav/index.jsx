import { MobileNavSection, Container, Buttons, Button, MenuList, ListItem, Search, Input } from "./mobileNav.styles";
import {AiFillHome,  AiOutlineSearch} from 'react-icons/ai';
import {BsTelephoneFill} from 'react-icons/bs';
import {BiCurrentLocation} from 'react-icons/bi';
import {MdOutlineStorefront} from 'react-icons/md';

const MobileNav = ({openNav}) => {
  return (
    <MobileNavSection openNav={openNav}>
        <Container>
          <Search>
            <Input type="text" placeholder="Search products..." aria-label="search" />
            <AiOutlineSearch />
          </Search>
          <MenuList>
              <ListItem><AiFillHome size={15} /> <span>Home</span></ListItem>
              <ListItem><BsTelephoneFill size={15}/> <span>Contact Us</span></ListItem>
              <ListItem><BiCurrentLocation size={15} /> <span>Track Order</span></ListItem>
              <ListItem><MdOutlineStorefront size={15} /> <span>Stores</span></ListItem>
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
