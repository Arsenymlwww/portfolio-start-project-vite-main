import styled from "styled-components"

export const ExperienceSection = styled.section`
  background-color: #161D2A;
  padding: 120px 0;

  @media (max-width: 576px){
    padding: 70px 0 100px;
  }
  /* height: 100vh; */
`

export const ExperienceContainer = styled.div`
  max-width: 1172px;
  margin: 0 auto;
  padding: 0 15px;
`

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 34px;
  margin-top: 80px;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 48px;
  }
`