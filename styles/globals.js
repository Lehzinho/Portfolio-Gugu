'use client'
import {
    createGlobalStyle
  } from "styled-components";
  
  export default createGlobalStyle `
    * {
      font-weight: 400;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    .container{
      display: grid;
      height: calc(100dvh - 30px);
      grid-template-areas: 'header' 'main' 'footer';
      grid-template-rows: auto 1fr auto;
      border: 1px solid #2b4057;
      background: #011627;
      border-radius: 8px;
    }
  
    body {
      
      color: #E5E9F0;
      background-color: #010C15;
      padding: 15px;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }
  
    body, input, button, textarea {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
      outline: none;
  
    }
  
    p {
      font-size: clamp(.75rem, 3vw, 1.125rem);
      line-height: 20px;
      letter-spacing: 0.005em;
    }
  
    a,
    a:visited {

      text-decoration: none;
    }

    h1 {
      font-size: 62px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }
  
    botton, a {
      cursor: pointer;
      transition: filter 0.2s;
    }
  
    button:hover, a:hover {
      filter: brightness(0.9)
    }
  
    li {
      list-style: none;
    }
  `;