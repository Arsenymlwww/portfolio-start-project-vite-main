import styled from "styled-components";

type BtnGradientProps = {
  href?: string
  onClick?: () => void
}

export const BtnGradient = styled.a<BtnGradientProps>`
  position: relative;
  overflow: hidden;

  padding: 15px 66px;
  border-radius: 50px;
  border: none;
  cursor: pointer;

  font-size: 20px;
  font-weight: 600;
  color: #fff;
  text-decoration: none;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  z-index: 0;

  /* мэйн градиент */
  background: linear-gradient(
    270deg,
    #6c5ce7,
    #00cec9,
    #6c5ce7
  );
  background-size: 400% 400%;
  animation: gradientIdle 5s ease infinite;

  @keyframes gradientIdle {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* hover-градиент */
  &::before {
    content: "";
    position: absolute;
    inset: 0;

    border-radius: inherit; /* 🔥 КЛЮЧ */

    background: linear-gradient(
      270deg,
      #df4747,
      #fdcb6e,
      #ff7675
    );
    background-size: 400% 400%;
    animation: gradientHover 2s ease infinite;

    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes gradientHover {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;