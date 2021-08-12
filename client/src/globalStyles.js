import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Rubik&display=swap');
    *{
        box-sizing: border-box;
    }
    *::before, *::after{
        box-sizing: inherit;
    }
    :root{
        --primary-color:#264653;
        --secondary-color: #2A9D8F;
        --thertiary-color: #E9C46A;
        --fourth-color: #F4A261;
        --fifth-color:#E76F51;
        --title-font: 'Rubik', sans-serif;
        --regular-font:  'Lato', sans-serif;
        --white-color: ivory; 
        --black-color: #333;
        --error-color:#d00000;
        --success-color:#b5e48c;
    }
    body{
        margin:0; 
        padding:0;
         background-color: var(--primary-color);
         color: var(--secondary-color);
    }

    p,span,a,li,input, label{
        font-family: var(--regular-font);
    }
    h1,h2,h3,h4,h5,h6{
        font-family: var(--title-font);
    }
`;

export default GlobalStyle;
