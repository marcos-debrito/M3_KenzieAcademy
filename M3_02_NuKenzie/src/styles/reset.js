import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  min-width: 450px;
  min-height: 100vh;
}

body {
  margin: 0 auto;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

main {
  display:flex;
  flex-direction: row;
  flex-wrap:wrap;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1%;
}

button {
  cursor: pointer;
  background: transparent;
}

ul, ol {
  list-style: none;
}

a{
  text-decoration: none;
}

input{
  border: 1px solid transparent;
  height: 30px;
  padding: 0px 10px;
  background: transparent;
  border-radius: 4px;
}
`;
