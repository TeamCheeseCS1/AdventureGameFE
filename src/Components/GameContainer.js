import React, { useContext, useEffect } from "react";
import { GameCont, User } from "../Styles/formStyle.module.scss";
import axiosWithAuth from "../Middleware/axiosWithAuth";
import { MoveRoomContext } from "../contexts/MoveRoomContext";

import NavBar from "./NavBar";
import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Chat from "./HUD/Chat";
import Map from "./Map";

const GameContainer = (props) => {
  const { room, setRoom } = useContext(MoveRoomContext);

  console.log(`Authorization: Token ${localStorage.getItem("key")}`);

  // useEffect(() => {
  axiosWithAuth()
    .get("/adv/init/")
    .then((res) => {
      console.log(res.data);
      setRoom({
        username: res.data.name,
        location: res.data.location,
        description: res.data.description,
        players: res.data.players,
        items: ["dusty can", "bloody shotgun"],
      });
    })
    .catch((error) => error.message);
  // }, [setRoom]);

  return (
    <div>
      <NavBar props={props} />
      <div className={GameCont}>
        <Map />
        <RoomInfo />
        <Chat />
        <PusherFeed />
        <div className={User}>{room.username}</div>
        <Controls />
      </div>
    </div>
  );
};

export default GameContainer;
