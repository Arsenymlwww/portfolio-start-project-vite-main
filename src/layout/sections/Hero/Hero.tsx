import {
HeroSection,
HeroContainer,
HeroText,
HeroTitle,
HeroDescription,
HeroVisual,
ImageWrapper,
} from "./Hero.styles";

import heroImg from '../../../assets/images/mainCat.jpg';
import { BtnGradient } from "../../../components/Button/BtnGradient";
import Typewriter from 'typewriter-effect';

export const Hero: React.FC = () => {
return (
    <HeroSection>
    <HeroContainer>
        <HeroText>
            <HeroTitle>Hi, I'm Arseny</HeroTitle>
            <HeroDescription>
                <span style={{ visibility: 'hidden', userSelect: 'none' }}>
                I am a passionate Front-end Developer focused on creating clean, responsive, and user-friendly interfaces. I love turning complex problems into simple and elegant code.
                </span>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' , display: 'block'}}>
                    <Typewriter
                        options={{
                        strings: ['I am a passionate Front-end Developer focused on creating clean, responsive, and user-friendly interfaces. I love turning complex problems into simple and elegant code.'],
                        autoStart: true,
                        loop: true,
                        delay: 50, // можно чуть ускорить для плавности
                        }}
                    />
                </div>
            </HeroDescription>


            <BtnGradient onClick={()=>{
                document
                .getElementById("experience")
                ?.scrollIntoView({behavior:"smooth"})
            }}>
            Let’s Begin
            </BtnGradient>
        </HeroText>
        
        <HeroVisual>
            <ImageWrapper>
            <img src={heroImg} alt="hero" />
            </ImageWrapper>
        </HeroVisual>
    </HeroContainer>
    </HeroSection>
);
};