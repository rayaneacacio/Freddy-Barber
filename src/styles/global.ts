import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    padding: 0;
    border: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.8rem;
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.2rem;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 2rem;
  }

  button {
    cursor: pointer;
    transition: 0.3s;

    &::hover {
      filter: brightness(0.8);
    }
  }
`;