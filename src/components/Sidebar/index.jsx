import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SideMenu>
        <SidebarLink to="/">Pizza</SidebarLink>
        <SidebarLink to="/">Dessert</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SideMenu>
      <SideBtnWrap>
        <SidebarRoute to="/">Order Move</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
