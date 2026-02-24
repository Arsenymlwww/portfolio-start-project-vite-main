import styled from "styled-components";

export const TechnologiesSection = styled.section`
background-color: #0f1624;
padding: 100px 0 170px;
position: relative;


    @media (max-width: 568px){
        padding: 70px 0 100px;
    }
`;

export const TechnologiesContainer = styled.div`
max-width: 1172px;
margin: 0 auto;
padding: 0 15px;
`;

export const BarsWrapper = styled.div`
max-width: 920px;
display: flex;
flex-direction: column;
margin: 0 auto 120px;

    @media (max-width: 568px){
        margin: 0 auto 85px;
    }
`;