import {styled} from 'styled-components';


export const MobileNavSection = styled.section`
    background-color: white;
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 20;
    display: ${(props) => props.openNav ? '' : 'none'};
`
export const Container = styled.div`
    padding: 1.5rem;
    padding-top: 4.2rem;
`
export const Search = styled.div`
    width: 100%;
    background-color: lightgray;
    padding: 0.7rem 1rem ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
`
export const Input = styled.input`
    width: 80%;
    background-color: lightgray;
    border: none;
    outline: none;
`
export const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
    border: 1px solid gray;
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