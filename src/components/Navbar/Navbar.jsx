import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  Menu,
  Item,
  NavLinks,
  NavBtn,
  BtnLink
} from "./navStyles";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <Menu>
            <Item>
              <NavLinks to="about">About</NavLinks>
            </Item>

            <Item>
              <NavLinks to="discover">Discover</NavLinks>
            </Item>

            <Item>
              <NavLinks to="services">Services</NavLinks>
            </Item>

            <Item>
              <NavLinks to="logIn">Log In</NavLinks>
            </Item>
          </Menu>

          <NavBtn>
            <BtnLink to="/signUp">Sign Up</BtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
