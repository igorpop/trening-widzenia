import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    
  }
  
  h1,h2,h3,h4,h5 {
    font-family: Montserrat, sans-serif;
  }


`;

export default GlobalStyle;
