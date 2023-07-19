import { styled } from "styled-components";
import Newsletter from "../components/Newsletter";
import Product from "../components/Product";

const ProductListSection = styled.section`

`
const ProductListWrapper = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem 2rem;
`
const Title = styled.h1`
    padding: 1.2rem 0;

`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    padding: 1.2rem 0;
`
const FilterText = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
`
const Select = styled.select`
    padding: 0.5rem;
    margin: 0 0.6rem;
    cursor: pointer;
`
const Option = styled.option`
    padding: 0.5rem;
`

const ProductList = () => {
    return (  
        <ProductListSection>
            <ProductListWrapper>
             <Title>Product List</Title>
             <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (asc)</Option>
                        <Option>Price (desc)</Option>
                    </Select>
                </Filter>
             </FilterContainer>
             <Product />
            </ProductListWrapper>
            <Newsletter />
        </ProductListSection>
    );
}
 
export default ProductList;