import { CatItemContainer, Image, Info, CatTitle, Button } from "./cats.styles";


const CatItem = ({cat}) => {
    return ( 
        <CatItemContainer>
            <Image src={cat.img} alt={cat.alt} />
            <Info>
                <CatTitle>{cat.title}</CatTitle>
                <Button>shop now</Button>
            </Info>
        </CatItemContainer>
    );
}
 
export default CatItem;