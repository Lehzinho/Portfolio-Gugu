import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: calc(100vw - 30px);
  grid-template-rows: 75px auto 55px;
  height: calc(100vh - 30px);
  align-items: center;
  justify-content: center;
  margin: 0.9375rem;
  overflow: hidden;
  color: ${({ theme }) => theme.COLORS.font1};
  background-color: ${({ theme }) => theme.COLORS.Background1};
  border: 1px solid ${({ theme }) => theme.COLORS.Lines};
  border-radius: 0.5rem;
`;
