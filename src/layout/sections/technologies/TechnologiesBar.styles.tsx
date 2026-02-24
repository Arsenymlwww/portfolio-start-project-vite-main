import styled from "styled-components";

export const BarWrapper = styled.div`
margin-bottom: 32px;
width: 100%;
max-width: 900px;

@media (max-width: 576px){
    margin-bottom: 26px;
}
`;

export const Label = styled.div`
margin: 0 0 8px 20px;
font-weight: 600;
font-size: 24px;

@media (max-width: 576px){
    font-size: 22px;
}
`;

export const Track = styled.div`
width: 100%;
height: 18px;
background: #1b2540;
border-radius: 8px;
overflow: hidden;
`;



export const Progress = styled.div<{ level: number; duration?: number; gradient?: string }>`
  height: 100%;
  border-radius: 8px;
  width: ${({ level }) => level}%;
  
  background: ${({ gradient }) => 
    gradient || 'linear-gradient(270deg, #6c5ce7, #00cec9, #b13a62)'};
  background-size: 400% 400%;

  /* Оставили только перелив градиента */
  animation: gradient ${({ duration }) => duration || 3}s ease infinite;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;




