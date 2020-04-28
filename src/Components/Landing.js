import React from "react";
import { LandingStyles } from "../Styles/formStyle.module.scss";

const Landing = () => {
  return (
    <div className={LandingStyles}>
      <h1>Garbage Man Simulator 5000</h1>
      <div>
        <a href="/login">
          <p>login</p>
        </a>
        <a href="/registration">
          <p>register</p>
        </a>
      </div>
    </div>
  );
};

export default Landing;
