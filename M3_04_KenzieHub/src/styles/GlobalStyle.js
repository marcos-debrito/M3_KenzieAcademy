import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 :root{
    --font-primary: 'Inter', sans-serif;
    --c-primary: #FF577F;
    --c-primary-focus: #FF427F;
    --c-primary-negative: #59323F;

    --c-grey-4: #121214;
    --c-grey-3: #212529;
    --c-grey-2: #343B41;
    --c-grey-1: #868E96;
    --c-grey-0: #F8F9FA;

    --c-sucess: #3FE864;
    --c-negative: #E83F5B;

    --f-title: 16px;
    --f-headline: 12px;

    --f-button: 14px;


    body, html{
      width: 100vw;
      min-height: 80vh;
      box-sizing:border-box;
      margin: 0 auto;
      font-family: var(--font-primary);
      padding: 0;
    }

    body{
      background-attachment: fixed;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      background-color: var(--c-grey-4);
    }

    body, button{
      border: none;
      outline: none;
    }

    button {
      cursor:pointer;
    }

 }
`;
