import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
  width: clamp(20rem, 100%, 180rem);
  height: 7.5rem;
  z-index: 1;

  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid var(--color-grey-3);
`;

export const NavButton = styled.ul`
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

export const Header = styled.header`
  width: clamp(20rem, 100%, 180rem);
  height: 7.1875rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  border-bottom: 1px solid var(--color-grey-3);

  color: var(--color-grey-0);
`;

export const Main = styled.main`
  width: clamp(20rem, 100%, 180rem);
  padding: 2.5rem;

  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;

  color: var(--color-grey-0);
`;
