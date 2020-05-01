import React, { useContext } from "react";
import { MoveCharContext } from "../contexts/MoveCharContext";
import { MoveRoomContext } from "../contexts/MoveRoomContext";
import {
  MapStyles,
  CharStyles,
  RoomDef,
  N,
  S,
  E,
  W,
  NN,
  SS,
  EE,
  WW,
  ErrorMsg,
} from "../Styles/formStyle.module.scss";

const Map = () => {
  const { moveChar } = useContext(MoveCharContext);
  const { room } = useContext(MoveRoomContext);
  console.log(room);
  return (
    <div className={MapStyles}>
      {room.nsew && room.nsew[0] ? <div className={NN}></div> : ""}
      {room.nsew && room.nsew[1] ? <div className={SS}></div> : ""}
      {room.nsew && room.nsew[2] ? <div className={EE}></div> : ""}
      {room.nsew && room.nsew[3] ? <div className={WW}></div> : ""}
      <div className={RoomDef}>
        <img
          alt="nic cage"
          src="../download.png"
          className={
            moveChar === "n"
              ? N
              : moveChar === "s"
              ? S
              : moveChar === "e"
              ? E
              : moveChar === "w"
              ? W
              : CharStyles
          }
        />
      </div>
      {room.error_msg ? <div className={ErrorMsg}>{room.error_msg}</div> : ""}
    </div>
  );
};

export default Map;
