import { styled } from "styled-components";
import Newsletter from "../components/Newsletter";

const ProductsSection = styled.section`
    
`
const ProductsWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    gap: 4rem;
`
const ImageContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex: 1;
`
const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin: 1.2rem 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 2.5rem;
`
const FilterContainer = styled.div`
    

`


const Products = () => {
    return (  
        <ProductsSection>
            <ProductsWrapper>
                <ImageContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImageContainer>
                <InfoContainer>
                    <Title>Denim JumpSuit</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit rem, aliquid mollitia, harum veniam quos perspiciatis quia, temporibus nisi deserunt asperiores commodi voluptatum et sequi aspernatur debitis! Quas, nisi dolor?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, corporis reiciendis praesentium modi deserunt iure at, laborum quis molestiae perferendis odit magni explicabo eaque culpa consectetur sunt aliquam ad non!
                    </Desc>
                    <Price>₦ 2,000</Price>
                </InfoContainer>
            </ProductsWrapper>
            <Newsletter />
        </ProductsSection>
    );
}
 
export default Products;