import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  color: #ffffff;
  position: relative;
  svg {
    width: 355px;
    height: 377px;
    position: absolute;
    opacity: calc(0.6);
    top: 10%;
    filter: blur(60px);
    &:first-child {
      transform: rotate(94deg);
      right: 10%;
    }
    &:nth-child(2) {
      left: 20%;
    }
  }
`;
export const Intro = styled.div`
  z-index: 1;
  margin-top: 6.25rem;

  p {
    font-size: 1.125rem;
  }

  h1 {
    font-size: 3.875rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.greenCode};
  }
`;

export const Git = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  font-size: 0.875rem;

  span {
    color: ${({ theme }) => theme.COLORS.commentCode};
  }

  P {
    margin-top: 1rem;

    span {
      &:first-child {
        color: ${({ theme }) => theme.COLORS.blueCode};
      }

      &:nth-child(2) {
        color: ${({ theme }) => theme.COLORS.greenCode};
      }

      &:last-child {
        color: ${({ theme }) => theme.COLORS.orangeCode};
      }
    }
  }
`;
