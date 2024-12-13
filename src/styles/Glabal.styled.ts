import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing:border-box;
    }

    body {
    margin: 0;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height:  1.2;
    min-width: 375px; //база!!!! 
}

    a{
        text-decoration: none;
        color: ${theme.colors.font};
        cursor: pointer;
    }

    ul{
        list-style: none;
    }

    button{
        background-color: unset;
        border: none;
        cursor: pointer;
    }

    section{
        padding: 100px 0;

        @media ${theme.media.mobile}{
            padding: 60px 0;
        }
    }

    section:nth-of-type(1) {
        background-color: ${theme.colors.primaryBg};
}

    section:nth-of-type(2) {
        background-color: ${theme.colors.secondaryBg};
}

    section:nth-of-type(3) {
        background-color: ${theme.colors.primaryBg};
}

    section:nth-of-type(4) {
        background-color: rgba(34, 42, 54, 0.95);
}

    section:nth-of-type(5) {
        background-color: ${theme.colors.secondaryBg};
}
`