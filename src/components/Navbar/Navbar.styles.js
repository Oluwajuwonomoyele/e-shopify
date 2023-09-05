import { styled } from "styled-components";
import {mobile} from '../../responsive';

export const NavContainer = styled.section`
    background: white;
    height: 60px;
    transition: all 0.5s ease;
    position: ${(props) => props.openNav ? 'absolute' : ''};
    width: ${(props) => props.openNav ? '100%' : ''};
    top: ${(props) => props.openNav ? '0' : ''};
    left: ${(props) => props.openNav ? '0' : ''};
    z-index: 30;


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
        padding: '0 1.5rem'
    })}
`
export const Hamburger = styled.div`
    flex: 1;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    @media screen and (min-width: 426px) {
        display: none;
    }
`
export const Line = styled.div`
    width: 1.9rem;
    height: 3px;
    background-color: black;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:nth-child(1){
        transform: ${(props) => props.openNav ? 'rotate(45deg) translateY(0.8rem)' : ''}
    }
    &:nth-child(2){
        opacity: ${(props) => props.openNav ? '0' : '1'}
    }
    &:nth-child(3){
        transform: ${(props) => props.openNav ? 'rotate(-45deg) translateY(-0.8rem)' : ''}
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

    ${mobile({
      flex: '2'
    })}
`
export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
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
    cursor: pointer;
`
export const Badge = styled.div`
    background-color: blue;
    position: absolute;
    padding: 0 5px;
    border-radius: 50%;
    right: -20%;
    top: -20%;
    color: white;
    display: none;
`
