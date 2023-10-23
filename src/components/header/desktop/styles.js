import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.Lines};
  background-color: transparent;
  p {
    &:first-child {
      margin: 0 164px 0 22px;
    }
    &:last-child {
      margin: 0 23px;
    }
  }
  .contactMe {
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.COLORS.Lines};
    height: 100%;
  }
`;
export const Nav = styled.nav`
  margin-right: auto;
  height: 100%;
  justify-content: center;
  align-items: center;

  ul {
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes anime {
    from {
      height: 0;
    }
    to {
      height: 100%;
    }
  }
  a {
    position: relative;
    padding: 0 31px 0 31px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: inherit;
    border-left: 1px solid ${({ theme }) => theme.COLORS.Lines};
    transition: 2s;

    &:last-child {
      border-right: 1px solid ${({ theme }) => theme.COLORS.Lines};
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      background-color: ${({ theme }) => theme.COLORS.activeLink};
      bottom: 0;
      left: 0;
      transition: .2s;
    }
    &.active::after{
      height: 3px;
    }
  }
`;
