import React, { useState } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import {
  LoginWrapper,
  Input,
  Button,
} from "../../Styles/formStyle.module.scss";

function Register(props) {
  const [register, setRegister] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/registration/", register)
      .then((res) => {
        localStorage.setItem("key", res.data.key);
        props.history.push("/login");
      })
      .catch((err) => {
        console.log("Error Register In", err);
      });
  };
  console.log("handlechanges", register);
  console.log(props);
  return (
    <div className={LoginWrapper}>
      <h1>Create an Account</h1>
      <form className="form1" onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          className={Input}
          type="text"
          name="username"
          placeholder="username..."
          onChange={handleChanges}
          value={register.username}
        />
        <p>Password</p>
        <input
          className={Input}
          type="password"
          name="password1"
          placeholder="password..."
          value={register.password1}
          onChange={handleChanges}
        />
        <p>Repeat Password</p>
        <input
          className={Input}
          type="password"
          name="password2"
          placeholder="password 2..."
          value={register.password2}
          onChange={handleChanges}
        />
        <button className={Button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
