import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  color: var(--color-grey-0);

  gap: 1rem;

  > button {
    width: 16.5625rem;
    height: 2.5rem;

    margin-top:1rem;

    color: var(--color-grey-0);
    background-color: var(--color-primary);
    border-radius: 0.25rem;
    border: none;

    &:hover {
      background-color: var(--color-primary-50);
    }
  }
`;

export const Select = styled.select`
  width: 16.5625rem;
  height: 2.5rem;

  padding: 0.5rem;
  margin-top:1rem;

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
`;
