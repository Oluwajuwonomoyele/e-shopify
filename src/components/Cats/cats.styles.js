import { styled } from "styled-components";

export const CatsSection = styled.section`
`
export const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1.5rem;
`
export const Title = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 3rem;
    text-align: center;
`
export const CatContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
`

export const CatItemContainer = styled.div`
    height: 500px;
    width: 47%;
    position: relative;
    overflow: hidden;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    padding: 0 0.5rem;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const CatTitle = styled.h1`
    margin-top: 18rem;
    color: white;
    text-transform: capitalize;
    font-size: 1.3rem;
    text-align: center;
`
export const Button = styled.button`
    padding: 0.6rem 1rem;
    background-color: white;
    color: ${({theme}) => theme.colors.black};
    text-transform: uppercase;
    outline: none;
    border: none;
    font-weight: bold;
    cursor: pointer;
`