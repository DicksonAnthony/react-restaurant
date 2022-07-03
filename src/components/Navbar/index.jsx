import React from "react";
import { Bars, Nav, NavIcons, NavLink } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavLink to="/">Pizza</NavLink>
      <NavIcons onClick={toggle}>
        <p>Menu</p>
        <Bars />
      </NavIcons>
    </Nav>
  );
};

export default Navbar;
