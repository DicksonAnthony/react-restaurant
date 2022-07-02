import React from "react";
import { Bars, Nav, NavIcons, NavLink } from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavIcons>
        <p>Menu</p>
        <Bars />
      </NavIcons>
    </Nav>
  );
};

export default Navbar;
