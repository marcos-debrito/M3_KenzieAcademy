import { styled } from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid grey;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    width: 1200px;
    margin: 40px 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 8.125rem;
    }

    button {
      background-color: var(--c-grey-3);
      color: white;
      padding: 10px 15px;
      border-radius: 0.25rem;
      font-weight: 600;
      font-size: 0.75rem;
      transition: 0.2s ease-in-out;
    }

    button:hover {
      background-color: var(--c-grey-2);
    }
  }
`;

export const SectionLine = styled.section`
  border-bottom: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const ContainerInfos = styled.div`
  width: 1200px;
  margin: 40px 5%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 700;
    font-size: 18px;
  }

  h3 {
    color: var(--c-grey-1);
    font-weight: 600;
    font-size: 12px;
    align-self: center;
  }
`;
