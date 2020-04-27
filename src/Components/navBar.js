import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: black 1px solid;
`;

const NavBar = () => {
  return (
    <div className="container-nav">
      <nav className="nav-bar">
        <NavLinks>
          <Link to="/login">Login</Link>
          <Link to="/registration">Registration</Link>
        </NavLinks>
      </nav>
    </div>
  );
};

export default NavBar;
