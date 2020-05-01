import React, { useState } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Registration from "./Components/LoginRegister/Register";
import Login from "./Components/LoginRegister/Login";
import GameContainer from "./Components/GameContainer";
import PrivateRoute from "./Components/PrivateRoute";
import Landing from "./Components/Landing";
import { MoveCharContext } from "./contexts/MoveCharContext";
import { MoveRoomContext } from "./contexts/MoveRoomContext";
import { ChatContext } from "./contexts/ChatContext";

function App() {
  const [moveChar, setMoveChar] = useState("");
  const [chat, setChat] = useState({
    text: "",
    username: "",
    chats: [],
  });
  const [room, setRoom] = useState({
    username: "",
    location: "",
    description: "",
    players: [],
    items: [],
    error_msg: "",
    player_item_id: "",
    inventory: [],
  });
  return (
    <MoveRoomContext.Provider value={{ room, setRoom }}>
      <MoveCharContext.Provider value={{ moveChar, setMoveChar }}>
        <ChatContext.Provider value={{ chat, setChat }}>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <PrivateRoute path="/play" component={GameContainer} />
          </div>
        </ChatContext.Provider>
      </MoveCharContext.Provider>
    </MoveRoomContext.Provider>
  );
}

export default App;
