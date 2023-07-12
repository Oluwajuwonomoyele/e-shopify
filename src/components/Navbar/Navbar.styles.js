import { styled } from "styled-components";

export const NavContainer = styled.section`
    height: 60px;
`
export const NavWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 25px;
`
export const Lang = styled.span`
    font-size: 14px;
    cursor: pointer;
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
`
export const Center = styled.div`
    flex: 1;
`
export const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    cursor: pointer;
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
