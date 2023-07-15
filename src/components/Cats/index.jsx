import { CatsSection, CatsContainer } from "./cats.styles";
import { categories } from "../../data";
import CatItem from "./catitem";

const Cats = () => {
    return ( 
        <CatsContainer>
           <CatsSection>
            { categories.map(cat => (
                    <CatItem cat={cat} />
            ))}
           </CatsSection>
        </CatsContainer>
    );
}
 
export default Cats;