import { styled } from "styled-components";
import {mobile} from '../../responsive'


export const NewsletterSection = styled.section`
    height: 50vh;
    background-color: #fcf5f5;
`
export const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 100%;

    ${mobile({
        padding: '1rem'
    })}

`
export const Title = styled.h1`
    font-size: 3.2rem;

    ${mobile({
        fontSize: '2.2rem'
    })}

`
export const Desc = styled.p`
    font-size: 1.5rem;
    font-weight: 300;

    ${mobile({
        textAlign: 'center',
        fontSize: '1.2rem'
    })}

`
export const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;

    ${mobile({
        width: '100%'
    })}

`
export const Input = styled.input`
    flex: 9;
    border: none;
    padding-left: 1rem;

    ${mobile({
        flex: '8'
    })}
`
export const Button = styled.button`
    flex: 1;
    cursor: pointer;
    border: none;
    outline: none;
    background-color: teal;
    color: white;

    ${mobile({
        flex: '2'
    })}
`