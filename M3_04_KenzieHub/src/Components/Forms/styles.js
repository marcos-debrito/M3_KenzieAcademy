import styled from "styled-components";

export const Container = styled.div`
  .logo__login {
    max-width: 80vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2.5rem;

    > img {
      width: 50%;
      min-width: 6.25rem;
    }
  }

  .logo__register {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.875rem 0px;
    figure {
      margin: 0px;
      > img {
        width: 50%;
        min-width: 7.5rem;
      }
    }

    a {
      text-decoration: none;
      background-color: var(--c-grey-3);
      color: white;
      padding: 0.625rem 1.25rem;
      border-radius: 0.25rem;
    }
  }

  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  flex-wrap: wrap;
  align-content: center;
`;

export const StyledForm = styled.form`
  padding: 0.625rem;
  width: 80vw;
  max-width: 27rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  background-color: var(--c-grey-3);
  color: var(--c-grey-0);
  margin-bottom: 50px;
  border-radius: 4px;

  h2 {
    align-self: center;
    margin-bottom: 2.5rem;
  }

  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 10px 0px;
    gap: 8px;
  }

  input {
    outline: none;
    border: 1px solid transparent;
    max-width: 100%;
    height: 2.2rem;
    padding-left: 1.25rem;
    background-color: var(--c-grey-2);
    color: var(--c-grey-0);
    border-radius: 0.4rem;
  }

  input:focus {
    border: 1px solid white;
    color: white;
  }

  p {
    align-self: center;
    font-size: 0.6rem;
    color: var(--c-grey-1);
    font-weight: 600;
  }

  button,
  .register {
    width: 100%;
    font-weight: 500;
    font-size: var(--f-button);
    color: var(--c-grey-0);
    border-radius: 0.4rem;
    padding: 0.75rem 0;
    transition: 0.3s ease-in-out;
  }

  .login {
    margin-top: 2.5rem;
    background-color: var(--c-primary);
  }

  .login:hover {
    background-color: var(--c-primary-focus);
  }

  .register {
    text-decoration: none;
    text-align: center;
    background-color: var(--c-grey-1);
  }

  .register:hover {
    background-color: var(--c-grey-2);
  }

  select {
    border-radius: 0.4rem;
    background-color: var(--c-grey-2);
    color: var(--c-grey-1);
    border: 1px solid transparent;
    outline: none;
    padding: 10px 5px;

    option {
      margin: 40px;
    }
  }

  select:focus {
    color: var(--c-grey-0);
    border: 1px solid white;
  }

  .box__password {
    position: relative;
    img {
      position: absolute;
      right: 4%;
      top: 58%;
      width: 1.25rem;
      cursor: pointer;
    }
  }
`;

export const Warning = styled.span`
  font-size: 10px;
  font-weight: 300;
  color: var(--c-negative);
`;
