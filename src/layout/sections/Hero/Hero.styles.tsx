import styled from "styled-components";

export const HeroSection = styled.section`
background-color: #0f1624;
padding: 125px 0;
overflow: hidden;


    @media (max-width: 568px){
        padding: 65px 0;
    }
`;

export const HeroContainer = styled.div`
    max-width: 1172px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;


    @media (max-width: 768px){
      flex-direction: column-reverse;
      text-align: center;
    }
`;

export const HeroText = styled.div`
  max-width: 620px;
`;

export const HeroTitle = styled.h1`
color: #ffffff;
margin-bottom: 24px;
font-weight: 600;
font-size: 54px;

@media (max-width: 768px){
font-weight: 600;
font-size: 36px;
}
`;



export const HeroDescription = styled.p`
  line-height: 1.6;
  color: #bcbcbc;
  margin-bottom: 70px;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  
  /* Убираем лишние отступы, которые могут влиять на ширину */
  width: 100%;
  max-width: 100%;
  
  /* Чтобы невидимый текст внутри корректно переносился */
  span {
    display: inline-block;
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px; /* Немного уменьшим отступ на мобилках */
    
    & > div {
      /* Вместо transform используем обычное позиционирование, 
         чтобы не ломать ширину */
      left: 0 !important;
      right: 0 !important;
      width: 100% !important;
      transform: none !important;
    }
  }
`;





export const HeroVisual = styled.div`
position: relative; // контейнер для позиционирования псевдоэлемента, все блоки внутри отсчитывают свое расположение от него
/* overflow: hidden; */


    @media (max-width: 768px){
      /* display: none; */
    }
`;


export const ImageWrapper = styled.div`
position: relative;
z-index: 1;
width: 360px;
height: 420px;
border: 7px solid #2f80ed;
border-top-left-radius: 40px; 
border-bottom-right-radius: 40px;

  overflow: visible; 



  &::before {
    content: "";
    position: absolute;
    inset: -20px;
    z-index: 0;

    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(0, 11, 162, 0.35),
      rgba(1, 155, 176, 0.812),
      transparent 70%
    );
    filter: blur(50px);
}

  img {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: cover; // чтобы не тянуть фото
    border-top-left-radius: 33px;
    border-bottom-right-radius: 33px;
    display: block;
  }

  @media (max-width: 1024px){
    width: 300px;
    height: 360px;
  }

    @media (max-width: 768px){
    width: 280px;
    height: 340px;
    /* margin: 0 auto; */
  }
`;

