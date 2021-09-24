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

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Bella</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about-me">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to="skills">Skills</NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
            <NavItem>
              <NavLinks to="experience">Experience</NavLinks>
            </NavItem>
          </NavMenu>
          <NavMenu>
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
