import { styled } from "styled-components";
import {mobile} from '../../responsive';

export const FooterSection = styled.footer`
`
export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;

    ${mobile({
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0 1.5rem 2rem 1.5rem'
    })}
`

export const First = styled.div`
    text-align: center;
    border: 1px solid teal;
    border-left: none;
    border-right: none;
    padding: 2rem 0;

    h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 2rem;
    }
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
`
export const Button = styled.button`
    padding: 1rem;
    background-color: white;
    border: 1px solid teal;
    color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    outline: none;
    margin: 0 1.5rem;
`
export const Second = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
`
export const Right = styled.div`
    h2 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
    }
`
export const Links = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
        text-transform: capitalize;

        &:hover {
            text-decoration: underline;
        }
    }
`
export const Third = styled.div`
    border: 2px solid teal;
    padding: 1rem;

    h2 {
        font-size: 1.2rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }
    
    button {
        padding: 1rem 2rem;
        background-color: white;
        border: 2px solid teal;
        color: teal;
        cursor: pointer;
        outline: none;
        text-transform: uppercase;
        font-weight: 600;
    }
`
export const SocialContainer = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    color: teal;
    font-size: 2rem;

    path {
        cursor: pointer;
    }

`
export const Cr = styled.div`
    text-align: center;
    width: 100%;
    font-weight: bold;
`
export const Acknowledgment = styled.div`
    text-align: center;
    padding: 0 1.5rem 2rem 1.5rem;


    a {
        color: teal;
        text-decoration: none;
        cursor: pointer;
        font-weight: bold;
    }
`
