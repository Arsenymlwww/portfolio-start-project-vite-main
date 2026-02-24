import styled from "styled-components"

export const ProjectsSection = styled.section`
background-color: #161D2A;
padding: 100px 0 140px;
position: relative;


@media (max-width: 576px){
    padding: 70px 0;
}
`

export const ProjectsContainer = styled.div`
max-width: 1172px;
margin: 0 auto;
padding: 0 15px;
`

export const ProjectsGrid = styled.div`
display: flex;
flex-wrap: wrap;
gap: 42px;
/* column-gap: 60px; */
justify-content: center;


    @media (max-width: 568px){
        gap: 30px;
    }
`


