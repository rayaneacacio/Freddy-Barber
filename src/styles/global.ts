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
    background-color: ${({ theme }) => theme.COLORS.BROWN};
    color: ${({ theme }) => theme.COLORS.GRAY};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.7rem;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2.7rem;
    font-weight: 400;
  }

  h2 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 2rem;
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1rem 5rem;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media(min-width: 1000px) {
    body {
      font-size: 2rem;
    }

    h1 {
      font-size: 4.1rem;
    }

    h2 {
      font-size: 3rem;
    }

    button {
      font-size: 1.8rem;
    }
  }
`;