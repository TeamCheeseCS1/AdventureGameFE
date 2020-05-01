import React, { useState } from "react";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
// import { Spinner } from "reactstrap";
import {
  LoginWrapper,
  Input,
  Button,
  RegisterStyles,
} from "../../Styles/formStyle.module.scss";

import NavBar from "../NavBar";

function Register(props) {
  const [Login, setLogin] = useState(true);
  const [register, setRegister] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const [successAlert, setSuccessAlert] = useState(false);
  const [visibleWarning, setWarning] = useState(false);
  const [error, setError] = useState({ username: "", password1: "" });
  const [spinner, setSpin] = useState(false);
  const handleChanges = (e) => {
    e.preventDefault();
    onDismiss();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const onDismiss = () => {
    setSuccessAlert(false);
    setWarning(false);
  };

  // const Register = () => {
  //   setLogin(false);
  //   setSuccessAlert(false);
  //   setWarning(false);
  //   setRegister({ username: "", password1: "", password2: "" });
  // };

  // ^May use this for spinner if we decide to implement it

  const validateRegister = (props) => {
    if (
      props.password1 === "" &&
      props.username === "" &&
      props.password2 === ""
    ) {
      setError({
        username: "Username Cannot Be Blank",
        password: "Password Cannot Be Blank",
      });
      return false;
    }
    if (!props.username) {
      setError({ username: "Username Cannot Be Blank" });
      return false;
    }
    if (!props.password1 && !props.password2) {
      setError({ password: "Password Cannot Be Blank" });
      return false;
    }
    if (!props.password1) {
      setError({ password: "Password Cannot Be Blank" });
      return false;
    } else if (props.password1.length < 8) {
      setError({ password: "Password Must Be At Least 8 Characters" });
      return false;
    }
    if (props.password1 !== props.password2) {
      setError({ password: "Passwords Do Not Match" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateRegister(register);
    if (isValid) {
      setSpin(true);
      axiosWithAuth()
        .post("/registration/", register)
        .then((res) => {
          localStorage.setItem("key", res.data.key);
          props.history.push("/login");
          setLogin(true);
          setSuccessAlert(true);
          setSpin(false);
        })
        .catch((error) => {
          setRegister({ username: "", password1: "", password2: "" });
          setSpin(false);
          setWarning(true);
          setError(error.message);
        })
        .finally(() => {
          setRegister({ username: "", password1: "", password2: "" });
        });
    } else {
      setWarning(true);
    }
  };

  return (
    <div className={RegisterStyles}>
      <NavBar props={props} />
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
          <p>Confirm Password</p>
          <input
            className={Input}
            type="password"
            name="password2"
            placeholder="password..."
            value={register.password2}
            onChange={handleChanges}
          />
          <div isOpen={visibleWarning} toggle={onDismiss}>
            {error.username}
            <br />
            {error.password ? error.password : ""}
          </div>
          <button className={Button} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
