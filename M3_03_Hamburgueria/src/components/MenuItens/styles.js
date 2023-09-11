import { styled } from "styled-components";

export const ListItens = styled.li`
  list-style: none;
  border: 0.125rem solid var(--c-gray-100);
  border-radius: 0.3125rem;
  width: 15.625rem;
  height: 23.75rem;
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  transition: 0.2s ease-in-out;

  &:hover {
    border: 2px solid var(--c-primary);

    transform: scale(1.05);
    cursor: pointer;
  }
  > figure {
    background-color: var(--c-gray-0);
    border-radius: 4px 4px 0px 0px;
    > img {
      display: block;
      margin: 0 auto;
      height: 12.5rem;
      object-fit: cover;
    }
  }
`;

export const ContainerInfos = styled.div`
  width: 80%;
  margin: 0.625rem auto;
  display: flex;
  flex-direction: column;
  gap: 15px;

  > h2 {
    align-self: self-start;
    font-weight: 700;
    height: 2.5rem;
    font-size: var(--f-headline);
  }

  > span {
    font-weight: 400;
    font-size: 0.625rem;
    color: var(--c-gray-300);
  }

  > p {
    font-weight: 600;
    font-size: 0.75rem;
    color: var(--c-primary);
  }

  button {
    width: 50%;
    height: 40px;

    font-size: 0.875rem;
    font-weight: 600;

    background-color: #bdbdbd;
    color: white;

    border-radius: 0.25rem;

    transition: 0.3s ease-in-out;
    margin-bottom: 0.625rem;
  }

  button:hover {
    background-color: var(--c-primary);
  }
`;
