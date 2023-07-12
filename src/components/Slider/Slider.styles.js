import { styled } from "styled-components";

export const SliderSection = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
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
`
export const Wrapper = styled.div`
    height: 100%;
`
export const Slide = styled.div`

`
export const Image = styled.div`

`
export const Info = styled.div`

`