import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameNav, Nav } from "../Styles/formStyle.module.scss";
import { LoggedInContext } from "../contexts/LoggedIn";

const NavBar = ({ props }) => {
  const { loggedIn, setLoggedIn } = useContext(LoggedInContext);

  const logout = () => {
    window.localStorage.clear("key");
    setLoggedIn(false);
  };

  return (
    <div className="container-nav">
      <nav className="nav-bar">
        {props.history.location.pathname === "/play" ? (
          <div className={GameNav}>
            <p>Garbage Man Simulator 5000</p>
            <Link onClick={() => logout} to="/login">
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
