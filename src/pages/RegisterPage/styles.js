import styled from 'styled-components';

export const NavbarRegister = styled.nav`
  width: clamp(20rem, 100%, 100rem);
  height: 7.5rem;
  z-index: 1;

  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid var(--color-grey-3);
`;

export const NavButtonRegister = styled.ul`
  list-style: none;
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 2.5rem;
    background-color: var(--color-grey-3);
    color: var(--color-grey-1);
    border-radius: 0.25rem;
    border: none;
  }

  &:hover {
    background-color: var(--color-grey-2);
  }
`;

export const TextContainer = styled.div`
  padding-top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-0);
`;

export const LoginRegContainer = styled.div`
  width: 18.75rem;
  height: 50rem;
  background-color: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--color-grey-0);

 
  @media (min-width: 48rem) {
    width: 23.4375rem;
    height: 50rem;
  }
`;