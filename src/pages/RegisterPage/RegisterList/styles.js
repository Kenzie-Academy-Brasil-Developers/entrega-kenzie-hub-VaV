import styled from 'styled-components';
import { Headline1 } from '../../../styles/typography';

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Navbar = styled.nav`
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

export const UserDiv = styled.div`
width: clamp(20rem, 100%, 180rem);
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: space-around;
padding: 1rem;

@media (min-width: 25.25rem) {
    gap: 2rem;
  }
`

export const UserName = styled.h1`
  font-size: 1.125rem;
  font-family: 'Inter';
  font-weight: 700;
  font-style: normal;
  line-height: 1.75rem;
  text-decoration: none;
  text-transform: none;
  padding-bottom: 1rem;
`;

export const UserModule = styled.h3`
  font-size: 0.75rem;
  font-family: 'Inter';
  font-weight: 400;
  font-style: normal;
  line-height: 22px;
  text-decoration: none;
  text-transform: none;

  color: var(--color-grey-1);
`;
