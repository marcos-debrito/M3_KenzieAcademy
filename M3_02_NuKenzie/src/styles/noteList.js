import styled, { keyframes, css } from "styled-components";

export const SectionInfos = styled.section`
  width: 50%;
  min-width: 400px;
  padding: 0px 10px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 500px;

  .infos__span {
    font-weight: 700;
    font-size: var(--f-headline);
    color: var(--c-grey-4);
  }
`;

const rightToLeft = keyframes`
  from{
    transform: translateX(150%)
  } to {
    transform: translateX(0)
  }
`;

export const StyledLi = styled.li`
  height: 150px;
  width: 100%;
  max-width: 500px;
  background-color: var(--c-grey-1);
  color: var(--c-grey-4);
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  border-left: 3px solid ${(color) => color.color};
  border-radius: 4px;
  margin-bottom: 15px;

  animation: ${rightToLeft} 1s ease;

  .div__top {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-weight: 700;
      font-size: var(--f-title-3);
      color: var(--c-grey-4);
      overflow-x: auto;
    }
    p {
      font-weight: 400;
      font-size: var(--f-title-4);
      color: var(--c-grey-3);
    }
  }

  .div__bottom {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;

    span {
      color: var(--c-grey-4);
      font-size: var(--f-title-4);
      font-weight: 400;
    }

    button {
      width: 3.125rem;
      height: 1.25rem;
      background-color: var(--c-grey-2);
      border-radius: 2px;
      font-size: 0.625rem;
      font-weight: 400;
      border: none;
    }

    button:hover {
      transition: 0.4s ease;
      background-color: var(--c-grey-4);
      color: var(--c-grey-2);
    }
  }

  :hover {
    transition: 0.6s ease-in-out;
    background-color: var(--c-white);
    transform: scale(1.01);
    box-shadow: 0rem 0.25rem 2rem -0.75rem rgba(0, 0, 0, 0.25);
    cursor: pointer;
  }

  @media (min-width: 889px) {
    flex-direction: row;
    justify-content: space-between;
    max-height: 90px;
    .div__bottom {
      align-items: end;
    }
  }
`;

export const StyledP = styled.p`
  font-size: 1.375rem;
  font-weight: 700;
  color: var(grey-3);
`;
