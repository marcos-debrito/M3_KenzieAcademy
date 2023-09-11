import { css, styled } from "styled-components";

export const ModalOverlay = styled.div`
  background-color: transparent;
  position: fixed;
  margin: 0;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  min-height: 100vh;
  background: rgba(0, 0, 0, 0.3);

  > div {
    width: 100%;
  }
  .modal__box {
    border-radius: 0.5rem;
    min-height: 300px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    max-width: 31.25rem;
    background: white;
    margin: 0 auto;

    > ul {
      border-bottom: 1px solid var(--c-gray-100);
      min-width: 100%;
      margin: 0 auto;
      min-height: 18.75rem;
      max-height: 18.75rem;
      overflow-y: auto;
    }
  }

  .button__close {
    align-self: center;
    width: 3.75rem;
    height: 2.5rem;
    background-color: transparent;
    color: white;
    font-weight: 700;
    transition: 0.6s;
  }

  .button__close:hover {
    transform: scale(1.2);
  }

  .empty {
    font-weight: 700;
    width: 40px;
    margin: 0 auto;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--c-primary);
    border-radius: 8px;
  }
`;

export const HeaderModal = styled.header`
  border-radius: 5px 5px 0px 0px;
  height: 3.125rem;
  background-color: var(--c-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;

  > span {
    font-weight: 700;
    font-size: var(--f-heading-3);
  }
`;

export const ModalPrice = styled.div`
  width: 80%;
  margin: 0.625rem auto;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  color: var(--c-gray-300);
`;

export const ModalButton = styled.button`
  display: block;
  width: 80%;
  margin: 1.25rem auto 1.25rem auto;
  height: 3.75rem;
  background-color: var(--c-gray-100);
  color: var(--c-gray-300);
  transition: 0.3s ease-in-out;
  font-weight: 600;
  ${({ cursor }) => {
    switch (cursor) {
      case "disable":
        return css`
          cursor: not-allowed;
        `;
      case "notDisable":
        return css`
          cursor: pointer;
          &:hover {
            background-color: #fc451e;
            color: var(--c-gray-100);
          }
        `;
    }
  }}
`;

export const OrderButton = styled.button`
  display: block;
  width: 80%;
  margin: 1.25rem auto 1.25rem auto;
  height: 3.75rem;
  background-color: var(--c-gray-100);
  color: var(--c-gray-300);
  transition: 0.3s ease-in-out;
  font-weight: 600;
  ${({ cursor }) => {
    switch (cursor) {
      case "disable":
        return css`
          cursor: not-allowed;
        `;
      case "notDisable":
        return css`
          cursor: pointer;
          &:hover {
            background-color: var(--c-sucess);
            color: white;
          }
        `;
    }
  }}
`;
