import styled from "styled-components";
import imgPng from "../../assets/imgs/imgpag2.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  padding: 5rem 5rem 7rem;

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

  @media(min-width: 600px) {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  @media(min-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-bottom: 10rem;
  }

  @media(min-width: 1400px) {
    p {
      width: 50rem;
    }
  }
`;

export const Image = styled.div`
  display: none;

  @media(min-width: 1000px) {
    display: block;
    width: 50rem;
    height: 30rem;
    position: relative;

    > div {
      width: 100%;
      height: 100%;
    }
  
    > :first-child {
      background: url(${ imgPng }) no-repeat center center;
      background-size: cover;
      position: relative;
      z-index: 1;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    }

    > :last-child {
      border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
      position: absolute;
      top: 54%;
      left: 47%;
      transform: translate(-50%, -50%);
      z-index: 0;
    }
  }
`;