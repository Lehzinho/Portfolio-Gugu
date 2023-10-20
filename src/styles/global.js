import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  background-color: #010c15;
}

body, input, button, textarea{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  outline: none;
}

p{
  line-height: 20px;
  letter-spacing: 0.005em;
}

a{
  text-decoration: none;
  color: ${({ theme }) => theme.COLORS.font1};
}
a:visited{
      color: ${({ theme }) => theme.COLORS.font1};
    }

botton, a{
  cursor: pointer;
  transition: filter 0.2s;
}

button:hover, a:hover{
  filter: brightness(0.9)
}

li{
  list-style: none;
}



`;
