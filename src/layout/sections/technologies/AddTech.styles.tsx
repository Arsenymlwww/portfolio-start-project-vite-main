import styled from "styled-components";




export const AddTech = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Убедимся, что сам блок не вылезает за пределы экрана, добавив максимальную ширину и немного отступов по бокам */
    width:100%; 
    padding: 0 20px; 
`

export const AddTitle = styled.h2`
font-weight: 600;
font-size: 44px;
margin: 0 auto 70px;
max-width: 753px;
text-align: center;

@media (max-width: 576px){
font-size: 27px;
margin: 0 auto 40px;
}
`

export const AddTechLogoWrapper = styled.div`
    display: flex;
    gap: 50px;
    justify-content: center;
    width: 100%;

    img{
        max-width: 100px;
        width:100%;
        height: auto;
    }

    @media (max-width: 576px){
    gap: 5vw;
        img{
        max-width: 60px;
        width:100%;
        height: auto;
    }

}

`