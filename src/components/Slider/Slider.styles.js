import { styled } from "styled-components";

export const SliderSection = styled.section`
    width: 100%;
    height: 80vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
export const Arrow = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' ? '10px' : ''};
    right: ${props => props.direction === 'right' ? '10px' : ''};
    cursor: pointer;
    opacity: 0.7;
    z-index: 15;
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${(props) => props.slideindex * -100}vw);
    transition: all 0.5s ease-out;
`
export const Slide = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ImageContainer = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    height: 80vh;
    z-index: 10;
    top: 0;
    left: 0;
    `
export const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
export const InfoContainer = styled.div`
    padding: 0 1.5rem;
    margin-top: 18rem;
    text-transform: uppercase;
    position: relative;
    z-index: 15;
`
export const Title = styled.h1`
    font-size: 3rem;
    color: white;
`
export const Desc = styled.p`
    color: white;
    margin: 1.5rem 0;
    letter-spacing: 3px;
`
export const SliderButton = styled.button`
    padding: 0.8rem 1rem;
    font-size: 1.1rem;
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    color: #363636;
    border: none;
`