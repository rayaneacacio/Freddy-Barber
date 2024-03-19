import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 4rem;

  > div {
    display: flex;
    align-items: flex-start;
    gap: 5px;
  }

  @media(min-width: 1000px) {
    font-size: 1.4rem;
    flex-direction: row;
    gap: 2rem;
    margin-top: 0;
    padding-bottom: 3rem;

    > div {
      align-items: center;
    }
  }
`;