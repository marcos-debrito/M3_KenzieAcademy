import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  min-width: 100%;
  background: rgba(0, 0, 0, 0.7);

  .modal__box {
    border-radius: 0.5rem;
    position: relative;
    width: 100%;
    max-width: 370px;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    header {
      display: flex;
      justify-content: space-around;
      color: black;
      width: 100%;
      background-color: var(--c-grey-2);
      border-radius: 4px 4px 0px 0px;

      p {
        color: white;
      }

      button {
        background-color: transparent;
        color: var(--c-grey-1);
      }
    }
  }
`;

export const ModalForm = styled.form`
  background-color: var(--c-grey-3);
  width: 100%;
  margin: 0px;
  display: flex;
  flex-direction: column;

  .container__inputs {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.875rem;
    gap: 0.625rem;

    input {
      color: white;
      min-width: 97.5%;
      height: 3rem;
      padding-left: 0.625rem;
      border-radius: 4px;
      background-color: var(--c-grey-2);
      border: 1px solid transparent;
    }

    input:focus,
    select:focus {
      border: 1px solid white;
    }

    select {
      color: white;
      outline: none;
      border: 1px solid transparent;
      width: 100%;
      height: 3rem;
      padding-left: 0.625rem;
      border-radius: 4px;
      background-color: var(--c-grey-2);
    }
  }

  button {
    color: white;
    height: 2.5rem;
    background-color: var(--c-primary);
    border-radius: 4px;
    margin: 1.875rem;
  }

  .button__save {
    min-width: 60%;
    margin: 1.875rem;
  }

  .button__delete {
    background-color: var(--c-grey-2);
    max-width: 30%;
    margin: 0;
  }
`;
