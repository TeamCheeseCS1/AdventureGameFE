import React, { useContext, useEffect, useState } from "react";
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
  // const { room, setRoom } = useContext(MoveRoomContext);
  const [initRoom, setInitRoom] = useState({
    username: "",
    location: "",
    description: "",
    players: [],
    items: [],
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/adv/init/")
      .then((res) => {
        // console.log(res.data);
        setInitRoom({
          username: res.data.name,
          location: res.data.title,
          description: res.data.description,
          players: res.data.players,
          items: ["dusty can", "bloody shotgun"],
        });
      })
      .catch((error) => error.message);
  }, [setInitRoom]);
  // console.log(initRoom);
  return (
    <div>
      <NavBar props={props} />
      <div className={GameCont}>
        <Map />
        <RoomInfo initRoom={initRoom} />
        <Chat />
        <PusherFeed />
        <div className={User}>{initRoom.username}</div>
        <Controls />
      </div>
    </div>
  );
};

export default GameContainer;
