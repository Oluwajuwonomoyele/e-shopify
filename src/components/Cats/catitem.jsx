import { CatItemContainer, Image, Info, Title, Button } from "./cats.styles";


const CatItem = ({cat}) => {
    return ( 
        <CatItemContainer>
            <Image src={cat.img} />
            <Info>
                <Title>{cat.title}</Title>
                <Button>shop now</Button>
            </Info>
        </CatItemContainer>
    );
}
 
export default CatItem;