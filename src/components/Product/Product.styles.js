import styled from 'styled-components';
import {mobile} from '../../responsive'


export const ProductSection = styled.section`
`

export const Container = styled.div`
    padding: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
`
export const Title = styled.h1`
    font-size: 1.8rem;
    margin-bottom: 3rem;
    text-align: center;
`

export const Products = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
    justify-content: center;
`
export const ProductItemContainer = styled.div`
    width: 100%;
    max-width: 400px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
`

export const InfoContainer = styled.div`
    margin-top: 1rem;
`
export const Image = styled.img`
    width: 100%;
    object-fit: contain;
    z-index: 2;

`
export const Top = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const Bottom = styled.div`
    margin-top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${({theme}) => theme.colors.black};

    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    path {
        cursor: pointer;
    }
`
export const Desc = styled.div`
    margin-top: 1rem;
`
export const Name = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.black};
`
export const Stock = styled.span`
    position: relative;
    padding: 0 0.8rem;
    color: ${({theme}) => theme.colors.black};
    font-weight: bold;


    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 10px;
        bottom: 0;
        left: 0;
        background-color: green;
        opacity: 0.3;
        border-radius: 5px;
    }
`
export const Price = styled.span`
    font-weight: bold;
    font-size: 1.2rem;
`