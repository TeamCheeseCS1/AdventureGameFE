import React from "react";
import { GameCont } from "../Styles/formStyle.module.scss";

import NavBar from "../Components/navBar";
import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Map from "./Map";

const GameContainer = (props) => {
  return (
    <div>
      <NavBar props={props} />
      <div className={GameCont}>
        <Map />
        <RoomInfo />
        <PusherFeed />
        <Controls />
      </div>
    </div>
  );
};

export default GameContainer;
