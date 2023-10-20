import styled from "styled-components";
export const Container = styled.div`
  height: 100%;
  grid-area: footer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.COLORS.Lines};

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.COLORS.Lines};
    padding: 13px;
  }
  p{
    margin: 0 22px;
  }
`;

export const SocialMedia = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: auto;
  a:last-child {
    border-right: 1px solid ${({ theme }) => theme.COLORS.Lines};
  }
`;
