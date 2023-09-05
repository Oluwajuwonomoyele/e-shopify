import { NavContainer, NavWrapper, Hamburger, Left, Center, Right, Lang, Search, Logo, MenuItem, Cart, Badge, Line } from "./Navbar.styles";
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
// import {HiOutlineMenu} from 'react-icons/hi';

const Navbar = ({openNav, toggleNav}) => {
    return ( 
        <NavContainer openNav={openNav}>
            <NavWrapper>
                <Hamburger onClick={() => toggleNav()} >
                    <Line openNav={openNav} />
                    <Line openNav={openNav}/>
                    <Line openNav={openNav} />
                </Hamburger>
                <Left>
                    <Lang>EN</Lang>
                    <Search>
                        <input type="text" placeholder="Search" aria-label="text" />
                        <AiOutlineSearch />
                    </Search>
                </Left>
                <Center>
                    <Logo>trendy</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Cart>
                            <Badge>4</Badge>
                            <AiOutlineShoppingCart size={30}/>
                        </Cart>
                    </MenuItem>
                </Right>
            </NavWrapper>
        </NavContainer>
    );
}
 
export default Navbar;