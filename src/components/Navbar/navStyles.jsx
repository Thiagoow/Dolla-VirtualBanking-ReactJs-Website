import styled from "styled-components";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

/*======== CSS Variables: ========*/
const varHeaderHeight = "5rem";
const firstColor = "#01bf77";
const firstAltColor = "#0d9466";

/*======== Components: ========*/
export const Nav = styled.nav`
  background: #000;
  height: ${varHeaderHeight};
  //margin-top: ${varHeaderHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${varHeaderHeight};
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.div`
  height: 5rem;
`;

//This navLinks component is a link from react-scroll lib:
export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.signUp {
    color: ${firstColor};
  }

  &:hover {
    color: ${firstAltColor};
  }

  &.active {
    border-bottom: 3px solid ${firstColor};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BtnLink = styled(Link)`
  border-radius: 50px;
  background: ${firstColor};
  white-space: nowrap;
  padding: 10px 24px;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: ${firstAltColor};
  }
`;
