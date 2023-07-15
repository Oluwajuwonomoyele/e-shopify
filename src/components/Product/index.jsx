import { ProductContainer, ProductSection } from "./Product.styles";
import { popularProducts } from "../../data";
import ProductItem from "./ProductItem";

const Product = () => {
    return (  
        <ProductSection>
            <ProductContainer>
                { popularProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </ProductContainer>
        </ProductSection>
    );
}
 
export default Product;