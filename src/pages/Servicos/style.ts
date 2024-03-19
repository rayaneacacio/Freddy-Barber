import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-bottom: 15rem;

  > p {
    font-size: 1.4rem;
  }

  .row {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    width: 5rem;
    height: 2px;
  }
  
  > div, > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  > div {
    gap: 8rem;
    margin-top: 5rem;
  }

  p {
    width: 30rem;
    text-align: center;
  }

  svg {
    width: 8rem;
    height: 8rem;
  }

  @media(min-width: 1000px) {
    padding: 0 5rem 15rem;
    
    > div {
      margin-top: 10rem;
      font-size: 1.8rem;
      flex-direction: row;
      gap: 6rem;
    }
  }
`;