import React, { useState } from "react";
import {
  LoginWrapper,
  Input,
  Button,
} from "../../Styles/formStyle.module.scss";
import axiosWithAuth from "../../Middleware/axiosWithAuth";

function Login(props) {
  const [loginState, setLoginState] = useState({ username: "", password: "" });

  const handleChanges = (e) => {
    e.preventDefault();
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login/", loginState)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
      })
      .catch((err) => {
        console.log("Error Logging In", err);
      });
  };

  return (
    <div className={LoginWrapper}>
      <h1>Login to account</h1>
      <form className="form1" onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          className={Input}
          type="text"
          name="username"
          placeholder="Placeholder"
          onChange={handleChanges}
          value={loginState.username}
        />

        <p>Password</p>
        <input
          className={Input}
          type="password"
          name="password"
          placeholder="password..."
          onChange={handleChanges}
          value={loginState.password}
        />

        <button type="submit" className={Button}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
