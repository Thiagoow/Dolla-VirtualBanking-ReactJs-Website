import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  Menu,
  Item,
  NavLinks
} from "./styles";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">dolla</NavLogo>
          <MobileIcon>
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
              <NavLinks to="signUp">Sign Up</NavLinks>
            </Item>
          </Menu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
