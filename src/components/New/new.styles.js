import { styled } from "styled-components";

export const NewSection = styled.section`
    background: linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0,0.7)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxOF4tUDv4lJgW3JhoTGljJXgkF8y5Io1IwA&usqp=CAU');
    background-position: cover;
    background-repeat: no-repeat;
    background-size: cover;
`

export const Container = styled.div`
    padding: 5rem 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: white;


    h2 {
        font-size: 2rem;
    }

    p {
        font-size: 2.2rem;
    }

    button {
        padding: 0.8rem 1rem;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        outline: none;
        cursor: pointer;
    }
`