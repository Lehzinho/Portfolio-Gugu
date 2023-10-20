import styled from "styled-components";
import theme from "../styles/theme";
export const Container = styled.div`
  width: 90vw;
  height: 850px;

  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 70px auto 70px;
  grid-template-columns: 100%;
  align-items: center;

  margin-top: 30px;

  color: ${({ theme }) => theme.COLORS.font1};
  background-color: ${({ theme }) => theme.COLORS.Background1};
  border: 1px solid ${({ theme }) => theme.COLORS.Lines};
  border-radius: 8px;

  @media (min-width: 1750px) {
    width: 1700px;
  }
`;
