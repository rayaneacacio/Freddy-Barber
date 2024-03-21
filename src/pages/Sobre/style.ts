import styled from "styled-components";
import imgPng from "../../assets/imgs/imgpag2.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  padding: 5rem 2rem 10rem;

  .row {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    width: 5rem;
    height: 5px;
    margin-bottom: 1rem;
  }

  p:first-of-type {
    font-weight: 600;
  }

  h2 {
    margin: 2rem 0;
  }

  @media(min-width: 550px) {

    p {
      width: 40rem;
    }
  }

  @media(min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10rem;

    p {
      width: 50rem;
    }
  }
`;

export const Image = styled.div`
  display: none;

  @media(min-width: 1000px) {
    display: block;
    background: url(${ imgPng }) no-repeat center center;
    background-size: cover;
    width: 60rem;
    height: 32rem;
  }
`;