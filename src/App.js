import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import NavBar from "./Components/navBar";
import Registration from "./Components/Login & Register/Register";
import Login from "./Components/Login & Register/Login";
import GameContainer from "./Components/GameContainer";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Route path="/" component={NavBar} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registration" component={Registration} />
      <PrivateRoute path="/play" component={GameContainer} />
    </div>
  );
}

export default App;
