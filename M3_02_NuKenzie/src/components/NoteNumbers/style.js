import styled from "styled-components";

export const StyledDivValue = styled.div`
  border: 1px solid var(--c-grey-2);
  border-radius: 4px;
  padding: 25px 10px;
  width: 90vw;
  max-width: 450px;
  min-width: 350px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    span {
      font-weight: 700;
      font-size: var(--f-title-3);
    }
    p {
      font-weight: 700;
      font-size: var(--f-title-3);
      color: var(--c-primary);
    }
  }

  .span__text {
    color: var(--c-grey-3);
    font-size: var(--f-title-4);
    font-weight: 400;
  }
`;
