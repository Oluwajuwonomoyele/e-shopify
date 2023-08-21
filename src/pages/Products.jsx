import { styled } from "styled-components";
import Newsletter from "../components/Newsletter";
import { BiMinus } from 'react-icons/bi';
import { AiOutlinePlus } from 'react-icons/ai';

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
    font-size: 42px;
`
const Desc = styled.p`
    margin: 1.2rem 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 2.5rem;
`
const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

`
const FilterOne = styled.div`
    span {
        font-size: 20px;
        font-weight: 200;
    }

    display: flex;
    align-items: center;
    gap: 0.5rem;

`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    cursor: pointer;
`
const FilterTwo = styled.div`
    span {
        font-size: 20px;
        font-weight: 200;
    }

    display: flex;
    align-items: center;
    gap: 0.5rem;
`
const FilterSizeSelect = styled.select`
    cursor: pointer;
    padding: 5px;
`
const SizeOption = styled.option`
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
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
                    <Price>₦ 4,500</Price>
                    <FilterContainer>
                        <FilterOne>
                            <span>Color</span>

                            <FilterColor color='black' />
                            <FilterColor color='darkblue' />
                            <FilterColor color='gray' />
                        </FilterOne>

                        <FilterTwo>
                            <span>Size</span>

                            <FilterSizeSelect>
                                <SizeOption>XS</SizeOption>
                                <SizeOption>S</SizeOption>
                                <SizeOption>M</SizeOption>
                                <SizeOption>L</SizeOption>
                                <SizeOption>XL</SizeOption>
                                <SizeOption>XXL</SizeOption>
                            </FilterSizeSelect>
                        </FilterTwo>   
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <BiMinus />
                            <Amount>1</Amount>
                            <AiOutlinePlus />
                        </AmountContainer>

                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </ProductsWrapper>
            <Newsletter />
        </ProductsSection>
    );
}
 
export default Products;