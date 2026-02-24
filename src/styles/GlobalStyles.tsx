import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* CSS reset */
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: #0F1624;
    color: #ffffff;
    padding-top: 90px;
    /* min-width: 376px; */
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    font-family: inherit;
    background: none;
    border: none;
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;