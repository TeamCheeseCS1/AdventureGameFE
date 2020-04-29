import React, { useContext, useEffect } from "react";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
import {
  RoomInfoStyles,
  RoomInfoDiv,
  IpDiv,
  RoomTitles,
  PlayerCont,
} from "../../Styles/formStyle.module.scss";

const RoomInfo = ({ initRoom }) => {
  const { room, setRoom } = useContext(MoveRoomContext);

  useEffect(() => {
    setRoom({
      username: initRoom.username,
      location: initRoom.location,
      description: initRoom.description,
      players: initRoom.players,
      items: ["dusty can", "bloody shotgun"],
    });
  }, [initRoom]);

  // console.log(room);
  return (
    <div className={RoomInfoStyles}>
      <div>room info</div>
      <div className={RoomInfoDiv}>
        <div>{room.location}</div>
        <div>{room.description}</div>
        <div className={IpDiv}>
          <div>
            <div className={RoomTitles}>items</div>
            <div className={PlayerCont}>
              {room.items.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
          <div>
            <div className={RoomTitles}>players</div>
            <div className={PlayerCont}>
              {room.players.map((player) => (
                <p>{player}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
