import styled from 'styled-components';

export const FieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;

  border: none;
  gap: 1rem;

  > input {
    width: 16.5625rem;
    height: 2.5rem;

    padding: 0.5rem;

    font-size: 0.75rem;
    font-family: 'Inter';
    font-weight: 400;
    font-style: normal;
    line-height: 22px;
    text-decoration: none;
    text-transform: none;

    background-color: var(--color-grey-2);
    color: var(--color-grey-0);

    border: 1px solid var(--color-grey-0);
    border-radius: 0.1875rem;

    &:focus {
      border: 1px solid var(--color-primary);
      border-radius: 0.1875rem;
    }
  }
`;
