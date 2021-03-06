import React, { useState, useContext } from "react";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
// import { Spinner } from "reactstrap";
import {
  LoginWrapper,
  Input,
  Button,
  RegisterStyles,
} from "../../Styles/formStyle.module.scss";
import axiosWithAuth from "../../Middleware/axiosWithAuth";

import NavBar from "../NavBar";

function Login(props) {
  const [loginState, setLoginState] = useState({ username: "", password: "" });
  const [successAlert, setSuccessAlert] = useState(false);
  const [visibleWarning, setWarning] = useState(false);
  const [error, setError] = useState({ username: "", password1: "" });
  const [spinner, setSpin] = useState(false);
  const { room, setRoom } = useContext(MoveRoomContext);

  const handleChanges = (e) => {
    e.preventDefault();
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
  };

  const validateRegister = (props) => {
    if (props.password === "" && props.username === "") {
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
    if (!props.password) {
      setError({ password: "Password Cannot Be Blank" });
      return false;
    }
    return true;
  };

  const onDismiss = () => {
    setSuccessAlert(false);
    setWarning(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateRegister(loginState);
    if (isValid) {
      setSpin(true);
      axiosWithAuth()
        .post("/login/", loginState)
        .then((res) => {
          localStorage.setItem("key", res.data.key);
          setRoom({
            username: res.data.username,
            location: res.data.title,
            id: res.data.location_room_id,
            description: res.data.room_description,
            players: res.data.players,
            items: res.data.items,
            nsew: res.data.nsew,
            inventory: [],
          });
          props.history.push("/play");
        })
        .catch((err) => {
          setWarning(true);
          setSpin(false);
          setError("Wrong Username/Password");
        })
        .finally(() => {
          setLoginState({ username: "", password: "" });
        });
    } else {
      setWarning(true);
    }
  };

  return (
    <div className={RegisterStyles}>
      <NavBar props={props} />
      <div className={LoginWrapper}>
        <h1>Login to account</h1>
        <form className="form1" onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            className={Input}
            type="text"
            name="username"
            placeholder="username..."
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
          <div color="danger" isOpen={visibleWarning} toggle={onDismiss}>
            {error.username}
            <br />
            {error.password ? error.password : ""}
          </div>
          <button type="submit" className={Button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
