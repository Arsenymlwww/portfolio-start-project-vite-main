import styled from "styled-components";



 export const StyledHeader = styled.header`
    background-color: #0F1624;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`


export const HeaderContainer = styled.div`
    max-width: 1172px;
    margin: 0 auto;
    padding: 26px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DesktopNav = styled.div`

`

export const DesktopMenu = styled.div`

`

// export const BurgerButton = styled.button`
//   display: none;
//   background: none;
//   border: none;
//   cursor: pointer;

//   flex-direction: column;
//   gap: 6px;

//   span {
//     width: 28px;
//     height: 3px;
//     background: #fff;
//     border-radius: 2px;
//   }

//   @media (max-width: 900px) {
//     display: flex;
//   }
// `;

export const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 6px;
  padding: 0;
  z-index: 1100; /* Чтобы кнопка была выше открытого меню */

  span {
    width: 28px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: all 0.3s ease-in-out; /* Плавная анимация */
    transform-origin: left center; /* Точка поворота для точности */
  }

  @media (max-width: 900px) {
    display: flex;
  }

  /* Логика крестика */
  ${props => props.isOpen && `
    span:nth-child(1) {
      transform: rotate(40deg);
    }
    span:nth-child(2) {
      width: 0;
      opacity: 0;
    }
    span:nth-child(3) {
      transform: rotate(-40deg);
    }
  `}
`;



export const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  background: rgba(15, 22, 36, 0.85);
  backdrop-filter: blur(12px);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  padding: 40px 0;
  z-index: 10;
`;

export const MobileNav = styled.div`
    ul {
        flex-direction: column;
        gap: 32px;
        align-items: center;
    }

    a{
        font-size:20px;
    }
`