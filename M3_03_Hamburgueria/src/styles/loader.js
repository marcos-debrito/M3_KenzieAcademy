import styled, { keyframes } from "styled-components";

const b7 = keyframes`
    20% {background-size:9px 20% ,9px 50% ,9px 50% }
    40% {background-size:9px 100%,9px 20% ,9px 50% }
    60% {background-size:9px 50% ,9px 100%,9px 20% }
    80% {background-size:9px 50% ,9px 50% ,9px 100%}
`;

export const StyledDiv = styled.div`
  width: 45px;
  height: 60px;
  --c: linear-gradient(#27ae60 0 0);
  background: var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;
  background-size: 9px 50%;
  background-repeat: no-repeat;
  animation: ${b7} 1s infinite linear alternate;
  margin: 20% auto;
`;
