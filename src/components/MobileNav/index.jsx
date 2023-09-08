import { MobileNavSection, Container, Buttons, Button, MenuList, ListItem, Search, Input, Categories, Cat, Socials } from "./MobileNav.styles";
import {AiFillHome,  AiOutlineSearch, AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {BsTelephoneFill, BsPinterest} from 'react-icons/bs';
import {BiCurrentLocation} from 'react-icons/bi';
import {MdOutlineStorefront} from 'react-icons/md';
import {FaChevronRight} from 'react-icons/fa';

const MobileMenu = ({openNav}) => {
  return (
    <MobileNavSection opennav={openNav}>
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
          <Categories>
            <Cat><span>men's</span> <FaChevronRight /></Cat>
            <Cat><span>women's</span> <FaChevronRight /></Cat>
            <Cat><span>jewelry</span> <FaChevronRight /></Cat>
            <Cat><span>electronics</span> <FaChevronRight /></Cat>
          </Categories>
          <Socials>
            <AiFillFacebook />
            <BsPinterest />
            <AiOutlineInstagram />
            <AiOutlineTwitter />
          </Socials>
          <Buttons>
              <Button to='/login'>Login</Button>
              <Button to='/register'>Signup</Button>
          </Buttons>
        </Container>
    </MobileNavSection>
  )
}

export default MobileMenu
