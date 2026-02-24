import styled from "styled-components"

export const Card = styled.div`
max-width: 550px;
width: 100%;
padding: 25px 25px 32px;

border-radius: 32px 0 32px 0;

border: 1px solid transparent;
background: 
    linear-gradient(#0b1220, #0b1220) padding-box, 
    linear-gradient(to right, #4facfe, #00f2fe) border-box;

    @media (max-width: 568px){
        padding: 25px;
    }
`

export const TitleCard = styled.h3`
color: #fff;
margin-bottom: 23px;
text-align: center;
font-weight: 600;
font-size: 30px;
line-height: 89%;

    @media (max-width: 568px){
        font-size: 24px;
        margin-bottom: 20px;
    }
`


export const Image = styled.img.attrs({
loading: "lazy",
})`
width: 100%;
max-width: 500px;
height:280px;
margin-bottom: 40px;

object-fit:cover;

border-top-left-radius: 24px;
border-bottom-right-radius: 24px;
border-top-right-radius: 0;
border-bottom-left-radius: 0;

    @media (max-width: 568px){
        margin-bottom: 30px;
    }
`

export const Description = styled.p`
    line-height: 1.6;
    color: #bcbcbc;
    margin-bottom: 50px;
font-weight: 500;
font-size: 18px;

    @media (max-width: 568px){
        margin-bottom: 30px;
    }
`

export const GradientLine = styled.div`
max-width: 300px;
height: 6px;
margin: 40px auto;
border-radius: 10px;

background: linear-gradient(
    270deg,
    #6c5ce7,
    #00cec9,
    #ff7675
);
background-size: 400% 400%;

animation: gradient 6s ease infinite;

@keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

    @media (max-width: 568px){
        margin: 30px auto 20px;
    }
`

