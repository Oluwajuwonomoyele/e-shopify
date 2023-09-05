import { styled } from "styled-components";
import {mobile} from '../../responsive';

export const NavContainer = styled.section`
    height: 60px;

    ${mobile({
        height: '50px'
    })}
`
export const NavWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    ${mobile({
        padding: '0 2rem'
    })}
`
export const Hamburger = styled.div`
    flex: 1;
    cursor: pointer;

    @media screen and (min-width: 426px) {
        display: none;
    }
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 25px;

    ${mobile({
        display: 'none'
    })}
`
export const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;

    ${mobile({
        display: 'none'
    })}
`
export const Search = styled.div`
    border: 0.5px solid gray;
    color: gray;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;

    input {
        border: none;
    }

    ${mobile({
        width: '35vw'
    })}
`
export const Center = styled.div`
    flex: 1;
`
export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    cursor: pointer;

    ${mobile({
        fontSize: '22px',
    })}
`
export const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 25px;
`
export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;

    &:nth-child(1){
        ${mobile({
            display: 'none'
        })}
    }
    &:nth-child(2){
        ${mobile({
            display: 'none'
        })}
    }
`
export const Cart = styled.div`
    position: relative;
`
export const Badge = styled.div`
    background-color: blue;
    position: absolute;
    padding: 0 5px;
    border-radius: 50%;
    right: -20%;
    top: -20%;
    color: white;
`
