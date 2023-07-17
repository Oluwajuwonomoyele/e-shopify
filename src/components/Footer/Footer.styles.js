import { styled } from "styled-components";

export const FooterSection = styled.footer`

`
export const Wrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
`
export const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

`
export const Logo = styled.h1`
    
`
export const Desc = styled.p`

`
export const SocialContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

`
export const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    color: white;
    background-color: rgba(0,0,0,0.2);
    cursor: pointer;
`
export const Center = styled.div`
    flex: 1;
`
export const Title = styled.h3`
    margin-bottom: 1.2rem;
`
export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    row-gap: 0.5rem;
`
export const ListItem = styled.li`
    width: 50%;
`

export const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    justify-content: flex-start;
`
export const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
`
export const Payment = styled.img`
    width: 50%;
    cursor: pointer;
`