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
          <SideLinks
            to="about"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            About
          </SideLinks>
          <SideLinks
            to="discover"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Discover
          </SideLinks>
          <SideLinks
            to="services"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Services
          </SideLinks>
          <SideLinks
            to="signUp"
            className="signUp"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Sign Up
          </SideLinks>
        </Menu>

        <BtnWrap>
          <SideRoute to="/login">Log In</SideRoute>
        </BtnWrap>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
