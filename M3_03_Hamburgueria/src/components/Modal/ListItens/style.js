import { styled } from "styled-components";

export const LiCart = styled.li`
  margin: 1.25rem 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 4.375rem;
  padding: 0 40px;

  > div {
    display: flex;
    flex-direction: row;

    > figure {
      width: 5rem;
      background-color: var(--c-gray-100);
      align-items: center;
      margin-right: 1.25rem;
      display: flex;
      justify-content: center;
      align-items: center;

      > img {
        display: block;
        width: 50%;
      }
    }

    > .amountContainer {
      display: flex;
      flex-direction: column;

      > span {
        font-weight: 700;
        font-size: var(--f-headline);
      }
      .price {
        margin-top: 5px;
        color: var(--c-primary);
      }
    }
  }
  .trash {
    border: 1px solid transparent;
    transition: 0.6s ease;
    padding: 1px;
  }

  .trash:hover {
    border: 1px solid grey;
  }

  img {
    cursor: pointer;
  }
`;

export const EmptyDiv = styled.div`
  margin: 10% auto;
  width: 200px;
`;
