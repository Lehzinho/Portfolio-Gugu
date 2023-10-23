import styled from "styled-components";

export const Container = styled.section`
  align-self: self-start;
  grid-area: content;
  display: flex;
  flex-direction: column;
  padding: 1.6875rem;
  padding-top: 1.3125rem;
  color: #ffffff;
  p:first-child {
    margin-bottom: 1.875rem;
  }
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    transition: all 0.3s;
    &.active {
      transform: rotate(-90deg);
    }
  }
`;

export const Dir = styled.ul`
  margin-top: 10px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  &.active {
    max-height: 200px;
  }
  li {
    margin-left: 25px;
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    align-items: center;
    ul {
      flex-basis: 100%;
      overflow: hidden;
      max-height: 0;
      transition: all 0.3s ease-in-out;
      &.active {
        max-height: 300px;
      }
    }
  }
`;
