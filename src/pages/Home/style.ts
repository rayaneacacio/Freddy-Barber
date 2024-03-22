import styled from "styled-components";
import backgroundIMG from "../../assets/imgs/backgroundIMG.webp";

export const Container = styled.div`
  .home {
    color: ${({ theme }) => theme.COLORS.WHITE};
    width: 100vw;
    height: 85vh;
    position: relative;
    overflow: hidden;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 1rem;
    left: 5rem;
    right: 0;

    > div:last-of-type {
      display: none;
      z-index: 1;
    }
  }

  main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 75%;

    > p {
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
        font-size: 2rem;
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

export const BackgroundImg = styled.div`
  background: url(${ backgroundIMG }) no-repeat center center;
  background-size: cover;
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  height: 100%;
  animation: animateImg 1.5s forwards;
  transition: transform 1s cubic-bezier(.13,.55,.25,1),opacity .5s cubic-bezier(.13,.55,.25,1);
`;