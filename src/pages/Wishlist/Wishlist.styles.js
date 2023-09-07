import { styled } from "styled-components";
import { mobile } from '../../responsive';

export const WishlistSection = styled.section`
    background-color: white;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 30;
`
export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;

    ${mobile({
        padding: '3rem 1.5rem'
    })}

`
export const Title = styled.div`
    font-size: 1.9rem;
    font-weight: 600;
    text-align: left;
    text-transform: capitalize;
    width: 100%;
`
export const Empty = styled.div`
    background-color: teal;
    padding:  1.5rem;
    color: white;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
`
export const Button = styled.button`
    text-transform: capitalize;
    padding: 1rem;
    margin-top: 2rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: white;
    color: teal;
`