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
} from "./sideStyles";

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
          <SideLinks to="services" className="signUp" onClick={toggle}>
            Sign Up
          </SideLinks>
        </Menu>

        <BtnWrap>
          <SideRoute to="logIn">Log In</SideRoute>
        </BtnWrap>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
