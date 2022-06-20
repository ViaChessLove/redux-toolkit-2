import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    background: black;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
  };
`