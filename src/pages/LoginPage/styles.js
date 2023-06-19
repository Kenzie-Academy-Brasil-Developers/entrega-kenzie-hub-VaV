import styled from 'styled-components';

export const LoginPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  padding-top: 4rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 125px;
  }
`;

export const LoginContainer = styled.div`
  width: 18.75rem;
  height: 26.875rem;
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-grey-0);

  border: 2px solid white;
  @media (min-width: 48rem) {
    width: 23.4375rem;
    height: 33.75rem;
  }
`;

export const InfoLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.6rem;

  > button {
    width: 16.5625rem;
    height: 2.5rem;

    color: var(--color-grey-0);
    background-color: var(--color-primary);
    border-radius: 0.25rem;
    border: none;

    &:hover {
      background-color: var(--color-primary-50);
    }
  }
`;

export const EmailInput = styled.input`
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
`;

export const PasswordInput = styled.input`
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
`;

export const Phrase = styled.p`
  font-size: 0.75rem;
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  line-height: 22px;
  text-decoration: none;
  text-transform: none;

  color: var(--color-grey-1);
`;

export const SigninButton = styled.button`
  width: 16.5625rem;
  height: 2.5rem;

  color: var(--color-grey-0);
  background-color: var(--color-grey-1);
  border-radius: 0.25rem;
  border: none;

  &:hover {
    background-color: var(--color-grey-2);
  }
`;
