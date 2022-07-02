import styled from "styled-components";
import { Link as NavLink } from "react-router-dom";

export const Nav = styled.div`
  background: red;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;
export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;
