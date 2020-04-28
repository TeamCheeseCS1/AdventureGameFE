import React from "react";
import { Link } from "react-router-dom";
import { GameNav, Nav } from "../Styles/formStyle.module.scss";

const NavBar = ({ props }) => {
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
          <div className={Nav}>
            <Link to="/login">Login</Link>
            <p>Garbage Man Simulator 5000</p>
            <Link to="/registration">Registration</Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
