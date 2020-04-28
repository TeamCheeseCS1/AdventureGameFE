import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Registration from "./Components/Login & Register/Register";
import Login from "./Components/Login & Register/Login";
import GameContainer from "./Components/GameContainer";
import PrivateRoute from "./Components/PrivateRoute";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/registration" component={Registration} />
      <PrivateRoute path="/play" component={GameContainer} />
    </div>
  );
}

export default App;
