import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../../Middleware/axiosWithAuth";
import { Alert, Spinner } from "reactstrap";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 50%;
  margin: 0 auto;
  .img {
    margin-top: 1%;
  }
`;

const Input = styled.input`
  font-family: "Quicksand", sans-serif;
  font-size: 12px;
  padding: 10px;
  background: papayawhip;
  border: none;
  display: flex;
  flex-direction: column;
  align-content: center;
  background-color: white;
  border: black 1px solid;
  width: 15rem;
  margin: 8px;
  border-radius: 5px;
  color: black;
`;

const Button = styled.button`
  font-family: "Lato", sans-serif;
  width: 12rem;
  height: 12%;
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 4px;
  color: #1f1e1e;
  border: 2px solid #1f1e1e;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  margin: 30px;
  &:hover {
    background-color: #1f1e1e;
    color: #07fe20;
  }
`;

function Register(props) {
  const [register, setRegister] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const [warningBox, setWarningBox] = useState(false);
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);

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
        console.log("Error Logging In", err);
      });
  };
  console.log("handlechanges", register);
  console.log(props);
  return (
    <LoginWrapper>
      <h1>Create an Account</h1>
      <form className="form1" onSubmit={handleSubmit}>
        <p>Username</p>
        {!register.username ? (
          <Alert color="danger">Username is required</Alert>
        ) : (
          ""
        )}
        <Input
          type="text"
          name="username"
          placeholder="username..."
          onChange={handleChanges}
          value={register.username}
        />
        <p>Password</p>
        <Input
          type="password"
          name="password1"
          placeholder="password..."
          value={register.password1}
          onChange={handleChanges}
        />
        <p>Repeat Password</p>
        <Input
          type="password"
          name="password2"
          placeholder="password 2..."
          value={register.password2}
          onChange={handleChanges}
        />
        <button type="submit">Submit</button>
      </form>
    </LoginWrapper>
  );
}

export default Register;
