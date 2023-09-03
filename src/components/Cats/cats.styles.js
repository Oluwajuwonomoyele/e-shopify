import { styled } from "styled-components";
import {mobile} from '../../responsive';

export const CatsContainer = styled.section`

`
export const CatsSection = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    ${mobile({
        padding: '1rem',
        flexDirection: 'column'
    })}
`

export const CatItemContainer = styled.div`
    flex: 1;
    height: 75vh;
    position: relative;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    ${mobile({
        height: '40vh'
    })}
`
export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    font-size: 35px;

    ${mobile({
        textAlign: 'center'
    })}
`
export const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    text-transform: uppercase;
    outline: none;
    font-weight: 600;
`