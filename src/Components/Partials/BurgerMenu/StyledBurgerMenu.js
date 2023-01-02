import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.Header};
  color: ${({ theme }) => theme.colors.onHeader};
  font-size: 1rem;

  width: 100%;
`;

export const MainNav = styled.nav`

  @media (max-width: 768px) {
    padding: 1rem;
    height: auto;
    li {
      width: 100%;
    }
  }

  height: 140px;
  @media screen and (max-width: 600px) {
    height: auto;
  }

  transition: padding 3s ease;
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.Header};
  color: ${({ theme }) => theme.colors.onHeader};
  transition: sticky 0.5s ease-in;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 900;
`;
export const Logo = styled(Link)`
  svg {
    width: 100%;
  }
`;

export const Hamburger = styled.div`
  margin: 1rem 0;
  margin-left: auto;

  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  li.amount {
    position: relative;

    span {
      position: absolute;
      top: -5px;
      right: -5px;

      @media (max-width: 768px) {
        top: 5px;
        right: 15px;
      }
      background-color: green;
      color: #fff;
      padding: 0.1rem;
      aspect-ratio: 1/1;
      font-size: 13px;
      width: 15px;
      text-align: center;
      border-radius: 50%;
    }
  }
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "auto" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;
export const MenuLink = styled(NavLink)`
  padding: 0.4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.onBackground};

  &.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.onPrimary};

  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  @media (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
