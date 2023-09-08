import { NavContainer, NavWrapper, Hamburger, Left, Center, Right, Lang, Search, Logo, MenuItem, SCart, Badge, Line, Wish } from "./Navbar.styles";
import {AiOutlineSearch, AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai';
import Cart from "../Cart";

const Navbar = ({openNav, toggleNav, toggleCart, openCart}) => {
    return ( 
        <NavContainer openNav={openNav}>
            <Cart openCart={openCart} toggleCart={toggleCart}/>
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
                    <Logo to='/'>trendy</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>
                        <Wish to='/wishlist'>
                            <Badge>0</Badge>
                            <AiOutlineHeart size={25} />
                        </Wish>
                    </MenuItem>
                    <MenuItem>
                        <SCart onClick={() => toggleCart()}>
                            <Badge>0</Badge>
                            <AiOutlineShoppingCart size={25}/>
                        </SCart>
                    </MenuItem>
                </Right>
            </NavWrapper>
        </NavContainer>
    );
}
 
export default Navbar;