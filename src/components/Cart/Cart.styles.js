import { styled } from "styled-components";
import { mobile } from '../../responsive';

export const CartSection = styled.section`
    position: fixed;
    background-color: white;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 30;
    display: ${(props) => props.opencart ? '' : 'none'}
`

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;

  ${mobile({
      padding: '1.5rem'
  })}
`
export const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 3rem;
  text-transform: capitalize;
  width: 100%;

  path {
    cursor: pointer;
  }
`
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TopButton = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  margin-top: 3rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: 2px solid black;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  color: black;
`
export const TopTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ${mobile({
      display: 'none'
  })}
`
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  ${mobile({
    flexDirection: 'column',
    gap: '2rem',
  })}
`
export const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`
export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({
      flexDirection: 'column'
  })}
`
export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
`
export const Image = styled.img`
  max-width: 300px;
  width: 100%;
  object-fit: contain;

  ${mobile({
      maxWidth: '50%'
  })}
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${mobile({
      gap: '0.5rem'
  })}
`
export const ProductName = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
`

export const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
export const ProductSize = styled.span``

export const ProductId = styled.span``

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${mobile({
      flexDirection: 'row',
      justifyContent: 'space-between'

  })}
`
export const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;

  ${mobile({
    marginBottom: '0'
  })}
`
export const ProductAmount = styled.div`
  font-size: 1.5rem;
`
export const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`
export const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  max-height: 45vh;

  ${mobile({
      marginLeft: '0',
      maxHeight: 'none'
  })}
`
export const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
`
export const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' ? '500': ''};
  font-size: ${(props) => props.type === 'total' ? '24px': ''};
`
export const SummaryItemText = styled.span`

`
export const SummaryItemPrice = styled.span`

`
export const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  padding: 1rem;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
`
export const Empty = styled.div`
  padding-top: 6rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1.3rem;
  }
`