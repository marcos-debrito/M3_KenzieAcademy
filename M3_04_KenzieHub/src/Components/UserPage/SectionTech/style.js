import { styled } from "styled-components";

export const StyledSection = styled.section`
  color: white;
  font-weight: 600;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;

  .tech__title {
    margin: 1.9rem 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: var(--c-grey-0);
      font-weight: 400;
      font-size: 16px;
    }

    span {
      background-color: var(--c-grey-3);
      padding: 5px 10px;
      cursor: pointer;
      border-radius: 0.25rem;
      height: 1.4375rem;
      align-self: center;
      transition: 0.2s ease-in-out;
    }

    span:hover {
      background-color: var(--c-grey-2);
    }
  }

  .tech__list {
    list-style: none;
    background-color: var(--c-grey-3);
    min-height: 500px;
    border-radius: 4px;
    padding: 20px;
    margin: 10px;
    overflow-y: auto;
    overflow-x: hidden;

    li {
      align-self: center;
      max-width: 90%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px;
      margin: 30px auto;
      background-color: var(--c-grey-4);
      border-radius: 4px;
      transition: 0.2s ease-in-out;
    }

    li:hover {
      background-color: var(--c-grey-2);
      cursor: pointer;
      transform: scale(1.02);
    }
  }

  .span__noTech {
    display: flex;
    font-weight: 400;
    color: grey;
    justify-content: center;
    margin: 3% auto;
  }
`;
