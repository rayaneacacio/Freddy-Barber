import styled from "styled-components";
import backgroundImgPng from "../../assets/imgs/backgroundImg2.png";

export const Container = styled.div`
  background: url(${ backgroundImgPng }) no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 300;
  }

  @media(min-width: 1000px) {
    height: 50vh;

    h1 {
      font-size: 3.3rem;
    }

    h2 {
      font-size: 2.7rem;
    }

    svg {
      width: 6.5rem;
      height: 6.5rem;
    }
  }
`;