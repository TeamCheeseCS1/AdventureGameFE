import React from "react";
import { GameCont } from "../Styles/formStyle.module.scss";

import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Map from "./Map";

const GameContainer = () => {
  return (
    <div className={GameCont}>
      <Map />
      <RoomInfo />
      <PusherFeed />
      <Controls />
    </div>
  );
};

export default GameContainer;
