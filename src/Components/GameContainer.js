import React, { useContext } from "react";
import { GameCont, User } from "../Styles/formStyle.module.scss";
import Pusher from "pusher-js";
import { ChatContext } from "../contexts/ChatContext";
import { MoveRoomContext } from "../contexts/MoveRoomContext";

import NavBar from "./NavBar";
import Controls from "./HUD/Controls";
import RoomInfo from "./HUD/RoomInfo";
import PusherFeed from "./HUD/PusherFeed";
import Chat from "./HUD/Chat";
import Map from "./Map";

const GameContainer = (props) => {
  const { chat, setChat } = useContext(ChatContext);
  const { room } = useContext(MoveRoomContext);

  const pusher = new Pusher("a85348ba3aac64a15fbd", {
    cluster: "us2",
  });
  pusher.subscribe("chat");
  // setChat({ chats: [] });

  const payload = {
    username: chat.username,
    message: chat.text,
  };

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
