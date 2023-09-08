import { CatsSection, Container, Title, CatContainer } from "./cats.styles";
import { categories } from "../../data";
import CatItem from "./catitem";

const Cats = () => {
    return ( 
        <CatsSection>
           <Container>
            <Title>Shop by Category</Title>

            <CatContainer>
                { categories.map(cat => (
                        <CatItem cat={cat} key={cat.id} />
                ))}
            </CatContainer>
           </Container>
        </CatsSection>
    );
}
 
export default Cats;