import React from "react";
import { Link } from "react-router-dom";
import { LandingStyles } from "../Styles/formStyle.module.scss";

const Landing = () => {
  return (
    <div className={LandingStyles}>
      <h1>Garbage Man Simulator 5000</h1>
      <div>
        <Link to="/login">
          <p>login</p>
        </Link>
        <Link to="/registration">
          <p>register</p>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
