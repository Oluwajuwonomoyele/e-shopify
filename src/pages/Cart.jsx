import { styled } from "styled-components"

const CartSection = styled.section`

`
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
`
const Title = styled.h1`
  font-weight: 300;
  font-size: 2rem;
  text-align: center;
  text-transform: uppercase;
`
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TopButton = styled.button`
  text-transform: uppercase;
  padding: 0.6rem;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  background-color: ${(props) => props.type === 'filled'? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled'? 'white' : ''};
`
const TopTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`
const Info = styled.div`
  flex: 3
`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2
`
const Image = styled.img`
`
const Details = styled.div`

`
const ProductName = styled.span`

`
const ProductColor = styled.div`

`
const ProductSize = styled.span`

`
const ProductId = styled.span`

`
const PriceDetail = styled.div`
  flex: 1
`
const Summary = styled.div`
  flex: 1
`

const Cart = () => {
  return (
    <CartSection>
      <Container>
        <Title>Cart</Title>

        <Top>
          <TopButton>continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText> 
          </TopTexts>
          <TopButton type='filled'>checkout now</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5pa2UlMjB6b29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' alt='nike zoom' />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 548882901123
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size:</b> 45.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>price</PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Container>
    </CartSection>
  )
}

export default Cart
