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
        padding: '0'
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
        margin-bottom: 1rem;
    }
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;


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

`
export const Links = styled.div`

`
export const Third = styled.div`

`

// export const Left = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;

//     ${mobile({
//         justifyContent: 'center',
//     })}
// `
// export const Logo = styled.h1`

// `
// export const Desc = styled.p`
    
// `
// export const SocialContainer = styled.div`
//     display: flex;
//     gap: 1rem;
//     align-items: center;

// `
// export const SocialIcon = styled.div`
//     width: 40px;
//     height: 40px;
//     align-items: center;
//     justify-content: center;
//     display: flex;
//     border-radius: 50%;
//     color: white;
//     background-color: rgba(0,0,0,0.2);
//     cursor: pointer;
// `
// export const Center = styled.div`
//     flex: 1;
// `
// export const Title = styled.h3`
//     margin-bottom: 1.2rem;
// `
// export const List = styled.ul`
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     display: flex;
//     flex-wrap: wrap;
//     row-gap: 0.5rem;
// `
// export const ListItem = styled.li`
//     width: 50%;

// `

// export const Right = styled.div`
//     flex: 1;
//     display: flex;
//     flex-direction: column;
//     gap: 0.4rem;
//     justify-content: flex-start;
// `
// export const ContactItem = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 0.2rem;
// `
// export const Payment = styled.img`
//     width: 50%;
//     cursor: pointer;
// `