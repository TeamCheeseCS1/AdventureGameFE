import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GameNav } from "../Styles/formStyle.module.scss";

const NavLinks = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: black 1px solid;
`;

const NavBar = (props) => {
  return (
    <div className="container-nav">
      <nav className="nav-bar">
        {props.history.location.pathname === "/play" ? (
          <div className={GameNav}>
            <p>Garbage Man Simulator 5000</p>
            <Link
              onClick={() => window.localStorage.clear("token")}
              to="/login"
            >
              logout
            </Link>
          </div>
        ) : (
          <NavLinks>
            <Link to="/login">Login</Link>
            <Link to="/registration">Registration</Link>
          </NavLinks>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
