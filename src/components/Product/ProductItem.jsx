import { ProductItemContainer, Image, InfoContainer, Desc, Top, Bottom, Name, Stock, Price} from "./Product.styles";
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const ProductItem = ({product}) => {
    return (  
        <ProductItemContainer>
            <Image src={product.img} alt={product.alt}/>
            <InfoContainer>
                <Top>
                    <Name>Lorem Ipsum</Name>
                    <Stock>In Stock</Stock>
                </Top>

                <Desc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex voluptates quae verit</Desc>

                <Bottom>
                    <Price>
                        NGN  35000.00
                    </Price>

                    <div>
                        <AiOutlineHeart size={30} />
                        <AiOutlineShoppingCart size={30} />
                    </div>
                </Bottom>
            </InfoContainer>
        </ProductItemContainer>
    );
}
 
export default ProductItem;