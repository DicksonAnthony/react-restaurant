import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 358px;
  height: 100%;
  background: #ffc500;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.5s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100px")};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;
export const CloseIcon = styled(FaTimes)`
  color: #000;
`;
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const SideMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
`;
export const SidebarLink = styled(Link)``;
export const SidebarRoute = styled.div``;
export const SideBtnWrap = styled.div``;
