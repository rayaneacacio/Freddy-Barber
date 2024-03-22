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
    overflow: hidden;

    > div {
      width: 100%;
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      scroll-behavior: smooth;

      &::-webkit-scrollbar {
        display: none;
      }
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
  }

  button, a {
    cursor: pointer;
    transition: 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      filter: brightness(0.7);
    }
  }

  @media(min-width: 1000px) {
    body div {
      &::-webkit-scrollbar {
        display: block;
        background-color: ${({ theme }) => theme.COLORS.BROWN};
        width: 12px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #5c5c5c;
        width: 7px;
        border-radius: 10px;
        border: 3px solid ${({ theme }) => theme.COLORS.BROWN};
      }
    }

    h1 {
      font-size: 3.5rem;
    }

    h2 {
      font-size: 3rem;
    }

    button {
      font-size: 1.8rem;
    }
  }

  @keyframes animateRow {
    from {
      height: 0;
    }
    to {
      height: 5px;
    }
  }

  @keyframes animateToBottom {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes animateToRight {
    from {
      opacity: 0;
      transform: translateX(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes animateImg {
    from {
      transform: scale(1.15);
    }
    to {
      transform: scale(1);
    }
  }
`;