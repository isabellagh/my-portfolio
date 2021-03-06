import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="about">Isabella GH</NavLogo>
          {/* <Alert>Website under construction!</Alert> */}
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          {/* <NavMenu>
            <NavItem>
              <NavLinks to="about-me">About</NavLinks>
            </NavItem>
          </NavMenu> */}
          <NavMenu>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItem>

            {/* <NavItem>
              <NavLinks to="experience">Experience</NavLinks>
            </NavItem> */}

            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
