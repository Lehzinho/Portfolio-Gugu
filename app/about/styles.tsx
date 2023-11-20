import { styled } from "styled-components";

export const Container = styled.nav`
  padding-top: 20px;
  overflow-x: scroll;
  .about {
    margin-left: 27px;
  }
`;

export const DropDownMenuContainer = styled.div`
  margin-top: 30px;
`;

export const Info = styled.div`
  color: #607b96;
  padding: 0 27px;
  h3 {
    margin-top: 38px;
  }
  p {
    margin-top: 17px;
    line-height: 140%;
  }
`;
export const CodeSniped = styled.div`
  p:first-child {
    margin: 25px 27px;
  }
`;

export const SnippetCard = styled.div`
  .code {
    padding: 24px;
    color: red;
    border-radius: 15px;
    border: 1px solid #1e2d3d;
    background: #011221;
  }
  .code,
  .info {
    margin: 0 24px 24px;

  }
  .info{
    
    color: #607B96;

font-size: 14px;
font-style: normal;
font-weight: 450;
line-height: 150%; /* 21px */
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 17px 27px;
  img {
    border-radius: 100%;
  }
  p {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
    p {
      display: inline-block;
      color: #5565e8;
      span {
        font-size: 12px;
        color: #607b96;
      }
    }
  }
`;
