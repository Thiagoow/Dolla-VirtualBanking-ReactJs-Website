import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
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
  const [scrollNav, setScrollNav] = React.useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      //80px = 5rem -> Header height
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  //Activate the function above:
  React.useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      {/* This makes all the icons be white: */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="home">dolla</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>

            <Menu>
              <Item>
                <NavLinks
                  to="about"
                  /*
                  smooth={true}
                  duration={500}
                  */
                  spy={true}
                  exact="true"
                  //Header height in px -> 80px = 5rem:
                  offset={-80}
                  activeClass="active"
                >
                  About
                </NavLinks>
              </Item>

              <Item>
                <NavLinks
                  to="discover"
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Discover
                </NavLinks>
              </Item>

              <Item>
                <NavLinks
                  to="services"
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Services
                </NavLinks>
              </Item>

              <Item>
                <NavLinks
                  to="signUp"
                  className="signUp"
                  spy={true}
                  exact="true"
                  offset={-80}
                  activeClass="active"
                >
                  Sign Up
                </NavLinks>
              </Item>
            </Menu>

            <NavBtn>
              <BtnLink to="/logIn">Log In</BtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
