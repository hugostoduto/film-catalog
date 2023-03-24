import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

  h1,h2,h3,h4,h5,h6,p,hr{
    margin:0 ;
    padding: 0;
  }
 html, body{

    margin:0;
    padding: 0;
    width: 100%;
    height: 100vh;


    font-family: 'Ubuntu', sans-serif;
  }

`;
