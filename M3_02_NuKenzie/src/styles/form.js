import styled from "styled-components";

export const StyledButton = styled.button`
  height: 3.125rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  background-color: var(--c-primary);
  color: var(--c-white);
  width: 100%;
  font-weight: 500;
  font-size: var(--f-title-3);

  :hover {
    transition: 0.6s ease-in-out;
    font-size: 1.0625rem;
    background-color: var(--c-primary-2);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 2.5rem;
  font-weight: 400;
  font-size: var(--f-title-3);
  background: var(--c-grey-1);
`;

export const StyledSelect = styled.select`
  height: 2.5rem;
  width: 100%;
  background: var(--c-grey-1);
  font-weight: 400;
  font-size: var(--f-title-4);
  padding: 0px 10px;
  border-radius: 4px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 31.25rem;

  label {
    font-size: var(--f-title-3);
    font-weight: 400;
  }
  p {
    font-size: var(--f-title-4);
    color: var(--c-grey-3);
    font-weight: 400;
  }
`;
