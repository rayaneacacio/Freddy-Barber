import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  align-items: center;

  .row {
    background-color: ${({ theme }) => theme.COLORS.BROWN};
    width: 7rem;
    height: 2px;
  }

  h2 {
    margin: 1rem 0;
  }

  .links {
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

  .map > iframe {
    width: 33rem;
    height: 30rem;
  }

  .logo {
    height: 10rem;
    margin-top: 10rem;

    > :first-child {
      width: 18rem;
      height: 7rem;

      p {
        color: ${({ theme }) => theme.COLORS.GRAY};
        font-size: 1.3rem;
        bottom: 1rem;
        right: 3rem;
      }
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
    .links, .map {
    width: 33rem;
    height: 30rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: 3px solid ${({ theme }) => theme.COLORS.ORANGE};
  }
  }
`;