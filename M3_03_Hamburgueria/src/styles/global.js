import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
    --c-primary: #27AE60;
    --c-secondary: #EB5757;

    --c-gray-600: #333333;
    --c-gray-300: #828282;
    --c-gray-100: #E0E0E0;
    --c-gray-0: #F5F5F5;

    --c-negative: #E60000;
    --c-warning: #FFCD07;
    --c-sucess: #168821;
    --c-information: #155BCB;

    --f-heading-1: 26px;
    --f-heading-2: 22px;
    --f-heading-3: 18px;

    --f-headline: 16px;
    --f-body: 14px;
    --f-caption: 12px;
    }

    *{
      margin: 0;
      padding: 0;
      user-select:none
    }

    body, html{
      max-width: 100vw;
      min-height: 80vh;
      box-sizing:border-box;
      margin: 0 auto;
      overflow-x: hidden;
    }

    body{
      background-attachment: fixed;
      -webkit-font-smoothing: antialiased;

      overflow-x: hidden;
    }

    body, input, button{
      font-family: 'Inter', sans-serif;
      border: none;
      outline: none;
    }

    h1, h2, h3, h4, h5, strong {
        font-weight: 500;
    }

    button, img {
      cursor:pointer;
    }
`;
