import { SliderSection, Arrow, Wrapper, Slide, Image, Info } from "./Slider.styles";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';

const Slider = () => {
    return (  
        <SliderSection>
            <Arrow direction='left'>
                <AiOutlineArrowLeft size={25} />
            </Arrow>
            <Wrapper>

            </Wrapper>
            <Arrow direction='right'>
                <AiOutlineArrowRight size={25} />
            </Arrow>
        </SliderSection>
    );
}
 
export default Slider;