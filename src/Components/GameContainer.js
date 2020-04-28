import React, { useState, useEffect } from "react";
import { GameCont } from "../Styles/formStyle.module.scss";
import axiosWithAuth from "../Middleware/axiosWithAuth";

import NavBar from "../Components/NavBar";
import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Chat from "./HUD/Chat";
import Map from "./Map";

const GameContainer = (props) => {
  const [init, setInit] = useState({
    username: "",
    location: "",
    description: "",
    players: [],
    items: [],
  });

  useEffect(() => {
    console.log(
      `Authorization: Token ${localStorage.getItem(localStorage.key(0))}`
    );
    axiosWithAuth()
      .get(
        "/adv/init/",
        `Authorization: Token ${localStorage.getItem(localStorage.key(0))}`
      )
      .then((res) => {
        console.log(res.data);
        setInit({
          username: res.data.username,
          location: res.data.location,
          description: res.data.description,
          players: res.data.players,
          items: res.data.items,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <NavBar props={props} />
      <div className={GameCont}>
        <Map />
        <RoomInfo init={init} />
        <Chat />
        <PusherFeed />
        <div>{init.username}</div>
        <Controls />
      </div>
    </div>
  );
};

export default GameContainer;
