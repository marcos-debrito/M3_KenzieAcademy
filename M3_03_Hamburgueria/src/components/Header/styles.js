import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  max-width: 100vw;

  padding: 20px;
  overflow-x: hidden;
  background-color: var(--c-gray-0);
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    width: clamp(300px, 100vw, 1400px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;

    > .header__logo {
      width: 60%;
      display: flex;
      justify-content: space-between;
      margin-right: 20px;

      .header__counter {
        position: relative;
        .span__counter {
          background-color: var(--c-primary);
          font-size: var(--f-body);
          color: white;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          position: absolute;
          top: -0.75rem;
          right: -0.625rem;
          font-weight: 900;
        }
      }
    }
  }

  .header__search {
    width: 100%;
    max-width: 25rem;
    min-width: 12.5rem;
    border: 0.0625rem solid red;
    padding: 10px;
    background-color: white;
    border-radius: 0.5rem;
    border: 0.125rem solid var(--c-gray-100);
    display: flex;
    align-items: center;

    > input {
      font-size: var(--f-heading-3);
      width: 100%;
    }
    > img {
      background-color: var(--c-primary);
      padding: 0.625rem 0.9375rem;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
