import { styled } from "styled-components";
import {mobile} from '../../responsive'


export const NewsletterSection = styled.section`
    padding: 0 1.5rem;
`
export const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    border-top: 1px solid teal;
`
export const Title = styled.h1`
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 4px;
`
export const Desc = styled.p`
    font-weight: 300;
    text-align: center;
`
export const InputContainer = styled.div`
    width: 90%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid teal;
    padding: 0.5rem 0.4rem ;
    border-radius: 5px;
`
export const Input = styled.input`
    border: none;
    font-size: 1rem;
    padding-left: 0.5rem;

    &::placeholder {
        font-weight: bold;
    }

    &:focus {
        border: none;
        outline: none
    }
`
export const Button = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: teal;
    color: white;
    padding: 0.5rem 0.7rem;
`