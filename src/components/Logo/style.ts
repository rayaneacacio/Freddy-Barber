import styled from "styled-components";
import logoImg from "../../assets/imgs/Freddy.png";

export const Container = styled.div`
  width: 15rem;
  height: 8rem;
  position: relative;

  div {
    background:  url(${ logoImg }) no-repeat center center;
    background-size: contain;
    width: 100%;
    height: 100%;
  }

  p {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONTS.MONTSERRAT};
    font-size: 1rem;
    letter-spacing: 3px;
    position: absolute;
    bottom: 2rem;
    right: 2.2rem;
  }
`;