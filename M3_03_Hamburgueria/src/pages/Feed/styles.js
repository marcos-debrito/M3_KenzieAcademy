import { styled } from "styled-components";

export const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 40px auto 0px auto;
  width: 98vw;
  max-width: 1000px;
  overflow-x: scroll;
  padding: 10px 0px;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    overflow-x: hidden;
    justify-content: center;
    width: 80vw;
  }
`;
