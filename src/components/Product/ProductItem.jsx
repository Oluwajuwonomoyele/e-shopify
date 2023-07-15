import { ProductItemContainer, Circle, Image, InfoContainer, Icon } from "./Product.styles";
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductItem = ({product}) => {
    return (  
        <ProductItemContainer>
            <Circle />
            <Image src={product.img} alt={product.alt}/>
            <InfoContainer>
                <Icon>
                    <AiOutlineShoppingCart size={22} />
                </Icon>
                <Icon>
                    <AiOutlineSearch size={22} />
                </Icon>
                <Icon>
                    <AiOutlineHeart size={22} />
                </Icon>
            </InfoContainer>
        </ProductItemContainer>
    );
}
 
export default ProductItem;