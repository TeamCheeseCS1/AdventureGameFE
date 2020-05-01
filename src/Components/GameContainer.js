import React, { useContext } from "react";
import { GameCont, User } from "../Styles/formStyle.module.scss";
import { ChatContext } from "../contexts/ChatContext";
import { MoveRoomContext } from "../contexts/MoveRoomContext";

import NavBar from "./NavBar";
import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Chat from "./HUD/Chat";
import Map from "./Map";

const GameContainer = (props) => {
  const { room } = useContext(MoveRoomContext);

  return (
    <div>
      <NavBar props={props} />
      <div className={GameCont}>
        <Map />
        <RoomInfo />
        <Chat />
        <PusherFeed />
        <div className={User}>{room.username && room.username}</div>
        <Controls />
      </div>
    </div>
  );
};

export default GameContainer;
