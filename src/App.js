import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/navBar";
import Registration from "./Components/Login & Register/Register";
function App() {
  return (
    <div className="App">
      {" "}
      <Route path="/" component={NavBar} />{" "}
      <Route exact path="/registration" component={Registration} />
    </div>
  );
}

export default App;
