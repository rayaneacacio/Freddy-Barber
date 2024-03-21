import styled from "styled-components";
import backgroundIMG from "../../assets/imgs/backgroundIMG.webp";

export const Container = styled.div`
  &::-webkit-scrollbar {
    width: 0;
    display: none;
  }

  > :first-child {
    background: url(${ backgroundIMG }) no-repeat center center;
    background-size: cover;
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100vw;
    height: 85vh;
    padding: 1rem 5rem;
  }

  header {
    display: flex;
    justify-content: space-between;

    > div:last-of-type {
      display: none;
    }
  }

  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    width: 75%;

    > p {
      font-size: 2rem;
      width: 30rem;
      margin: 1rem 0 3rem;
    }
  }

  footer {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.3rem;
    font-weight: 300;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(min-width: 1000px) {
    > :first-child {
      height: 95vh;
    }

    header {
      padding: 0 15rem 0 10rem;

      > div:last-of-type {
        display: flex;
      }
    }

    main {
      > :last-child{
        display: none;
      }

      > p {
        width: 50rem;
        margin: 2rem 0 5rem;
      }
    }

    footer {
      font-size: 1.4rem;
      padding: 3rem 0;
    }
  }
`;