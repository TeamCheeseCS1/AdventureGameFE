import React from "react";
import { GameCont } from "../Styles/formStyle.module.scss";

import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";

const GameContainer = () => {
  return (
    <div className={GameCont}>
      <div>Game Page</div>
      <RoomInfo />
      <PusherFeed />
      <Controls />
    </div>
  );
};

export default GameContainer;
