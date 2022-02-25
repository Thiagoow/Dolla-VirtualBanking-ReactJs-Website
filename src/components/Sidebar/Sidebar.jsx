import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  SideLinks,
  BtnWrap,
  SideRoute
} from "./sidStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <SideLinks to="about" onClick={toggle}>
            About
          </SideLinks>
          <SideLinks to="discover" onClick={toggle}>
            Discover
          </SideLinks>
          <SideLinks to="services" onClick={toggle}>
            Services
          </SideLinks>
          <SideLinks to="logIn" className="logIn" onClick={toggle}>
            Log In
          </SideLinks>
        </Menu>

        <BtnWrap>
          <SideRoute to="signUp">Sign Up</SideRoute>
        </BtnWrap>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
