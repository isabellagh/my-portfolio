import React from "react";
import { Nav, NavbarContainer, NavLogo } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
      <NavbarContainer>
          <NavLogo to='/'>
              <h1>Bella</h1>
          </NavLogo>
      </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
