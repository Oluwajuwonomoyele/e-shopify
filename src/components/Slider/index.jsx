import { SliderSection, Arrow, Wrapper, Slide, Image, ImageContainer, InfoContainer, Title, Desc, SliderButton } from "./Slider.styles";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import { sliderData } from "../../data";
import { useState } from "react";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (  
        <SliderSection>
            <Arrow direction='left' onClick={() => nextSlide('left')} >
                <AiOutlineArrowLeft size={25} />
            </Arrow>
            <Wrapper slideindex={slideIndex}>
                { sliderData.map(slide => (
                    <Slide bg={slide.bg} key={slide.id}>
                        <ImageContainer>
                            <Image src={slide.img} alt={slide.alt} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{slide.title}</Title>
                            <Desc>{slide.desc}</Desc>
                            <SliderButton>shop now</SliderButton>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction='right' onClick={() => nextSlide('right')}>
                <AiOutlineArrowRight size={25} />
            </Arrow>
        </SliderSection>
    );
}
 
export default Slider;