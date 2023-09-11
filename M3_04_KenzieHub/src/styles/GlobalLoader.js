import styled, { keyframes } from "styled-components";

const loading = keyframes`
  100% {transform: rotate(1turn)}
`;

export const Loader = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 4px solid #0000;
  border-right-color: #ff577f97;
  position: relative;
  animation: ${loading} 0.5s infinite linear;
  margin: 10% auto;

  :before,
  :after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: inherit;
    animation: inherit;
    animation-duration: 1s;
  }
  :after {
    animation-duration: 2s;
  }
`;
