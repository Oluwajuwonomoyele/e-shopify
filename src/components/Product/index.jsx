import { Container, ProductSection, Title, Products } from "./Product.styles";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";

const Product = () => {
    return (  
        <ProductSection>
            <Container>
                <Title>Selected Products</Title>

                <Products>
                    { popularProducts.map(product => (
                        <ProductItem product={product} key={product.id} />
                    ))}
                </Products>
            </Container>
        </ProductSection>
    );
}
 
export default Product;