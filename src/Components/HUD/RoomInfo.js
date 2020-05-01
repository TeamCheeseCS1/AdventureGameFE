import React, { useContext } from "react";
import { MoveRoomContext } from "../../contexts/MoveRoomContext";
import {
  RoomInfoStyles,
  RoomInfoDiv,
  IpDiv,
  RoomTitles,
  PlayerCont,
  ItemCont,
  ItemsTitle,
} from "../../Styles/formStyle.module.scss";

const RoomInfo = () => {
  const { room } = useContext(MoveRoomContext);

  return (
    <div className={RoomInfoStyles}>
      <div>room info</div>
      <div className={RoomInfoDiv}>
        <div>{room.location}</div>
        <div>{room.description}</div>
        <div className={IpDiv}>
          <div>
            <div className={ItemsTitle}>items</div>
            <div className={ItemCont}>
              {/* {room.items.map((item) => (
                <p>{item}</p>
              ))} */}
            </div>
          </div>
          <div>
            <div className={RoomTitles}>players</div>
            <div className={PlayerCont}>
              {room.players && room.players.map((player) => <p>{player}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomInfo;
