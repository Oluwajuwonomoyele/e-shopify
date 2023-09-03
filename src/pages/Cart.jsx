import { styled } from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const CartSection = styled.section``

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
  background-color: ${(props) => (props.type === 'filled' ? 'black' : 'transparent')};
  color: ${(props) => (props.type === 'filled' ? 'white' : '')};
`
const TopTexts = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`
const Info = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;

`
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Image = styled.img`
  max-width: 300px;
  width: 100%;
  object-fit: contain;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
const ProductName = styled.span`
  font-weight: 400;
  font-size: 1.2rem;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`
const ProductSize = styled.span``

const ProductId = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`
const ProductAmount = styled.div`
  font-size: 1.5rem;
`
const ProductPrice = styled.div`
  font-size: 2rem;
  font-weight: 200;
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  max-height: 45vh;
`
const SummaryTitle = styled.h1`
  text-transform: uppercase;
  font-weight: 500;
`
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' ? '500': ''};
  font-size: ${(props) => props.type === 'total' ? '24px': ''};
`
const SummaryItemText = styled.span`

`
const SummaryItemPrice = styled.span`

`
const Button = styled.button`
  text-transform: uppercase;
  width: 100%;
  padding: 10px;
  outline: none;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 600;
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
          <TopButton type="filled">checkout</TopButton>
        </Top>

        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5pa2UlMjB6b29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="nike zoom"
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 548882901123
                  </ProductId>
                  <ProductColor color="red" />
                  <ProductSize>
                    <b>Size:</b> 45.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlineMinus />
                  <ProductAmount>2</ProductAmount>
                  <AiOutlinePlus />
                </ProductAmountContainer>
                <ProductPrice>50,000.00</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikGtt_ygAC8CFJjEI6PnwKH0fl7j-FHi_cXl3jA-TdjMl8yhZLa84XS33img6utCBDoc&usqp=CAU"
                  alt="neo tee"
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> NEO TEES
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 94443290884
                  </ProductId>
                  <ProductColor color="yellow" />
                  <ProductSize>
                    <b>Size:</b> 13
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlineMinus />
                  <ProductAmount>1</ProductAmount>
                  <AiOutlinePlus />
                </ProductAmountContainer>
                <ProductPrice>7,000.00</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image
                  src="data:image/jpeg;base64,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"
                  alt="FH Shorts"
                />
                <Details>
                  <ProductName>
                    <b>Product:</b> Fashion Hut Shorts
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b> 548836751009
                  </ProductId>
                  <ProductColor color="grey" /> 
                  <ProductSize>
                    <b>Size:</b> M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <AiOutlineMinus />
                  <ProductAmount>2</ProductAmount>
                  <AiOutlinePlus />
                </ProductAmountContainer>
                <ProductPrice>5,000.00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>order summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>₦62,000.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>₦12,000.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>-₦7,000.00</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type='total'>
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>₦67,000.00</SummaryItemPrice>
            </SummaryItem>
            <Button>checkout now</Button>
          </Summary>
        </Bottom>
      </Container>
    </CartSection>
  )
}

export default Cart
