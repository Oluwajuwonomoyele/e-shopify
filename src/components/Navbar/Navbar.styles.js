import { styled } from "styled-components";
import {mobile} from '../../responsive';
import { Link } from "react-router-dom";

export const NavContainer = styled.section`
    background: white;
    height: 5rem;
    transition: all 0.5s ease;
    position: ${(props) => props.openNav || props.navPosition ? 'fixed'  : props.openNav && props.navPosition ? 'fixed' : ''};
    width: 100%;
    top: ${(props) => props.openNav || props.navPosition ? '0'  : props.openNav && props.navPosition ? '0': ''};
    left: ${(props) => props.openNav || props.navPosition ? '0'  : props.openNav && props.navPosition ? '0' : ''};
    z-index: 30;
    border-bottom: 1px solid teal;
`
export const NavWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`
export const Hamburger = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    flex-basis: 10%;
    gap: 0.3rem;

    @media screen and (min-width: 426px) {
        display: none;
    }
`
export const Line = styled.div`
    width: 1.5rem;
    height: 3px;
    background-color: ${({theme}) => theme.colors.black};
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1){
        transform: ${(props) => props.openNav ? 'rotate(48deg) translateY(0.7rem)' : ''}
    }
    &:nth-child(2){
        opacity: ${(props) => props.openNav ? '0' : '1'}
    }
    &:nth-child(3){
        transform: ${(props) => props.openNav ? 'rotate(-47deg) translateY(-0.7rem)' : ''}
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

`
export const Logo = styled(Link)`
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 2rem;
    letter-spacing: 4px;
    text-decoration: none;
    color: ${({theme}) => theme.colors.brown}
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
`
export const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    position: relative;

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
export const Wish = styled(Link)`
    cursor: pointer;

    path {
        color: ${({theme}) => theme.colors.black};
    }
`
export const SCart = styled.div`
    cursor: pointer;

    path {
        color: ${({theme}) => theme.colors.black};
    }
`
export const Badge = styled.div`
    background-color: teal;
    position: absolute;
    padding: 0 5px;
    border-radius: 50%;
    right: -20%;
    top: -20%;
    color: white;
`
