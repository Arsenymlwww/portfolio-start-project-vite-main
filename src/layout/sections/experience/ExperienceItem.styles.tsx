import styled from "styled-components"

export const Item = styled.div`
  width: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* Центрирование текста и года на десктопе */

  @media (max-width: 900px) {
    width: 100%;
    flex-direction: row; /* Родительский контейнер становится горизонтальным */
    align-items: flex-start; /* Выравнивание контента по верхнему краю */
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column; /* Год и текст остаются вертикальными */
  align-items: inherit; /* Наследуем выравнивание от родителя на десктопе (center) */

  @media (max-width: 900px) {
    text-align: left; /* Текст слева на мобильном устройстве */
    margin-left: 20px; /* Отступ слева от вертикальной линии */
    align-items: flex-start; /* Выравнивание по левому краю на мобильном устройстве */
  }
`

export const GradientLine = styled.div`
  width: 100%;
  height: 6px; /* Горизонтальная высота */
  border-radius: 6px;
  margin-bottom: 24px;
  background: linear-gradient(90deg, #6c5ce7, #00cec9); /* Горизонтальный градиент */
  /* Плавный переход для медиа-запроса */
  transition: all 0.3s ease-in-out;

  @media (max-width: 900px) {
    /* width: 10px; Вертикальная ширина */
    max-width: 10px;
    min-width: 10px;
    height: auto; /* Высота будет подстраиваться под контент автоматически */
    align-self: stretch; /* Растягиваем линию по высоте Item */
    margin-bottom: 0;
    background: linear-gradient(0deg, #6c5ce7, #00cec9); /* Вертикальный градиент */
  }
`

export const Year = styled.h3`
  color: #ffffff;
  margin-bottom: 12px;
font-weight: 600;
font-size: 26px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
color: #bcbcbc;
font-weight: 500;
font-size: 18px;
text-align: center;


@media (max-width: 900px){
  text-align: left;
}
`
