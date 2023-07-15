import styled from 'styled-components';


export const ProductSection = styled.section`
`

export const ProductContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem 2rem;
    max-width: 1400px;
    margin: 0 auto;
`


export const InfoContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.2);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    opacity: 0;
    transition: all 0.5s ease;
`
export const ProductItemContainer = styled.div`
    flex: 1;
    height: 350px;
    min-width: 300px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    padding: 1rem;

    &:hover ${InfoContainer}{
        opacity: 1;
    }
`
export const Circle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background-color: white;
    position: absolute;

`
export const Image = styled.img`
    width: 100%;
    height: 75%;
    object-fit: contain;
    z-index: 2;

`
export const Icon = styled.div`
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s linear;

    &:hover {
        transform: scale(1.1);
    }
`