import { NavContainer, NavWrapper, Hamburger, Left, Center, Right, Lang, Search, Logo, MenuItem, Cart, Badge } from "./Navbar.styles";
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import {HiOutlineMenu} from 'react-icons/hi';

const Navbar = () => {
    return ( 
        <NavContainer>
            <NavWrapper>
                <Hamburger>
                    <HiOutlineMenu size={30}/>
                </Hamburger>
                <Left>
                    <Lang>EN</Lang>
                    <Search>
                        <input type="text" placeholder="Search" aria-label="text" />
                        <AiOutlineSearch />
                    </Search>
                </Left>
                <Center>
                    <Logo>E-Shopify.</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Cart>
                            <Badge>4</Badge>
                            <AiOutlineShoppingCart size={25}/>
                        </Cart>
                    </MenuItem>
                </Right>
            </NavWrapper>
        </NavContainer>
    );
}
 
export default Navbar;