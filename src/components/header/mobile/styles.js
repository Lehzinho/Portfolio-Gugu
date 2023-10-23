import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Lines};
  padding: 1.125rem;
  position: relative;
  img {
    margin-left: auto;
  }
  span {
    height: 2px;
    width: 18px;
    background-color: ${({ theme }) => theme.COLORS.font1};
    box-shadow: 0 6px ${({ theme }) => theme.COLORS.font1},
      0 -6px ${({ theme }) => theme.COLORS.font1};
  }
`;

export const Nav = styled.nav`
  position: absolute;
  left: 0;
  max-height: 0;
  top: 101%;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.Background1};
  z-index: 10;
  transition: max-height 0.4s ease;

  ul {
    li {
      padding: 1.062rem 1.125rem;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.Lines};
    }
  }

  p {
    margin-left: 1.125rem;
  }

  &.active {
    max-height: 250px;
  }
`;
export const Contact = styled.div`
  opacity: 0;
  grid-area: footer;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.COLORS.Lines};
  transition: opacity 0.4s ease;
  ul {
    display: flex;
    a {
      border-left: 1px solid ${({ theme }) => theme.COLORS.Lines};
    }
  }
  p {
    margin-left: 18px;
  }
  &.active {
    opacity: 1;
  }
`;
