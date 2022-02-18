import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./styles";

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
          </Menu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
