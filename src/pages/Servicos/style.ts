import styled from "styled-components";
import arrowToLeft from "../../assets/imgs/arrowToLeft.png";
import arrowToRight from "../../assets/imgs/arrowToRight.png";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BROWN};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;

  > div:not(.carrossel, .row) {
    padding: 0 3rem 15rem;
  }

  > p {
    font-size: 1.4rem;
  }

  .row {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    width: 5rem;
    height: 2px;
  }
  
  .description, .description > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .description {
    gap: 8rem;
    margin-top: 5rem;
  }

  p {
    text-align: center;
  }

  svg {
    width: 8rem;
    height: 8rem;
  }

  @media(min-width: 550px) {
    > div:not(.carrossel, .row) {
      padding: 0 5rem 15rem;
    }

    p {
      width: 45rem;
    }
  }

  @media(min-width: 1000px) {
    .description {
      padding-bottom: 20rem !important;
      margin-top: 10rem;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 5rem;

      p {
        width: 30rem;
      }
    }
  }
`;

export const Carrossel = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  width: 100%;
  height: 45rem;
  display: flex;
  justify-content: center;

  > div {
    width: 50rem;
    position: relative;
  }

  .swiper {
    width: 100%;
    height: 50rem;
    position: absolute;
    top: -7rem;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .imgSlide {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 27rem;
    height: 27rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  }

  .descriptionSlide {
    color: ${({ theme }) => theme.COLORS.GRAY};
    width: 27rem;
    height: 50rem;
    position: absolute;
    top: 52%;
    left: 48%;
    transform: translate(-50%, -50%);

    > :first-child {
      width: 100%;
      height: 27rem;
      border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
    }

    > div {
      margin-left: 2rem;

      h2 {
        margin: 1rem 0;
      }

      p {
        text-align: left;
        width: 100%;
      }
    }
  }

  .swiper-button-prev::after, .swiper-button-next::after {
    content: none;
  }

  .swiper-button-prev {
    background: url(${ arrowToLeft });
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }

  .swiper-button-next {
    background: url(${ arrowToRight });
    background-size: contain;
    background-repeat: no-repeat;
    background-color: white;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
  }

  @media(min-width: 1000px) {
    height: 55rem;

    > div {
      width: 80rem;
    }

    .swiper {
      padding: 0 2.9rem;
    }
  }

  @media(min-width: 1400px) {
    > div {
      width: 130rem;
    }

    .swiper {
      height: 60rem;
    }

    .imgSlide {
      width: 32rem;
      height: 32rem;
    }

    .descriptionSlide {
      width: 32rem;
      top: 44%;

      > :first-child {
        height: 32rem;
      }

      > :last-child {
        margin-left: 1rem;

        p {
          font-size: 1.7rem;
          width: 33rem;
        }
      }
    }
  }
`;