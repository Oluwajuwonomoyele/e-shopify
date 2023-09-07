import {styled} from 'styled-components';


export const MobileNavSection = styled.section`
    background-color: white;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    display: ${(props) => props.opennav ? '' : 'none'};
    overflow-y: scroll;
`
export const Container = styled.div`
    padding: 1.5rem;
    padding-top: 5rem;
    margin-bottom: 1.5rem;
    height: 100%;
`
export const Search = styled.div`
    width: 100%;
    background-color: white;
    padding: 0.8rem 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: 1px solid black;
`
export const Input = styled.input`
    width: 80%;
    background-color: white;
    border: none;
    outline: none;
`
export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

`
export const Cat = styled.div`
    display: flex;
    justify-content: space-between;
    text-transform: capitalize;
    border: 1px solid black;
    padding: 1rem 0;
    border-left: none;
    border-right: none;
    border-top: none;

`
export const Socials = styled.div`
    padding: 1rem 0;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1.8rem;
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
`
export const Button = styled.button`
    padding: 1rem 3rem;
    text-transform: uppercase;
    background-color: white;
    outline: none;
    border: 2px solid teal;
    color: teal;
    font-weight: 600;
    border-radius: 4px;
    background-color: white;
`
export const MenuList = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-wrap: wrap;
`
export const ListItem = styled.div`
    width: 50%;
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid black;
    color: black;
    cursor: pointer;

    &:nth-child(1){
        border-left: none;
    }
    &:nth-child(2){
        border-right: none;
        border-left: none

    }
    &:nth-child(3){
        border-left: none;
        border-top: none;
    }
    &:nth-child(4){
        border-right: none;
        border-top: none;
        border-left: none;
    }
`