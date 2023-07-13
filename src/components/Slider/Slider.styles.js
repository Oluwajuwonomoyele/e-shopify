import { styled } from "styled-components";

export const SliderSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`
export const Arrow = styled.div`
    width: 50px;
    height: 50px;
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
    z-index: 22;
`
export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideindex * -100}vw);
    transition: all 0.5s ease-out;
`
export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.bg};
`
export const ImageContainer = styled.div`
    flex: 1;
    height: 100%;
`
export const Image = styled.img`
    height: 86%;
    width: 100%;
    object-fit: cover;
`
export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    text-transform: uppercase;
`
export const Title = styled.h1`
    font-size: 70px;
`
export const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
export const SliderButton = styled.button`
    padding: 10px;
    background-color: transparent;
    font-size: 20px;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
`