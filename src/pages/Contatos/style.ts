import styled from "styled-components";
import backgroundImgPng from "../../assets/imgs/backgroundimg3.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;

  .titleDesktop {
    display: none;
  }

  .row {
    background-color: ${({ theme }) => theme.COLORS.BROWN};
    width: 8rem;
    height: 2px;
    margin-top: 5rem;
  }

  h2 {
    font-size: 2.3rem;
    margin: 1rem 0 2rem;
  }

  .links {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 4px;

    a {
      color: ${({ theme }) => theme.COLORS.BROWN};
      display: flex;
      align-items: center;
      gap: 5px;
      margin: 3rem 2rem;
    }

    svg {
      width: 2rem;
      height: 2rem;

      path {
        fill: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }
  }

  .map {
    width: 33rem;
    height: 30rem;
  }

  .map > iframe {
    width: 100%;
    height: 100%;

    &:focus, &:focus-visible, &:active {
      border: 3px solid ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  .logo {
    height: 10rem;
    margin-top: 10rem;

    > :first-child {
      width: 18rem;
      height: 7rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.GRAY};
      font-size: 1.3rem;
      bottom: 1rem;
      right: 3rem;
    }

    > :last-child {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin: -1rem;
    }

    svg {
      width: 3.5rem;
      height: 3.5rem;
    }

    a:first-of-type svg {
      width: 3rem;
    }
  }

  @media(min-width: 1000px) {
    background-color: ${({ theme }) => theme.COLORS.BROWN};

    h2 {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      font-size: 3rem;
      margin: -5rem 0 4rem;
    }

    .content {
      display: flex;
      flex-direction: row-reverse;
      margin-top: -18rem;
    }

    .links {
      background-color: ${({ theme }) => theme.COLORS.BROWN};
      padding-right: 10rem;

      a {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      svg {
        width: 3rem;
        height: 3rem;
      }
    }

    .map {
      width: 50rem;
      height: 40rem;
    }

    .logo {
      margin-top: 20rem;

      p {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }

      svg path {
        fill: ${({ theme }) => theme.COLORS.ORANGE};
      }
    }

    .titleMobile, .row {
      display: none;
    }

    .titleDesktop {
      background: url(${ backgroundImgPng }) no-repeat center center;
      background-size: cover;
      width: 100vw;
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;